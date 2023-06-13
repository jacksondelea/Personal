import React from 'react';
import styled from "styled-components";
import Logo from '../components/Logo';
import DateCard from '../components/DateCard';
import { useRef, useState } from 'react';
import ProjectIndex from '../components/ProjectIndex';
import ExpInfo from '../components/ExpInfo';
import DisplaySelector from '../components/DisplaySelector';

const MetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #d8d8d8;
  cursor: default;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: 100%;
`;

const Top = styled.div`
  height: 15vh;
  display: flex; 

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const TopLeft = styled.div`
  width: 315px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
`;
const TopCenter = styled.div`
  width: 420px;
  padding: 24px;
  padding-top: 48px;
  display: flex;
  align-items: left;
`
const TopRight = styled.div`
  width: 560px;
  padding: 24px;
  padding-top: 48px;
  display: flex;
  align-items: right;
`
const Bottom = styled.div`
  height: 85vh;
  width: 100vw;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
const Left = styled.div`
  flex: 1;
  padding: 24px;
  overflow-y: hidden;
`
const Center = styled.div`
  width: 600px;
  padding: 24px;
  min-height: 85vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`
const Right = styled.div`
  flex: 1;
  padding: 24px;
  min-height: 85vh;
  overflow-y: scroll;
`

const Homepage = () => {
  const centerColumnRef = useRef(null);
  const [selectedArticle, setSelectedArticle] = useState("Default");

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  }

  return (
    <MetaContainer>
      <Top>
        <TopLeft>
          <Logo />
        </TopLeft>
        <TopCenter />
        <TopRight />
      </Top>
      <Bottom>
        <Left>
          <ExpInfo />
        </Left>
        <Center ref={centerColumnRef}>
          <ProjectIndex handleArticleSelect={handleArticleSelect}/>
        </Center>
        <Right>
          <DisplaySelector selectedArticle={selectedArticle} />
        </Right>
      </Bottom>
    </MetaContainer>
  )
}

export default Homepage
