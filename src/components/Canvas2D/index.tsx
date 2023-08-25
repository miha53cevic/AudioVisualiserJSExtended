import useCanvas from "@hooks/useCanvas";
import Renderer2D from "@components/Canvas2D/Renderer2D";

export interface Canvas2DProps {
    width: string | number,
    height: string | number,
}

function render2d(ctx: CanvasRenderingContext2D) {
    const r2d = new Renderer2D(ctx);
    r2d.Clear('black');
}

function Canvas2D({ width, height }: Canvas2DProps) {

    const canvasRef = useCanvas({
        contextId: '2d',
        render: render2d,
    });

    return (
        <canvas ref={canvasRef} width={width} height={height} />
    );
}

export default Canvas2D;