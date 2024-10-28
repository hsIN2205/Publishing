import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import {IconButton} from "@mui/joy";
export const ReferencesBox = styled(Box)(() => ({
    width:654,
    height:"100%",
    padding:"24px 30px",
    backgroundColor:"#fff",
    borderRadius:32,
    boxShadow:"0 0 0 1px #D6D5CD, 0 0 20px 20px rgba(0 0 0 / 0.08)",
    '& *': {
        fontFamily: 'Pretendard!important',
        boxSizing:'border-box',
    },
    "& .MuiIconButton-root:hover":{
        backgroundColor:"transparent",
    },
}));

export const ReferencesHeader = styled(Box)(() => ({
    position:"relative",
    marginBottom:30,
    "& .MuiTypography-root":{
      textAlign:"left"
    },
    "& .MuiTypography-h3":{
        fontSize:"1.375rem",
        fontWeight:700,
        color:"#111",
        marginBottom:10,
    },
    "& .MuiTypography-h4":{
        fontSize:"1.125rem",
        fontWeight:600,
        color:"#737373",
    },
}));
export const CloseButton = styled(IconButton)(() => ({
    position:"absolute",
    right:0,
    top:0,
    width:24,
    height:24,
}));

export const ReferencesContents = styled(Box)(() => ({
    height:"calc(100% - 110px)",
    textAlign:"left",
    overflowY:"auto",
}));