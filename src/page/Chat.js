import React, { useState } from 'react';
import {
    ChatBox,
    Conversation,
    UserBox,
    AIBox,
    ChatInputForm,
    ChatInfo,
    RowBox,
    Name,
    Date,
    ChatContents,
    AvatarStyle,
    LogoBox,
    InputStyle,
    MicButton,
    AiDataBox,
    MoreButton,
    AiDataContents,
} from './Chat.style';
import { ReactComponent as ClockIcon } from '../assets/image/ClockIcon.svg';
import { ReactComponent as MicrophoneIcon } from '../assets/image/MicrophoneIcon.svg';
import { ReactComponent as ChevronDownIcon } from '../assets/image/ChevronDownIcon.svg';
import AvatarImg from '../assets/image/AvatarImg.png';
import aiImg from '../assets/image/aiImg.png';
import ChatRecording from "./ChatRecording";

function Chat({ handleToggleData }) {
    const [isRecorder, setIsRecorder] = useState(false);
    const handleToggleRecorder = () => {
        setIsRecorder(true);
    };
    const handleCloseRecorder = () => {
        setIsRecorder(false);
    };
    return (
        <ChatBox>
            <Conversation>
                <UserBox>
                    <ChatInfo>
                        <RowBox>
                            <AvatarStyle>
                                <img src={AvatarImg} alt="avatar" />
                            </AvatarStyle>
                            <Name variant="subtitle1">김고객</Name>
                        </RowBox>
                        <RowBox>
                            <ClockIcon/>
                            <Date>오늘 오후 12:22</Date>
                        </RowBox>
                    </ChatInfo>
                    <ChatContents>
                        고금리 자유 예금 상품을 찾고 있습니다.
                    </ChatContents>
                </UserBox>
                <AIBox>
                    <ChatInfo>
                        <RowBox>
                            <AvatarStyle>
                                <img src={aiImg} alt="avatar" />
                            </AvatarStyle>
                            <Name variant="subtitle1">AI 답변</Name>
                        </RowBox>
                        <RowBox>
                            <ClockIcon/>
                            <Date>오늘 오후 12:22</Date>
                        </RowBox>
                    </ChatInfo>
                    <ChatContents>
                        제1금융권 고금리 자유 예금 상품, 어디서 찾을까요?
                        정확한 정보를 얻기 위해서는 아래와 같은 방법으로 확인해보시는 것을 추천합니다.
                        <br/>
                    </ChatContents>
                </AIBox>
                <AiDataBox>
                    <ChatInfo>
                        <RowBox>
                            <Name variant="subtitle1">참고자료</Name>
                        </RowBox>
                        <RowBox>
                            <MoreButton variant="plain" onClick={handleToggleData}>더보기 <ChevronDownIcon/></MoreButton>
                        </RowBox>
                    </ChatInfo>
                    <AiDataContents>
                        Office ipsum you must be muted. Digital request red-flag ensure algorithm say discussion.
                        Ensure company container practices half sorry. Sorry per new loss member don't drive customer create.
                    </AiDataContents>
                </AiDataBox>
            </Conversation>
            {!isRecorder ? (
                <ChatInputForm>
                    <LogoBox/>
                    <InputStyle placeholder="고객에게 메시지 보내기" variant="outlined"
                                endDecorator={<MicButton onClick={handleToggleRecorder}><MicrophoneIcon/></MicButton>}/>
                </ChatInputForm>
            ) : (
                <ChatRecording handleCloseRecorder={handleCloseRecorder} />
            )}
        </ChatBox>
    );
}

export default Chat;
