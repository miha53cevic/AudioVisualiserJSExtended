import React from 'react';
import Canvas2D from "@components/Canvas2D";
import CanvasGL from "@components/CanvasGL";
import {
    Form,
    Navbar,
    Button,
    Stack,
    DropdownButton,
    Modal,
    Row,
    Col,
    FloatingLabel,
} from "react-bootstrap";
import FormRange from "react-bootstrap/FormRange";
import { PlayFill, VolumeUpFill, GearFill, PauseFill } from "react-bootstrap-icons";
import {
    audioElement,
    minuteSecondFormat,
    Visualiser2DSettings,
    Visualiser2DDefaultSettings,
    VisualiserGLSettings, VisualiserGLDefaultSettings
} from "@util";
import { CanvasTypes } from "@hooks/useCanvas";

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

    const [audioVolume, setAudioVolume] = React.useState<number>(1.0);

    React.useEffect(() => {
        audioElement.onvolumechange = function() {
            setAudioVolume(audioElement.volume);
        }
        // Load last user saved volume if it exists
        const volume = localStorage.getItem('volume');
        if (volume) {
            audioElement.volume = Number.parseInt(volume) / 100;
        }
        return () => {
            audioElement.onvolumechange = null;
        };
    }, []);

    const [audioState, setAudioState] = React.useState<AudioState>('playing');

    function handleAudioStateChange() {
        (audioState === 'playing') ? audioElement.pause() : audioElement.play();

        setAudioState(oldState => oldState === 'playing' ? 'paused' : 'playing');
    }

    async function handleVolumeChange(volume: string) {
        audioElement.volume = Number.parseInt(volume) / 100;
        console.log(`Set volume to ${volume}`);

        localStorage.setItem('volume', volume);
    }

    async function handleTimelineUserChange(e:  React.ChangeEvent<HTMLInputElement>) {
        audioElement.currentTime = Number.parseInt(e.target.value);

        // Play the song if it ended
        if (audioElement.paused) await audioElement.play();
    }

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    const [showSettings, setShowSettings] = React.useState<boolean>(false);

    async function handleSettingsClose() {
        setShowSettings(false);
    }

    async function handleSettingsOpen() {
        setShowSettings(true);
    }

    const [enabledCanvas, setEnabledCanvas] = React.useState<CanvasTypes>('2d');
    const [v2dSettings, setV2dSettings] = React.useState<Visualiser2DSettings>(Visualiser2DDefaultSettings);
    const [vglSettings, setVglSettings] = React.useState<VisualiserGLSettings>(VisualiserGLDefaultSettings);

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <main>
            <Modal id='settingsModal' show={showSettings} onHide={handleSettingsClose} fullscreen={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col xs={12} md={6}>
                            <h4>Visualiser Settings</h4>
                            <hr/>
                            <h5>2D Visualiser</h5>
                            <Form.Check
                                type={'radio'}
                                label={'Enabled'}
                                checked={enabledCanvas === '2d'}
                                onChange={e => e.target.checked ? setEnabledCanvas('2d') : setEnabledCanvas('webgl2')}
                            />
                            <br/>
                            <h5>OpenGL Visualiser</h5>
                            <Form.Check
                                type={'radio'}
                                label={'Enabled'}
                                checked={enabledCanvas === 'webgl2'}
                                onChange={e => e.target.checked ? setEnabledCanvas('webgl2') : setEnabledCanvas('2d')}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <h4>Analyser Settings</h4>
                            <hr/>
                            <FloatingLabel label={'FFT Size'}>
                                <Form.Control disabled type={'number'} placeholder={'FFT Size'} defaultValue={16384} />
                            </FloatingLabel>
                            <br/>
                            <FloatingLabel label={'Type'}>
                                <Form.Select placeholder={'Type'}>
                                    <option value={"FFT"}>FFT Analyser</option>
                                    <option disabled value={"WebAudioAPI"}>WebAudioAPI Analyser</option>
                                </Form.Select>
                            </FloatingLabel>
                            <br/>
                        </Col>
                    </Row>
                </Modal.Body>
            </Modal>

            <Form.Control id='uploadAudio' type='file' accept='audio/*' onChange={handleAudioUpload} />

            {enabledCanvas === '2d' ?
                <Canvas2D width={canvasSize.width} height={canvasSize.height} />
                :
                <CanvasGL width={canvasSize.width} height={canvasSize.height} />
            }

            <div id='controlArea' className='fixed-bottom bg-dark'>
                <Stack id='timeline' direction='horizontal' gap={2} className='px-3 py-2'>
                    <i className='text-white'>{minuteSecondFormat(audioCurrentTime)}</i>
                    <FormRange id='timelineRange' min={0} max={Math.floor(audioTotalTime)} step={1} value={Math.floor(audioCurrentTime)} onChange={handleTimelineUserChange} />
                    <i className='text-white'>{minuteSecondFormat(audioTotalTime)}</i>
                </Stack>
                <Navbar id='controls' bg='dark' className='p-3'>
                    <DropdownButton id='volumeButton' drop='end' title={<VolumeUpFill size='32' />} menuVariant='dark'>
                        <div className='pe-3 d-flex flex-column justify-content-center'>
                            <FormRange id='volumeRange' min={0} max={100} step={1} value={audioVolume * 100} onChange={e => handleVolumeChange(e.target.value)} />
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
                    <Button id='settingsButton' onClick={handleSettingsOpen}>
                        <GearFill size='32' />
                    </Button>
                </Navbar>
            </div>
        </main>
    );
}

export default IndexPage;