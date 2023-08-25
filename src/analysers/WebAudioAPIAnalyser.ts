import Analyser from "./Analyser.ts";

class WebAudioAPIAnalyser extends Analyser {
    private readonly _audioContext: AudioContext;
    private readonly _source: MediaElementAudioSourceNode;
    private readonly _analyser: AnalyserNode;

    constructor(fftSize: number = 2**14) {
        super();
        this._audioContext = new AudioContext();

        this._source = this._audioContext.createMediaElementSource(this._audioElement);
        this._analyser = this._audioContext.createAnalyser();

        this._source.connect(this._analyser);
        this._source.connect(this._audioContext.destination);

        this._analyser.fftSize = fftSize;
    }

    public GetPeakMaxArray() {
        const output = new Uint8Array(this._analyser.frequencyBinCount);
        this._analyser.getByteFrequencyData(output);

        const peakMaxArray: number[] = [];
        for (let i = 0; i < output.length; i++) {
            // bin frequency = binNumber * sampleRate / N
            const freq = i * this._audioContext.sampleRate / this._analyser.fftSize;

            // Extract the peaks from defined frequency ranges
            for (let j = 0; j < this._freqBin.length - 1; j++) {
                if ((freq > this._freqBin[j]) && (freq <= this._freqBin[j + 1])) {
                    peakMaxArray.push(output[i]);
                }
            }
        }
        return peakMaxArray;
    }
}

export default WebAudioAPIAnalyser;