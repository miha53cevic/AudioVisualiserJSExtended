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