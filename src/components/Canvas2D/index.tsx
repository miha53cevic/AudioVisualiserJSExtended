import useCanvas from "@hooks/useCanvas";
import Renderer2D from "@components/Canvas2D/Renderer2D";
import WebAudioAPIAnalyser from "@analysers/WebAudioAPIAnalyser.ts";

export interface Canvas2DProps {
    width: string | number,
    height: string | number,
}

const analyser = new WebAudioAPIAnalyser();
const audioElement = document.getElementById('audioElement') as HTMLAudioElement;

function render2d(ctx: CanvasRenderingContext2D) {
    const r2d = new Renderer2D(ctx);
    r2d.Clear('rgb(51, 51, 51)');
    if (!audioElement.paused || audioElement.currentTime) {
        const peakMaxArray = analyser.GetPeakMaxArray();
        r2d.Clear('rgb(51, 51, 51)');

        for (let i = 0; i < peakMaxArray.length; i++) {
            const quadSize = 8;
            const x = i * quadSize + ((r2d.Width() / 2 - (peakMaxArray.length * quadSize / 2)));
            const y = r2d.Height();
            const height = peakMaxArray[i];
            r2d.DrawFillRect(x, y, quadSize, -height, 'red');
        }
    }
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