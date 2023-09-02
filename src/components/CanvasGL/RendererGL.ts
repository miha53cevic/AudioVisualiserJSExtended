import * as THREE from 'three';

class RendererGL {
    private _contextGL: WebGL2RenderingContext;
    private static _instance: RendererGL | null;
    private readonly _renderer: THREE.WebGLRenderer;
    private readonly _camera: THREE.PerspectiveCamera;
    private readonly _scene: THREE.Scene;
    private readonly _cube: THREE.Mesh;

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

        this._renderer = new THREE.WebGLRenderer({ antialias: true, canvas: ctx.canvas });

        this._camera = new THREE.PerspectiveCamera(90, this.Width() / this.Height(), 0.1, 1000);
        this._scene = new THREE.Scene();

        const geometry = new THREE.BoxGeometry(1.0, 1.0, 1.0);
        const material = new THREE.MeshBasicMaterial();
        this._cube = new THREE.Mesh(geometry, material);
        this._scene.add(this._cube);
        this._camera.position.x = 0;
        this._camera.position.y = 50;
        this._camera.position.z = 70;
        this._camera.rotation.set(
            THREE.MathUtils.degToRad(-45),
            THREE.MathUtils.degToRad(0),
            THREE.MathUtils.degToRad(0),
        );
        console.log("[RendererGL]: Constructor");
    }

    // values are [0, 255]
    public SetClearColour(r: number, g: number, b: number, a: number) {
        const colour = new THREE.Color(r / 255, g / 255, b / 255);
        this._renderer.setClearColor(colour, a / 255);
    }

    private Resize() {
        this._camera.aspect = this.Width() / this.Height()
        this._camera.updateProjectionMatrix();
        this._renderer.setSize(this.Width(), this.Height());
    }

    public RenderAndClearBuffers() {
        this.Resize();
        //console.log(this._renderer.getSize(new THREE.Vector2()))
        this._renderer.render(this._scene, this._camera);
    }

    public ClearScene() {
        this._scene.clear();
    }

    public GetCube() {
        const clone = this._cube.clone();
        clone.material = (clone.material as THREE.Material).clone(); // deep copy material
        return clone;
    }

    public DrawCube(cube: THREE.Mesh) {
        this._scene.add(cube);
    }
}

export default RendererGL;