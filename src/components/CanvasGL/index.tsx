import useCanvas from "@hooks/useCanvas";
import RendererGL from "@components/CanvasGL/RendererGL";
import { MeshBasicMaterial, MathUtils } from "three";
import { HSV2RGB, toRadian, analyser } from "@util";

export interface CanvasGLProps {
    width: string | number,
    height: string | number,
}

function renderGL(ctx: WebGL2RenderingContext) {
    const rgl = RendererGL.GetInstance(ctx);
    rgl.SetClearColour(51, 51, 51, 0);

    rgl.ClearScene();

    const peakMaxArray = analyser.GetPeakMaxArray();

    const startAngle: number = 0;
    const endAngle: number = 360;
    const availableAngleSpace: number = endAngle - startAngle;

    const circleRadius: number = 50;
    const barAmpScale: number = 0.125;
    const barHSV: [number, number, number] = [0, 100, 50];

    const angle: number = availableAngleSpace / peakMaxArray.length;
    for (let i = 0; i < peakMaxArray.length; i++)
    {
        // Angle in arc
        const a: number = i * angle + startAngle;

        const cx: number = 0;
        const cy: number = 0;
        const r: number = circleRadius;

        const x: number = cx + r * Math.cos(toRadian(a));
        const z: number = cy + r * Math.sin(toRadian(a));

        const cube = rgl.GetCube();
        const height: number = peakMaxArray[i] * barAmpScale;
        cube.scale.y = height; // scales in positive and negative direction so half in half on each direction
        cube.position.x = x;
        cube.position.y = height / 2; // translate the bottom upwards (because of scale)
        cube.position.z = z;

        // Add HSV colour
        const rgb = HSV2RGB(i * ((360 - barHSV[0]) / peakMaxArray.length) + barHSV[0], barHSV[1], barHSV[2]);
        (cube.material as MeshBasicMaterial).color.setRGB(rgb[0], rgb[1], rgb[2]);

        rgl.DrawMesh(cube);
    }

    // Add pulsating sphere
    if (peakMaxArray.length) {
        let average = peakMaxArray.reduce((prev, curr) => prev + curr) / peakMaxArray.length;
        average *= 0.25;
        average = MathUtils.clamp(average, 0, circleRadius);
        const sphere = rgl.GetSphere();
        sphere.scale.setScalar(average);
        rgl.DrawMesh(sphere);
    }

    rgl.RenderAndClearBuffers();
}

function CanvasGL({ width, height }: CanvasGLProps) {
    const canvasRef = useCanvas({
        contextId: 'webgl2',
        render: renderGL,
    });

    return (
        <canvas id={'canvasGL'} ref={canvasRef} width={width} height={height} />
    );
}

export default CanvasGL;