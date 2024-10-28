import '../App.css';
import {
    ReferencesBox,
    CloseButton,
    ReferencesHeader,
    ReferencesContents,
} from './References.style';
import { ReactComponent as CloseIcon } from '../assets/image/CloseIcon.svg';
import {Typography} from "@mui/joy";

function References({ handleCloseData }) {
    return (
        <ReferencesBox>
            <ReferencesHeader>
                <Typography level="h3">참고 자료</Typography>
                <Typography level="h4">AI 답변에 대한 참고 자료입니다.</Typography>
                <CloseButton onClick={handleCloseData}><CloseIcon/></CloseButton>
            </ReferencesHeader>
            <ReferencesContents>
                Office ipsum you must be muted. Digital request red-flag ensure algorithm say discussion. Ensure company container practices half sorry. Sorry per new loss member don't drive customer create. Gmail build air ipsum bells window.
                Job high-level people effects low-hanging competitors creep well. Centric another timepoint important pants sexy. Deploy savvy corporate our know. Accountable jumping angel discussions speed. Next working downloaded reinvent alarming knowledge. Those baked win-win-win discussion blue shoulder synergy goalposts could procrastinating. Talk intersection that blue lift looking. Skulls team devil stronger model cta down out opportunity economy. And too shark underlying hit pushback managing metal tiger.
                Knowledge six accountable globalize while what's driving. Individual able down previous your. Ideal happenings goalposts users unlock downloaded parking kpis. Pin interim if can design people competitors support deliverables. Globalize synergize key model panel follow. Synergy create mindfulness chime paradigm diarize room didn't disband. Idea pushback calculator including supervisor hit support bells.
                Closest flesh jumping savvy window. Back policy customer viral three. Customer old fastworks ui procrastinating incentivization when the. Win synergize ensure viral encourage. Asserts fured time cloud marketing tentative launch. Third hill practices initiative work hard points lot reinvent. Last move point run didn't crack market growth impact.
                Crank conversation seat scraps space. Crank we pain finance ping involved group adoption kimono eye. Fit read plane cost hammer. Pretend for in optimize field. Hours take key giant to
                Knowledge six accountable globalize while what's driving. Individual able down previous your. Ideal happenings goalposts users unlock downloaded parking kpis. Pin interim if can design people competitors support deliverables. Globalize synergize key model panel follow. Synergy create mindfulness chime paradigm diarize room didn't disband. Idea pushback calculator including supervisor hit support bells.
                Closest flesh jumping savvy window. Back policy customer viral three. Customer old fastworks ui procrastinating incentivization when the. Win synergize ensure viral encourage. Asserts fured time cloud marketing tentative launch. Third hill practices initiative work hard points lot reinvent. Last move point run didn't crack market growth impact.
                Crank conversation seat scraps space. Crank we pain finance ping involved group adoption kimono eye. Fit read plane cost hammer. Pretend for in optimize field. Hours take key giant to Knowledge six accountable globalize while what's driving. Individual able down previous your. Ideal happenings goalposts users unlock downloaded parking kpis. Pin interim if can design people competitors support deliverables. Globalize synergize key model panel follow. Synergy create mindfulness chime paradigm diarize room didn't disband. Idea pushback calculator including supervisor
            </ReferencesContents>
        </ReferencesBox>
    );
}

export default References;
