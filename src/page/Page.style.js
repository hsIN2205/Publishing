import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import {IconButton, Typography, Input} from "@mui/joy";
import viyaText from '../assets/image/viyaText.png';
export const Root = styled(Box)(() => ({
    width:"100%",
    height:"100vh",
    display:"grid",
    gridTemplateColumns:"348px 1fr",
    padding:"18px 15px",
    backgroundColor:"#EFEEE5",
    overflow:"hidden",
    boxSizing:"border-box",
    '& *': {
        fontFamily: 'Pretendard!important',
        boxSizing:'border-box',
    },
    "& .MuiIconButton-root:hover":{
        backgroundColor:"transparent",
    },
    '@media all and (max-width: 480px)': {

    },
}));


export const Container = styled(Box)(() => ({
    position:"relative",
    width:"100%",
    height:"100%",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    gap:26,
    overflow:"auto",
}));

export const DownloadBtn = styled(IconButton)(() => ({
    position:"absolute",
    right:0,
    top:9,
    display:"inline-flex",
    justifyContent:"flex-end",
    "&:hover":{
        backgroundColor:"transparent",
    }
}));

export const Contents = styled(Box)(() => ({
    width:"100%",
    height:"100%",
    display:"flex",
    alignItems:"flex-start",
    justifyContent:"center",
    padding:"70px 36px 70px 36px",
    gap:26,
}));