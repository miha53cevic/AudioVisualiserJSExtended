import React from 'react';
import { DropdownButton } from "react-bootstrap";
import { VolumeUpFill } from "react-bootstrap-icons";
import FormRange from "react-bootstrap/esm/FormRange";
import { audioElement } from "@util";

function AudioControl() {
    const [audioVolume, setAudioVolume] = React.useState<number>(1.0);

    React.useEffect(() => {
        audioElement.onvolumechange = function () {
            setAudioVolume(audioElement.volume);
        }
        // Load last user saved volume if it exists
        const volume = localStorage.getItem('volume');
        if (volume) {
            audioElement.volume = Number.parseInt(volume) / 100;
        }

        return () => {
            audioElement.onvolumechange = null;
            audioElement.onpause = null;
            audioElement.onplay = null;
        };
    }, []);

    async function handleVolumeChange(volume: string) {
        audioElement.volume = Number.parseInt(volume) / 100;
        console.log(`Set volume to ${volume}`);

        localStorage.setItem('volume', volume);
    }

    return (
        <DropdownButton id='volumeButton' drop='end' title={<VolumeUpFill size='32' />} menuVariant='dark'>
            <div className='pe-3 d-flex flex-column justify-content-center'>
                <FormRange id='volumeRange' min={0} max={100} step={1} value={audioVolume * 100} onChange={e => handleVolumeChange(e.target.value)} />
            </div>
        </DropdownButton>
    );
}

export default AudioControl;