import React from 'react';
import styled from "styled-components";
import Logo from '../components/Logo';
import DateCard from '../components/DateCard';
import { useRef, useState } from 'react';
import ProjectIndex from '../components/ProjectIndex';
import ExpInfo from '../components/ExpInfo';
import DisplaySelector from '../components/DisplaySelector';

const TBContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #d8d8d8;
  cursor: default;
  overflow: hidden;
`
const MetaContainer = styled.div`
  height: 85vh;
  width: 100vw;
  display: flex;
`
const YellowStrip = styled.div`
  background-color: yellowgreen;
  height: 100vh;
  width: 15px;

  position: fixed;
  overflow: hidden;
`
const Top = styled.div`
  height: 15vh;
  display: flex; 
`
const TopLeft = styled.div`
  width: 315px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  //border: 1px black dashed;
`
const Left = styled.div`
  width: 315px;
  min-height: 85vh;
  padding: 24px;
  //border: 1px black dashed;
  text-transform: uppercase;

  overflow-y: hidden;
`
const TopCenter = styled.div`
  width: 420px;
  padding: 24px;
  padding-top: 48px;
  display: flex;
  align-items: left;
  //border: 1px black dashed;
  text-transform: uppercase;
`
const Center = styled.div`
  width: 420px;
  padding: 24px;
  min-height: 85vh;
  //border: 1px black dashed;

  overflow-y: auto;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`
const TopRight = styled.div`
  width: 560px;
  padding: 24px;
  padding-top: 48px;
  display: flex;
  align-items: right;
  text-transform: uppercase;
  //border: 1px black dashed;
`
const Right = styled.div`
  width: 560px;
  padding: 24px;
  min-height: 85vh;
  //border: 1px black dashed;

  overflow-y: scroll;
`

const Homepage = () => {
  const centerColumnRef = useRef(null);
  const [selectedArticle, setSelectedArticle] = useState("Default");

  const handleArticleSelect = (article) => {
    setSelectedArticle(article);
  }

  return (
      <TBContainer>
        <Top>
          <TopLeft>
            <Logo></Logo>
          </TopLeft>
          <TopCenter>
            jacksondelea@icloud.com
          </TopCenter>
          <TopRight>
            
          </TopRight>
        </Top>
        <MetaContainer>
          <Left>
            <ExpInfo></ExpInfo>
            <DateCard></DateCard>
          </Left>
          <Center ref={centerColumnRef} >
            <ProjectIndex handleArticleSelect={handleArticleSelect}/>
          </Center>
          <Right>
            <DisplaySelector selectedArticle={selectedArticle} />
          </Right>
        </MetaContainer>
      </TBContainer>
    )
}

export default Homepage