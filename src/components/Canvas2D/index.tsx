import useCanvas from "@hooks/useCanvas";
import Renderer2D from "@components/Canvas2D/Renderer2D";
import { analyser } from "@util";

export interface Canvas2DProps {
    width: string | number,
    height: string | number,
}

function BarGraph(r2d: Renderer2D, peakMaxArray: number[]) {
    for (let i = 0; i < peakMaxArray.length; i++) {
        const quadSize = 8;
        const x = i * quadSize + ((r2d.Width() / 2 - (peakMaxArray.length * quadSize / 2)));
        const y = r2d.Height();
        const height = peakMaxArray[i] * 0.25;
        r2d.DrawFillRect(x, y, quadSize, -height, 'cyan');
    }
}

function CircleGraph(r2d: Renderer2D, peakMaxArray: number[]) {
    if (!peakMaxArray.length) return;

    const quadSize = 8;
    const average = peakMaxArray.reduce((prev, curr) => prev + curr) / peakMaxArray.length;
    const scaledPeakMaxArray = peakMaxArray.map(peak => peak * 0.25);
    r2d.RectCircleStrip(r2d.Width() / 2, r2d.Height() / 2, scaledPeakMaxArray, 'red', 25 + average, quadSize);
}

function render2d(ctx: CanvasRenderingContext2D) {
    const r2d = Renderer2D.GetInstance(ctx);
    r2d.Clear('rgb(51, 51, 51)');
    const peakMaxArray = analyser.GetPeakMaxArray();
    BarGraph(r2d, peakMaxArray);
    CircleGraph(r2d, peakMaxArray);
}

function Canvas2D({ width, height }: Canvas2DProps) {

    const canvasRef = useCanvas({
        contextId: '2d',
        render: render2d,
    });

    return (
        <canvas id={'canvas2D'} ref={canvasRef} width={width} height={height} />
    );
}

export default Canvas2D;