import {
    RecordingBox,
    Wave,
    Satate,
    Language,
    ActiveBox,
    CancelButton,
    ConfirmButton
} from './ChatRecording.style';
import Lottie from "lottie-react";
import AudioWave from "../assets/lottie/AudioWave.json";
import { ReactComponent as PauseIcon } from '../assets/image/PauseIcon.svg';
import { ReactComponent as GlobalIcon } from '../assets/image/GlobalIcon.svg';
import {IconButton} from "@mui/joy";

function ChatRecording({handleCloseRecorder}) {
    return (
        <RecordingBox>
            <IconButton><PauseIcon/></IconButton>
            <Wave>
                <Lottie animationData={AudioWave} />
            </Wave>
            <Satate>
                녹음 중 • 00:20
            </Satate>
            <Language><GlobalIcon/>한국어</Language>
            <ActiveBox>
                <CancelButton variant="plain" onClick={handleCloseRecorder}>취소</CancelButton> |
                <ConfirmButton variant="plain" onClick={handleCloseRecorder}>종료</ConfirmButton>
            </ActiveBox>
        </RecordingBox>
    );
}

export default ChatRecording;
