import useCanvas from "@hooks/useCanvas";
import RendererGL, { Entity } from "@components/CanvasGL/RendererGL";

export interface CanvasGLProps {
    width: string | number,
    height: string | number,
}

const cube: Entity = new Entity();
cube.Position = [0, 0, -1];

function renderGL(ctx: WebGL2RenderingContext) {
    const rgl = RendererGL.GetInstance(ctx);
    rgl.Clear(51, 51, 51, 255);
    rgl.RenderCube(cube);
}

function CanvasGL({ width, height }: CanvasGLProps) {
    const canvasRef = useCanvas({
        contextId: 'webgl2',
        render: renderGL,
    });

    return (
        <canvas ref={canvasRef} width={width} height={height} />
    );
}

export default CanvasGL;