import React from 'react';
import Canvas2D from "@components/Canvas2D";
import CanvasGL from "@components/CanvasGL";
import { Form, Navbar, Button, Stack, DropdownButton } from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import { PlayFill, VolumeUpFill, GearFill, PauseFill } from "react-bootstrap-icons";
import { audioElement, minuteSecondFormat } from "@util";

type AudioState = 'playing' | 'paused';

function IndexPage() {

    async function handleAudioUpload(e: React.ChangeEvent<HTMLInputElement>) {
        const fileList = e.target.files;
        if (!fileList) return;
        const files: File[] = [];
        for (let i = 0; i < fileList.length; i++) {
            files.push(fileList[i]);
        }
        console.log(files);
        // Load first file
        audioElement.src = URL.createObjectURL(files[0]);

        await audioElement.play();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [audioTotalTime, setAudioTotalTime] = React.useState(0);
    const [audioCurrentTime, setAudioCurrentTime] = React.useState(0);

    React.useEffect(() => {
        audioElement.ondurationchange = function() {
            setAudioTotalTime(audioElement.duration);
        }
       audioElement.ontimeupdate = function() {
           setAudioCurrentTime(audioElement.currentTime);
       }
       return () => {
           audioElement.ondurationchange = null;
           audioElement.ontimeupdate = null;
       }
    }, []);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [canvasSize, setCanvasSize] = React.useState({
        width: window.innerWidth,
        height: 0,
    });

    React.useEffect(() => {
        window.onload = function() {
            window.dispatchEvent(new Event('resize'));
        }
        window.onresize = function() {
            setCanvasSize({
               width: window.innerWidth,
               height: window.innerHeight - document.getElementById('controlArea')!.clientHeight - document.getElementById('uploadAudio')!.clientHeight,
            });
        }
        return () => {
            window.onload = null;
            window.onresize = null;
        }
    }, []);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [audioState, setAudioState] = React.useState<AudioState>('playing');

    function handleAudioStateChange() {
        (audioState === 'playing') ? audioElement.pause() : audioElement.play();

        setAudioState(oldState => oldState === 'playing' ? 'paused' : 'playing');
    }

    async function handleVolumeChange(volume: string) {
        audioElement.volume = Number.parseInt(volume) / 100;
        console.log(`Set volume to ${volume}`);
    }

    async function handleTimelineUserChange(e:  React.ChangeEvent<HTMLInputElement>) {
        audioElement.currentTime = Number.parseInt(e.target.value);

        // Play the song if it ended
        if (audioElement.paused) await audioElement.play();
    }

    return (
        <main>
            <Form.Control id='uploadAudio' type='file' accept='audio/*' data-bs-theme={'dark'} onChange={handleAudioUpload} />

            <CanvasGL width={canvasSize.width} height={canvasSize.height} />

            <div id='controlArea' className='fixed-bottom bg-dark'>
                <Stack id='timeline' direction='horizontal' gap={2} className='px-3 py-2'>
                    <i className='text-white'>{minuteSecondFormat(audioCurrentTime)}</i>
                    <FormRange id='timelineRange' min={0} max={Math.floor(audioTotalTime)} step={1} value={Math.floor(audioCurrentTime)} onChange={handleTimelineUserChange} />
                    <i className='text-white'>{minuteSecondFormat(audioTotalTime)}</i>
                </Stack>
                <Navbar id='controls' bg='dark' className='p-3'>
                    <DropdownButton id='volumeButton' drop='end' title={<VolumeUpFill size='32' />} menuVariant='dark'>
                        <div className='pe-3 d-flex flex-column justify-content-center'>
                            <FormRange id='volumeRange' min={0} max={100} step={1} defaultValue={100} onChange={e => handleVolumeChange(e.target.value)} />
                        </div>
                    </DropdownButton>
                    <div className='mx-auto'>
                        <Button id='playPauseButton' onClick={handleAudioStateChange}>
                            {audioState === 'playing' ?
                                <PauseFill size='32' />
                                :
                                <PlayFill size='32' />
                            }
                        </Button>
                    </div>
                    <Button id='settingsButton'>
                        <GearFill size='32' />
                    </Button>
                </Navbar>
            </div>
        </main>
    );
}

export default IndexPage;