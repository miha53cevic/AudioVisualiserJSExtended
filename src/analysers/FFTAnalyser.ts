import Analyser from "@analysers/Analyser";
import { audioElement } from "@util";
import FFT from 'fft.js';

class FFTAnalyser extends Analyser {
    private readonly _N: number;
    private _data: Float32Array;
    private _sampleRate: number;
    private _lastAudioSource: string;

    constructor(fftSize: number = 2**14) {
        super();

        this._N = fftSize;
        this._data = new Float32Array();
        this._sampleRate = 0;
        this._lastAudioSource = '';

        audioElement.oncanplaythrough = async () => {
            // Trigger on timeline change, no need to get audio again if it's the same
            if (audioElement.src === this._lastAudioSource) return;
            else this._lastAudioSource = audioElement.src;

            const res = await fetch(audioElement.src);
            const blob = await res.blob();
            const arrayBuffer = await blob.arrayBuffer();

            const audioContext = new AudioContext();

            // Decode audio
            const buffer = await audioContext.decodeAudioData(arrayBuffer);

            console.log(buffer);

            this._sampleRate = buffer.sampleRate;

            // Audio samples
            this._data = buffer.getChannelData(0);

            await audioContext.close();
        }
    }

    public GetPeakMaxArray(): number[] {
        if (audioElement.paused || audioElement.currentTime === 0) {
            return [];
        }
        // Get first data bin position for current time in the song
        // example: 5 seconds * 44100(sampleRate) means that our starting position is 220500
        //          and then we take N number of bins from that position onward
        const mark = Number.parseInt((this._audioElement.currentTime * this._sampleRate).toString());

        const input = new Float32Array(this._N);

        // Fill in input
        for (let i = 0; i < this._N; i++) {

            const index = i + mark;

            // Hamming window the input for smoother input values
            input[i] = this._data[index] * (0.54 - (0.46 * Math.cos(2.0 * Math.PI * (i / ((this._N - 1))))));
        }

        // Calculate fft
        const fft = new FFT(this._N);
        const output = fft.createComplexArray(); // stores real0, imag0, real1, imag1 so fftSize * 2 or this._N * 2
        fft.realTransform(output, input); // input is real numbers only of size fftSize (fills in only half of output)

        const peakMaxArray: number[] = [];

        // Calculate the magnitudes
        /* Only half of the data is useful */
        for (let i = 0; i < (this._N / 2); i++) {

            // bin frequency = binNumber * sampleRate / N
            const freq = i * this._sampleRate / this._N;
            const realPart = output[i * 2];
            const imagPart = output[i * 2 + 1];
            const magnitude = Math.sqrt(realPart*realPart + imagPart*imagPart);

            // Extract the peaks from defined frequency ranges
            for (let j = 0; j < this._freqBin.length - 1; j++) {
                if ((freq > this._freqBin[j]) && (freq <= this._freqBin[j + 1])) {
                    peakMaxArray.push(magnitude);
                }
            }
        }
        //console.log(peakMaxArray);
        return peakMaxArray;
    }
}

export default FFTAnalyser;