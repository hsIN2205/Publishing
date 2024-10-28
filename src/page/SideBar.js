import '../App.css';
import React, { useState } from 'react';
import {
    Root,
    ButtonStyle,
    RowBox,
    SideBarHeader,
    SideBarContents,
    ListItem,
    SideBarFooter,
    FooterContents,
    CharacterBox,
    AvatarStyle,
    SideBarCloseBtn
} from './SideBar.style';
import { ReactComponent as MikeOnIcon } from '../assets/image/MikeOnIcon.svg';
import { ReactComponent as SearchIcon } from '../assets/image/SearchIcon.svg';
import { ReactComponent as MessageIcon } from '../assets/image/MessageIcon.svg';
import { ReactComponent as ArrowLineLeft } from '../assets/image/ArrowLineLeft.svg';
import AvatarImg from '../assets/image/AvatarImg.png';
import {Box} from '@mui/material';
import {Typography,IconButton,Button} from "@mui/joy";

const messages = [
    "대화 첫줄이 여기에 표시됩니다.",
    "두 번째 대화 내용",
    "세 번째 대화 내용",

];
function SideBar() {
    const [selectedAvatar, setSelectedAvatar] = useState(1);

    const handleSelectAvatar = (itemId) => {
        setSelectedAvatar(itemId);
    };

    const character = [
    {id: 1, avatar: AvatarImg, name:"김고객" },
    {id: 2, avatar:AvatarImg, name:"이고객" },
    {id: 3, avatar:AvatarImg, name:"박고객" },
];

  return (
    <Root>
        <Box>
            <RowBox>
                <ButtonStyle startDecorator={<MikeOnIcon />}> 새 상담</ButtonStyle>
                <IconButton><SearchIcon/></IconButton>
            </RowBox>
            <SideBarHeader>
                <Typography level="h2">상담 내역</Typography>
                <Button variant="plain">전부 삭제</Button>
            </SideBarHeader>
            <SideBarContents>
                {messages.map((message, index) => (
                    <ListItem key={index}>
                        <MessageIcon /> {message}
                    </ListItem>
                ))}
            </SideBarContents>
        </Box>
        <SideBarFooter>
            <Typography level="h2">캐릭터</Typography>
            <FooterContents>
                {character.map((item) => (
                    <CharacterBox
                        key={item.id}
                        onClick={() => handleSelectAvatar(item.id)}
                        variant="plain"
                        style={{
                            cursor: 'pointer', // 클릭 가능한 느낌을 주기 위한 스타일
                        }}
                    >
                        <AvatarStyle
                            style={{
                                border: selectedAvatar === item.id ? '3px solid #56AB69' : '1px solid #E5E6DF',
                            }}
                        >
                            <img src={item.avatar} alt="avatar" />
                        </AvatarStyle>
                        <Typography variant="subtitle1">{item.name}</Typography>
                    </CharacterBox>
                ))}
            </FooterContents>
            <SideBarCloseBtn><ArrowLineLeft/></SideBarCloseBtn>
        </SideBarFooter>
    </Root>
  );
}

export default SideBar;
