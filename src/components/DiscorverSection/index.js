import React, { useState } from "react";
import Search from "../Search/Search";
import Maps from "../Maps/Maps";
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import { DiscoContainer, InfoWrapper, InfoRow, Column1 ,Heading,TextWrapper, Column2, ImgWrap} from './DiscoverElements';

function DiscoverSection(){
  const [selectPosition, setSelectPosition] = useState(null);
  
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <DiscoContainer>
        <InfoWrapper>
        <InfoRow>
        <Column1>
        <TextWrapper>
          <Heading>Resultados</Heading>
          <div style={{ width: "30vw" }}>
            <Search selectPosition={selectPosition} setSelectPosition={setSelectPosition}/>
           </div>
        </TextWrapper>
        </Column1>
        <Column2>
          <ImgWrap>
          <div style={{ width: "50vw", height: "30vw"}}>
            <Maps selectPosition={selectPosition} />
          </div>
        </ImgWrap>
        </Column2>
      </InfoRow>
      </InfoWrapper>
      </DiscoContainer>
      <Footer />
    </>
    );
}

export default DiscoverSection;