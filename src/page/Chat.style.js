import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import {Button, IconButton, Typography, Input} from "@mui/joy";
import viyaText from '../assets/image/viyaText.png';
export const ChatBox = styled(Box)(() => ({
    width:768,
    height:"100%",
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    justifyContent:"space-between",
    gap:16,
}));

export const Conversation = styled(Box)(() => ({
    height:"calc(100% - 63px)",
    overflowY:"auto",
}));
export const BoxStyle = styled(Box)(() => ({
    width:"100%",
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    padding:"16px 17px",
    marginBottom:16,
    borderRadius:26,
    gap:16,
}));
export const UserBox = styled(BoxStyle)(() => ({
    backgroundColor:"#DFDACB",
}));

export const AIBox = styled(BoxStyle)(() => ({
    backgroundColor:"#fff",
}));
export const ChatInfo = styled(Box)(() => ({
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
}));

export const AvatarStyle = styled(Box)(() => ({
    width:29,
    height:29,
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    border:"1px solid #E5E6DF",
    borderRadius:16,
    overflow:"hidden",
    "&.active":{
        border:"3px solid #56AB69",
    },
    "& > img":{
        width: "100%",
        height: "100%",
        textAlign: "center",
        objectFit: "cover",
    }
}));

export const RowBox = styled(Box)(() => ({
    display:"flex",
    alignItems:"center",
    gap:10,
}));
export const Name = styled(Typography)(() => ({
    fontSize:"0.875rem",
    fontWeight:500,
    color:"#020100",
}));

export const Date = styled(Typography)(() => ({
    fontSize:"0.875rem",
    fontWeight:600,
    color:"#737373",
}));

export const ChatContents = styled(Box)(() => ({
    textAlign:"left",
    fontSize:"1rem",
    fontWeight:500,
    color:"#020100",
    lineHeight:1.65,
}));

export const ChatInputForm = styled(Box)(() => ({
    width:655,
    display:"grid",
    gridTemplateColumns:"48px 1fr",
    alignItems:"center",
    gap:15,
    margin:"0 auto",
}));

export const LogoBox = styled(Box)(() => ({
    display:"block",
    width:48,
    height:48,
    backgroundImage: `url(${viyaText})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundColor:"#0766D1",
    borderRadius:"50%",
    boxShadow:"0 4px 8px rgb(86 97 246 / 25%)"
}));

export const InputStyle = styled(Input)(() => ({
    width:"100%",
    height:63,
    border:"1px solid #000",
    borderRadius:60,
    padding:"6px 16px 6px 20px",
    fontSize:"0.875rem",
    fontWeight:800,
}));
export const MicButton = styled(IconButton)(() => ({
    width:48,
    height:48,
    border:"1px solid #000",
    borderRadius:"50%",
}));

export const AiDataBox = styled(BoxStyle)(() => ({
    backgroundColor:"#000000",
    color:"#fff",
    "& .MuiTypography-variantSubtitle1":{
        color:"#fff",
        fontSize:"1rem",
    }
}));

export const MoreButton = styled(Button)(() => ({
    padding:0,
    fontSize:"0.75rem",
    color:"#CDCDCD",
    "&.MuiButton-root:hover":{
        backgroundColor:"transparent",
    },
}));

export const AiDataContents = styled(ChatContents)(() => ({
    color:"#fff",
    display: '-webkit-box',
    wordBreak: 'break-all',
    textOverflow: 'ellipsis',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: '2',
    overflow: 'hidden',
}));

export const RecordingBox = styled(Box)(() => ({
    backgroundColor:"#fff",
}));
