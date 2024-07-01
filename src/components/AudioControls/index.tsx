import { Navbar, Button } from "react-bootstrap";
import { GearFill } from "react-bootstrap-icons";

import AudioControl from "./AudioControl";
import PlayControl from "./PlayControl";
import TimelineControl from "./TimelineControl";

export interface AudioControlsProps {
    openSettings: () => void,
}

function AudioControls({ openSettings }: AudioControlsProps) {

    return (
        <div id='controlArea' className='fixed-bottom bg-dark'>
            <TimelineControl />
            <Navbar id='controls' bg='dark' className='p-3'>
                <AudioControl />
                <div className='mx-auto'>
                    <PlayControl />
                </div>
                <Button id='settingsButton' onClick={openSettings}>
                    <GearFill size='32' />
                </Button>
            </Navbar>
        </div>
    );
}

export default AudioControls;