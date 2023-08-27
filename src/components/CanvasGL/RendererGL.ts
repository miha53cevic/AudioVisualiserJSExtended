import glMatrix from 'gl-matrix';
glMatrix.glMatrix.setMatrixArrayType(Array);

class Shader {
    private _gl: WebGL2RenderingContext;
    private _programID: WebGLProgram;
    private _viewMatrixLocation: WebGLUniformLocation | null;
    private _projectionMatrixLocation: WebGLUniformLocation | null;
    private _transformationMatrixLocation: WebGLUniformLocation | null;

    constructor(gl: WebGL2RenderingContext, vertShaderSource: string, fragShaderSource: string) {
        this._gl = gl;

        // Compile Vertex and Fragment shader
        const vertexShader = gl.createShader(gl.VERTEX_SHADER) as WebGLShader;
        gl.shaderSource(vertexShader, vertShaderSource);
        gl.compileShader(vertexShader);
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            console.log("Vertex Shader compile error!");
        }

        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER) as WebGLShader;
        gl.shaderSource(fragmentShader, fragShaderSource);
        gl.compileShader(fragmentShader);
        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            console.log("Fragment Shader compile error!");
        }

        // Create the program and link the shaders
        this._programID = gl.createProgram() as WebGLProgram;
        gl.attachShader(this._programID, vertexShader);
        gl.attachShader(this._programID, fragmentShader);
        gl.linkProgram(this._programID);
        if (!gl.getProgramParameter(this._programID, gl.LINK_STATUS)) {
            console.log("Program Link error!");
        }

        // Get all uniform locations
        this._transformationMatrixLocation = this.getUniformLocation("transformationMatrix");
        this._projectionMatrixLocation = this.getUniformLocation("projectionMatrix");
        this._viewMatrixLocation = this.getUniformLocation("viewMatrix");
    }

    public Bind() {
        this._gl.useProgram(this._programID);
    }

    public Unbind() {
        this._gl.useProgram(null);
    }

    public loadTransformationMatrix(matrix: glMatrix.mat4) {
        this.loadMatrix(this._transformationMatrixLocation!, matrix);
    }

    public loadProjectionMatrix(matrix: glMatrix.mat4) {
        this.loadMatrix(this._projectionMatrixLocation!, matrix);
    }

    public loadViewMatrix(matrix: glMatrix.mat4) {
        this.loadMatrix(this._viewMatrixLocation!, matrix);
    }

    private loadMatrix(location: WebGLUniformLocation, matrix: Iterable<number>) {
        this._gl.uniformMatrix4fv(location, false, matrix);
    }

    private getUniformLocation(variable: string) {
        return this._gl.getUniformLocation(this._programID, variable);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

class GLMath {
    static CreateTransformationMatrix(position: glMatrix.vec3, rotation: glMatrix.vec3, scale: glMatrix.vec3) {
        const transMatrix = glMatrix.mat4.create();
        glMatrix.mat4.translate(transMatrix, transMatrix, position);
        glMatrix.mat4.rotateX(transMatrix, transMatrix, glMatrix.glMatrix.toRadian(rotation[0]));
        glMatrix.mat4.rotateY(transMatrix, transMatrix, glMatrix.glMatrix.toRadian(rotation[1]));
        glMatrix.mat4.rotateZ(transMatrix, transMatrix, glMatrix.glMatrix.toRadian(rotation[2]));
        glMatrix.mat4.scale(transMatrix, transMatrix, scale);

        return transMatrix;
    }

    static CreateProjectionMatrix(FOV: number, Aspect: number, NEAR_PLANE: number, FAR_PLANE: number) {
        const mat = glMatrix.mat4.create();
        return glMatrix.mat4.perspective(mat, glMatrix.glMatrix.toRadian(FOV), Aspect, NEAR_PLANE, FAR_PLANE);
    }

    static CreateViewMatrix(position: glMatrix.vec3, rotation: glMatrix.vec3) {
        const viewMatrix = glMatrix.mat4.create();
        const inversePosition = glMatrix.vec3.create();
        glMatrix.vec3.negate(inversePosition, position);
        glMatrix.mat4.rotateX(viewMatrix, viewMatrix, glMatrix.glMatrix.toRadian(rotation[0]));
        glMatrix.mat4.rotateY(viewMatrix, viewMatrix, glMatrix.glMatrix.toRadian(rotation[1]));
        glMatrix.mat4.rotateZ(viewMatrix, viewMatrix, glMatrix.glMatrix.toRadian(rotation[2]));
        glMatrix.mat4.translate(viewMatrix, viewMatrix, inversePosition);

        return viewMatrix;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

class RendererGL {
    private _contextGL: WebGL2RenderingContext;
    private static _instance: RendererGL | null;

    // Create singleton, otherwise in renderGL we keep creating new instances
    public static GetInstance(contextGL: WebGL2RenderingContext) {
        if (!this._instance) {
            this._instance = new RendererGL(contextGL);
            console.log("[RendererGL]: Created rendererGL singleton");
        }
        else if (this._instance._contextGL !== contextGL) {
            this._instance = new RendererGL(contextGL);
            console.log("[RendererGL]: New contextGL instance");
        }
        return this._instance;
    }

    private constructor(ctx: WebGL2RenderingContext) {
        this._contextGL = ctx;
    }
}

export default RendererGL;