import React, { useState } from 'react';
import '../App.css';
import {
  Root,
  Container,
  DownloadBtn,
  Contents,
} from './Page.style';
import SideBar from "./SideBar"
import Chat from "./Chat";
import References from "./References"
import { ReactComponent as DownloadIcon } from '../assets/image/DownloadIcon.svg';

function Page() {

  const [isData, setIsData] = useState(false);

  const handleToggleData = () => {
    setIsData(prevState => !prevState);
  };

  const handleCloseData = () => {
    setIsData(false);
  };

  return (
    <Root>
      <SideBar/>
        <Container>
          <DownloadBtn><DownloadIcon/></DownloadBtn>
          <Contents>
            <Chat handleToggleData={handleToggleData}/>
            {isData && ( <References handleCloseData={handleCloseData}  /> )}
          </Contents>
        </Container>
    </Root>
  );
}

export default Page;
