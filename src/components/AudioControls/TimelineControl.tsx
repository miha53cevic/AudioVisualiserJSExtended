import React from "react";
import { Stack } from "react-bootstrap";
import FormRange from "react-bootstrap/esm/FormRange";
import { audioElement, minuteSecondFormat } from "@util";

function TimelineControl() {
    const [audioTotalTime, setAudioTotalTime] = React.useState(0);
    const [audioCurrentTime, setAudioCurrentTime] = React.useState(0);

    React.useEffect(() => {
        audioElement.ondurationchange = function () {
            setAudioTotalTime(audioElement.duration);
        }
        audioElement.ontimeupdate = function () {
            setAudioCurrentTime(audioElement.currentTime);
        }
        return () => {
            audioElement.ondurationchange = null;
            audioElement.ontimeupdate = null;
        }
    }, []);

    async function handleTimelineUserChange(e: React.ChangeEvent<HTMLInputElement>) {
        audioElement.currentTime = Number.parseInt(e.target.value);
        // Play the song if it ended
        if (audioElement.paused) await audioElement.play();
    }

    return (
        <Stack id='timeline' direction='horizontal' gap={2} className='px-3 py-2'>
            <i className='text-white'>{minuteSecondFormat(audioCurrentTime)}</i>
            <FormRange id='timelineRange' min={0} max={Math.floor(audioTotalTime)} step={1} value={Math.floor(audioCurrentTime)} onChange={handleTimelineUserChange} />
            <i className='text-white'>{minuteSecondFormat(audioTotalTime)}</i>
        </Stack>
    );
}

export default TimelineControl;