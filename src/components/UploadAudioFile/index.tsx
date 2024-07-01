import { Form } from "react-bootstrap";
import { audioElement } from "@util";

function UploadAudioFile() {

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

    return (
        <Form.Control id='uploadAudio' type='file' accept='audio/*' onChange={handleAudioUpload} />
    );
}

export default UploadAudioFile;