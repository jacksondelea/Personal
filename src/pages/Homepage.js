import React from 'react';
import styled from "styled-components";
import Status from '../components/Status';
import Logo from '../components/Logo';
import HomeBio from '../components/HomeBio';
import Previously from '../components/Previously'
import ProjectsButton from '../components/ProjectsButton'
import DateCard from '../components/DateCard';
import { useRef, useState } from 'react';
import Carousel from '../components/Carousel';
import Article from '../components/Article'
import ProjectIndex from '../components/ProjectIndex';
import ExpInfo from '../components/ExpInfo';
import Contact from '../components/Contact';


const TBContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  background-color: #d8d8d8;
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
  border: 1px black dashed;
`
const TopCenter = styled.div`
  width: 480px;
  padding: 24px;
  padding-top: 48px;
  border: 1px black dashed;
  text-transform: uppercase;

`
const TopRight = styled.div`
  width: 480px;
  padding: 24px;
  border: 1px black dashed;
`

const Left = styled.div`
  width: 315px;
  min-height: 85vh;
  padding: 24px;
  border: 1px black dashed;
  text-transform: uppercase;

  overflow-y: hidden;
`

const Right = styled.div`
  width: 480px;
  padding: 24px;
  min-height: 85vh;
  border: 1px black dashed;

  overflow-y: auto;
`

const Center = styled.div`
  width: 480px;
  padding: 24px;
  min-height: 85vh;
  border: 1px black dashed;

  overflow-y: auto;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
`


const Homepage = () => {
  const centerColumnRef = useRef(null);
  const [selectedArticle, setSelectedArticle] = useState("");

  const handleScrollButton = () => {
    centerColumnRef.current.scrollBy({top: window.innerHeight, behavior: 'smooth'});
  };

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
            <HomeBio></HomeBio>
            <Status></Status>
            <Previously></Previously>
            <Contact></Contact>
            <DateCard></DateCard>
          </Left>
          <Center ref={centerColumnRef} >
            <ProjectIndex handleArticleSelect={handleArticleSelect} />
          </Center>
          <Right>
            <Article selectedArticle={selectedArticle} />
          </Right>
        </MetaContainer>
      </TBContainer>
    )
}

export default Homepage