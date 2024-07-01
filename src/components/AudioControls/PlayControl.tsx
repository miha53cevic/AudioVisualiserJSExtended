import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { PauseFill, PlayFill } from "react-bootstrap-icons";
import { audioElement } from "@util";

export type AudioState = 'playing' | 'paused';

function PlayControl() {
    const [audioState, setAudioState] = React.useState<AudioState>('playing');

    useEffect(() => {
        audioElement.onpause = function () {
            setAudioState('paused');
        }
        audioElement.onplay = function () {
            setAudioState('playing');
        }
    }, []);
    
    function handleAudioStateChange() {
        (audioState === 'playing') ? audioElement.pause() : audioElement.play();
    }

    return (
        <Button id='playPauseButton' onClick={handleAudioStateChange}>
            {audioState === 'playing' ?
                <PauseFill size='32' />
                :
                <PlayFill size='32' />
            }
        </Button>
    );
}

export default PlayControl;