import { glMatrix, vec3, mat4 } from 'gl-matrix';
glMatrix.setMatrixArrayType(Array);

export class Shader {
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
        console.log("[Shader]: Compiled and linked successfully");

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

    public loadTransformationMatrix(matrix: mat4) {
        this.loadMatrix(this._transformationMatrixLocation!, matrix);
    }

    public loadProjectionMatrix(matrix: mat4) {
        this.loadMatrix(this._projectionMatrixLocation!, matrix);
    }

    public loadViewMatrix(matrix: mat4) {
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

export class GLMath {
    static CreateTransformationMatrix(position: vec3, rotation: vec3, scale: vec3) {
        const transMatrix = mat4.create();
        mat4.translate(transMatrix, transMatrix, position);
        mat4.rotateX(transMatrix, transMatrix, glMatrix.toRadian(rotation[0]));
        mat4.rotateY(transMatrix, transMatrix, glMatrix.toRadian(rotation[1]));
        mat4.rotateZ(transMatrix, transMatrix, glMatrix.toRadian(rotation[2]));
        mat4.scale(transMatrix, transMatrix, scale);

        return transMatrix;
    }

    static CreateProjectionMatrix(FOV: number, Aspect: number, NEAR_PLANE: number, FAR_PLANE: number) {
        const mat = mat4.create();
        return mat4.perspective(mat, glMatrix.toRadian(FOV), Aspect, NEAR_PLANE, FAR_PLANE);
    }

    static CreateViewMatrix(position: vec3, rotation: vec3) {
        const viewMatrix = mat4.create();
        const inversePosition = vec3.create();
        vec3.negate(inversePosition, position);
        mat4.rotateX(viewMatrix, viewMatrix, glMatrix.toRadian(rotation[0]));
        mat4.rotateY(viewMatrix, viewMatrix, glMatrix.toRadian(rotation[1]));
        mat4.rotateZ(viewMatrix, viewMatrix, glMatrix.toRadian(rotation[2]));
        mat4.translate(viewMatrix, viewMatrix, inversePosition);

        return viewMatrix;
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

export class Camera {
    public Position: vec3;
    public Rotation: vec3;

    constructor(position: vec3 = [0, 0, 0], rotation: vec3 = [0, 0, 0]) {
        this.Position = position;
        this.Rotation = rotation;
    }

    public GetViewMatrix() {
        return GLMath.CreateViewMatrix(this.Position, this.Rotation);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

export class Entity {
    public Position: vec3;
    public Rotation: vec3;
    public Scale: vec3;

    constructor() {
        this.Position = [0, 0, 0];
        this.Rotation = [0, 0, 0];
        this.Scale = [0, 0, 0];
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

export class CubeMesh {
    public static readonly Vertices =  [
        -0.5, 0.5, -0.5,
        -0.5, -0.5, -0.5,
        0.5, -0.5, -0.5,
        0.5, 0.5, -0.5,

        -0.5, 0.5, 0.5,
        -0.5, -0.5, 0.5,
        0.5, -0.5, 0.5,
        0.5, 0.5, 0.5,

        0.5, 0.5, -0.5,
        0.5, -0.5, -0.5,
        0.5, -0.5, 0.5,
        0.5, 0.5, 0.5,

        -0.5, 0.5, -0.5,
        -0.5, -0.5, -0.5,
        -0.5, -0.5, 0.5,
        -0.5, 0.5, 0.5,

        -0.5, 0.5, 0.5,
        -0.5, 0.5, -0.5,
        0.5, 0.5, -0.5,
        0.5, 0.5, 0.5,

        -0.5, -0.5, 0.5,
        -0.5, -0.5, -0.5,
        0.5, -0.5, -0.5,
        0.5, -0.5, 0.5
    ];
    public static readonly Indices = [
        0, 1, 3,
        3, 1, 2,
        4, 5, 7,
        7, 5, 6,
        8, 9, 11,
        11, 9, 10,
        12, 13, 15,
        15, 13, 14,
        16, 17, 19,
        19, 17, 18,
        20, 21, 23,
        23, 21, 22
    ];
    private readonly _VAO: WebGLVertexArrayObject;
    private readonly _gl: WebGL2RenderingContext;

    constructor(gl: WebGL2RenderingContext) {
        this._gl = gl;

        // Create VAO & bind the VAO
        this._VAO = gl.createVertexArray() as WebGLVertexArrayObject;
        gl.bindVertexArray(this._VAO);

        // Bind the EBO and the VBO
        this.BindIndicesBuffer(CubeMesh.Indices);
        this.StoreDataInAttributeList(0, 3, CubeMesh.Vertices);

        // Unbind the VAO
        gl.bindVertexArray(null);
    }

    public Bind() {
        this._gl.bindVertexArray(this._VAO);
    }

    public GetIndicesSize() {
        return CubeMesh.Indices.length;
    }

    private BindIndicesBuffer(indices: number[]) {
        const EBO = this._gl.createBuffer();
        this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, EBO);
        this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(indices), this._gl.STATIC_DRAW);
        // no need to unbind because it has to be bound when drawing
    }

    private StoreDataInAttributeList(attributeID: number, size: number, data: number[]) {
        // Create and bind the VBO
        const VBO = this._gl.createBuffer();
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, VBO);
        // Send data to the VBO
        this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(data), this._gl.STATIC_DRAW);

        this._gl.enableVertexAttribArray(attributeID);
        this._gl.vertexAttribPointer(attributeID, size, this._gl.FLOAT, false, 0, 0);

        // Unbind VBO
        this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null);
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

export class CubeRenderer {
    private _gl: WebGL2RenderingContext;
    private _projectionMatrix: mat4;
    private _camera: Camera;
    private _shader: Shader;
    private _mesh: CubeMesh;

    constructor(gl: WebGL2RenderingContext) {
        this._gl = gl;

        this._projectionMatrix = GLMath.CreateProjectionMatrix(90, gl.canvas.width / gl.canvas.height, 0.1, 1000);
        this._camera = new Camera();
        const vertexShaderSource: string = `#version 300 es
            precision mediump float;
            layout(location = 0)in vec3 position;

            uniform mat4 transformationMatrix;
            uniform mat4 projectionMatrix;
            uniform mat4 viewMatrix;
             
            void main(void) {
                gl_Position = projectionMatrix * viewMatrix * transformationMatrix * vec4(position, 1.0);
            }
            `;
        const fragmentShaderSource: string = `#version 300 es
            precision mediump float;
            out vec4 Frag_colour;
        
            uniform sampler2D textureSampler;
        
            void main(void) {
                Frag_colour = vec4(1.0, 1.0, 1.0, 1.0);
            }
            `;
        this._shader = new Shader(gl, vertexShaderSource, fragmentShaderSource);
        this._shader.Bind();
        this._shader.loadProjectionMatrix(this._projectionMatrix);
        this._shader.loadViewMatrix(this._camera.GetViewMatrix())
        this._mesh = new CubeMesh(gl);
        this._shader.Unbind();
    }

    public Render(cube: Entity) {
        this._shader.Bind();
        this._mesh.Bind();
        this._shader.loadTransformationMatrix(GLMath.CreateTransformationMatrix(cube.Position, cube.Rotation, cube.Scale));

        const gl = this._gl;
        gl.drawElements(gl.TRIANGLES, this._mesh.GetIndicesSize(), gl.UNSIGNED_INT, 0);

        this._shader.Unbind();
    }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

class RendererGL {
    private _contextGL: WebGL2RenderingContext;
    private static _instance: RendererGL | null;
    private _cubeRenderer: CubeRenderer;

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

    public Width() { return this._contextGL.canvas.width; }
    public Height() { return this._contextGL.canvas.height; }

    private constructor(ctx: WebGL2RenderingContext) {
        this._contextGL = ctx;

        this._cubeRenderer = new CubeRenderer(ctx);
    }

    // values are [0, 255]
    public Clear(r: number, g: number, b: number, a: number) {
        this._contextGL.viewport(0, 0, this.Width(), this.Height());

        // Enable the depth buffer
        this._contextGL.enable(this._contextGL.DEPTH_TEST);

        // CLEAR DEPTH BUFFER BIT so triangles don't overlap
        // CLEAR COLOR BUFFER for background screen
        this._contextGL.clearColor(r / 255, g / 255, b / 255, a / 255);
        this._contextGL.clear(this._contextGL.COLOR_BUFFER_BIT | this._contextGL.DEPTH_BUFFER_BIT);
    }

    public RenderCube(cube: Entity) {
        this._cubeRenderer.Render(cube);
    }
}

export default RendererGL;