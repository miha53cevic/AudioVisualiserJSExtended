abstract class Analyser {
    protected readonly _freqBin = [20, 60, 250, 500];
    protected readonly _audioElement;

    protected constructor() {
        this._audioElement = document.getElementById('audioElement') as HTMLAudioElement;
    }

    public abstract GetPeakMaxArray(): number[];
}

export default Analyser;