import { styled } from '@mui/material/styles';
import {Box} from '@mui/material';
import {Button, IconButton} from "@mui/joy";
export const Root = styled(Box)(() => ({
    width:348,
    height:"calc(100vh - 36px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor:"#fff",
    borderRadius:26,
    border:"1px solid rgb(1 1 1 / 12%)",
    boxSizing:"border-box",
    "& h2":{
        color:"#6A6969",
        fontSize:'0.875rem'
    },
    "& .MuiIconButton-root:hover":{
        backgroundColor:"transparent",
    },
    '& *': {
        fontFamily: 'Pretendard!important',
        boxSizing:'border-box',
    },
    '@media all and (max-width: 480px)': {

    },
}));

export const RowBox = styled(Box)(() => ({
    display:"flex",
    alignItems:"center",
    padding:"64px 30px 0 30px",
    gap:14,
}));

export const ButtonStyle = styled(Button)(() => ({
    width:"100%",
    minHeight:44,
    borderRadius:20,
    backgroundColor:"#56AB69",
    "&:hover":{
        backgroundColor:"#398048",
    }
}));

export const SideBarHeader = styled(Box)(() => ({
    display:"flex",
    alignItems:"center",
    justifyContent: "space-between",
    padding:"20px 30px",
    border:"0 solid #EFEFEF",
    borderWidth:"1px 0",
    "& > Button":{
        minHeight:"auto",
        color:"#5661F6",
        padding:0,
        "&:hover":{
            backgroundColor:"transparent",
        }
    }
}));

export const SideBarContents = styled(Box)(() => ({
    height:"calc(100vh - 36px - 108px - 63px - 188px)",
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    padding:"10px 30px",
    gap:10,
    overflowY:'auto',
}));

export const ListItem = styled(Button)(() => ({
    width:"100%",
    display:"flex",
    alignItems:"center",
    justifyContent: "flex-start",
    gap:10,
    padding:"8px 10px",
    fontSize:"1rem",
    fontWeight:700,
    color:"#000",
    backgroundColor:"transparent",
    borderRadius:12,
    "&:hover":{
        backgroundColor:"#E6E3D8",
    }
}));

export const SideBarFooter = styled(Box)(() => ({
    display:"flex",
    flexDirection:"column",
    alignItems:"flex-start",
    gap:10,
    "& > h2":{
        textAlign:"left",
        width:"100%",
        borderBottom:"1px solid #EFEFEF",
        paddingBottom:20,
        padding:"10px 30px",
    },
}));

export const FooterContents = styled(Box)(() => ({
    display:"flex",
    alignItems:"flex-start",
    padding:"10px 30px",
    gap:20,
}));
export const CharacterBox = styled(Button)(() => ({
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    padding:0,
    gap:4,
    "& > .MuiTypography-variantSubtitle1":{
        fontWeight:700,
        color:"#000000"
    },
    "&:hover":{
        backgroundColor:"transparent",
    }
}));

export const AvatarStyle = styled(Box)(() => ({
    width:40,
    height:40,
    display:"flex",
    alignItems:"center",
    justifyContent: "center",
    border:"1px solid #E5E6DF",
    borderRadius:16,
    overflow:"hidden",
    boxSizing:"border-box",
    "& > img":{
        width: "100%",
        height: "100%",
        textAlign: "center",
        objectFit: "cover",
    }
}));

export const SideBarCloseBtn = styled(IconButton)(() => ({
    display:"inline-flex",
    justifyContent:"flex-end",
    marginLeft:"auto",
    padding:"0 20px 20px 0",
    "&:hover":{
        backgroundColor:"transparent",
    }
}));


