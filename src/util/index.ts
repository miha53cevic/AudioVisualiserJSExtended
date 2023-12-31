import FFTAnalyser from "@analysers/FFTAnalyser";

export const audioElement = document.getElementById('audioElement') as HTMLAudioElement;

export function minuteSecondFormat(seconds: number) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    let minString = `${min}`;
    let secString = `${sec}`;
    if (min < 10) minString = `0${minString}`;
    if (sec < 10) secString = `0${secString}`;
    return `${minString}:${secString}`;
}

export function toRadian(degrees: number) {
    return (degrees * Math.PI) / 180;
}

// H[0, 360], S[0, 100], V[0, 100]
export function HSV2RGB(H: number, S: number, V: number) {
    if (H > 360 || H < 0 || S>100 || S < 0 || V>100 || V < 0) {
        console.error("The given HSV values are not in valid range!\n");
    }
    // input: h in [0,360] and s,v in [0,1] - output: r,g,b in [0,1]
    const h = H;
    const s = S / 100.0;
    const v = V / 100.0;
    const f = (n: number, k:number= (n + h / 60) % 6) => v - v * s * Math.max(Math.min(k, 4 - k, 1), 0);
    return [f(5),
            f(3),
            f(1),
    ];
}

export interface Visualiser2DSettings {
    barGraph: boolean,
    circleGraph: boolean,
    quadSize: number,
    peakScale: number,
    circleGraphInitialRadius: number,
    barGraphQuadColour: string,
    circleGraphQuadColour: string,
}

export interface VisualiserGLSettings {
    startAngle: number,
    endAngle: number,
    circleRadius: number,
    barAmpScale: number,
    barHSV: [number, number, number],
    cameraPos: [number, number, number],
    cameraRot: [number, number, number],
}

export const Visualiser2DDefaultSettings: Visualiser2DSettings = {
    barGraph: true,
    circleGraph: true,
    quadSize: 8,
    peakScale: 0.25,
    circleGraphInitialRadius: 25,
    barGraphQuadColour: 'cyan',
    circleGraphQuadColour: 'red',
};

export const VisualiserGLDefaultSettings: VisualiserGLSettings = {
    startAngle: 0,
    endAngle: 360,
    circleRadius: 50,
    barAmpScale: 0.125,
    barHSV: [0, 100, 50],
    cameraPos: [0, 50, 70],
    cameraRot: [-45, 0, 0],
};

// TODO: Needs to be made into singleton or some kind of factory
export const analyser = new FFTAnalyser();