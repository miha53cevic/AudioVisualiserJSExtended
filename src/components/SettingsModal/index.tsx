import React from "react";
import { Modal, Row, Col, Form, FloatingLabel } from "react-bootstrap";

import { Visualiser2DSettings, Visualiser2DDefaultSettings, VisualiserGLSettings, VisualiserGLDefaultSettings } from "@util";
import { CanvasTypes } from "@hooks/useCanvas";

export interface SettingsModalProps {
    open: boolean,
    close: () => void,
    enabledCanvas: CanvasTypes,
    setEnabledCanvas: (type: CanvasTypes) => void,
}

function SettingsModal({ open, close, enabledCanvas, setEnabledCanvas }: SettingsModalProps) {
    const [v2dSettings, setV2dSettings] = React.useState<Visualiser2DSettings>(Visualiser2DDefaultSettings);
    const [vglSettings, setVglSettings] = React.useState<VisualiserGLSettings>(VisualiserGLDefaultSettings);

    return (
        <Modal id='settingsModal' show={open} onHide={close} fullscreen={true}>
            <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col xs={12} md={6}>
                        <h4>Visualiser Settings</h4>
                        <hr />
                        <h5>2D Visualiser</h5>
                        <Form.Check
                            type={'radio'}
                            label={'Enabled'}
                            checked={enabledCanvas === '2d'}
                            onChange={e => e.target.checked ? setEnabledCanvas('2d') : setEnabledCanvas('webgl2')}
                        />
                        <br />
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
                        <hr />
                        <FloatingLabel label={'FFT Size'}>
                            <Form.Control disabled type={'number'} placeholder={'FFT Size'} defaultValue={16384} />
                        </FloatingLabel>
                        <br />
                        <FloatingLabel label={'Type'}>
                            <Form.Select placeholder={'Type'}>
                                <option value={"FFT"}>FFT Analyser</option>
                                <option disabled value={"WebAudioAPI"}>WebAudioAPI Analyser</option>
                            </Form.Select>
                        </FloatingLabel>
                        <br />
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default SettingsModal;