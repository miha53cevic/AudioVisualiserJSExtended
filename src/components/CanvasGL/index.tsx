import useCanvas from "@hooks/useCanvas";
import RendererGL from "@components/CanvasGL/RendererGL";

export interface CanvasGLProps {
    width: string | number,
    height: string | number,
}

function renderGL(ctx: WebGL2RenderingContext) {
    const rgl = RendererGL.GetInstance(ctx);
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