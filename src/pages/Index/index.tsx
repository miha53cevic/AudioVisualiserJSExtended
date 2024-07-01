import React from 'react';

import Canvas2D from "@components/Canvas2D";
import CanvasGL from "@components/CanvasGL";
import SettingsModal from '@components/SettingsModal';
import UploadAudioFile from '@components/UploadAudioFile';
import AudioControls from '@components/AudioControls';
import { CanvasTypes } from "@hooks/useCanvas";

function IndexPage() {

    const [canvasSize, setCanvasSize] = React.useState({
        width: window.innerWidth,
        height: 0,
    });
    React.useEffect(() => {
        window.onload = function () {
            window.dispatchEvent(new Event('resize'));
        }
        window.onresize = function () {
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

    const [showSettings, setShowSettings] = React.useState<boolean>(false);
    async function openSettings() {
        setShowSettings(true);
    }
    async function closeSettings() {
        setShowSettings(false);
    }

    const [enabledCanvas, setEnabledCanvas] = React.useState<CanvasTypes>('2d');

    //////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <main>
            <SettingsModal open={showSettings} close={closeSettings} enabledCanvas={enabledCanvas} setEnabledCanvas={setEnabledCanvas} />
            <UploadAudioFile />
            {enabledCanvas === '2d' ?
                <Canvas2D width={canvasSize.width} height={canvasSize.height} />
                :
                <CanvasGL width={canvasSize.width} height={canvasSize.height} />
            }
            <AudioControls openSettings={openSettings} />
        </main>
    );
}

export default IndexPage;