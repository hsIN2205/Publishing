import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import {Button} from "@mui/joy";
export const RecordingBox = styled(Box)(() => ({
    height:59,
    display:"flex",
    alignItems:"center",
    backgroundColor:"#fff",
    borderRadius:50,
    padding:"6px 27px 6px 35px",
    margin:"0 auto",
    gap:23,
    '& *': {
        fontFamily: 'Pretendard!important',
        boxSizing:'border-box',
    },
}));
export const Wave = styled(Box)(() => ({
    width:48,
}));

export const Satate = styled(Box)(() => ({
    fontSize:"0.938rem",
    color:"#020100",
}));

export const Language = styled(Box)(() => ({
    display:"flex",
    alignItems:"center",
    fontSize:"0.938rem",
    color:"#020100",
    backgroundColor:"#f5f5f5",
    padding:"10px 12px",
    borderRadius:"40%",
    gap:4,
}));

export const ActiveBox = styled(Box)(() => ({
    display:"flex",
    alignItems:"center",
    color:"#020100",
    fontWeight:100,
    gap:4,
}));

export const ButtonStyle = styled(Button)(() => ({
    padding:0,
    fontSize:"0.938rem",
    "&:hover":{
        backgroundColor:"transparent",
    },
}));

export const CancelButton = styled(ButtonStyle)(() => ({
    color:"#020100",
    fontWeight:400,
}));
export const ConfirmButton = styled(ButtonStyle)(() => ({
    color:"#3190FF"
}));