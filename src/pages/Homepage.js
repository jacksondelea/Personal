import React from 'react';
import styled from "styled-components";
import Status from '../components/Status';
import Navbar from '../components/Navbar';
import RecentProject from '../components/RecentProject';
import Carousel from '../components/Carousel';
import ProjectCarousel from '../components/ProjectCarousel';
import { recentProjects } from '../data';
import HomeInfo from '../components/CatSelector';
import Logo from '../components/Logo';
import HomeBio from '../components/HomeBio';


const MetaContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`

const Left = styled.div`
    background-color: #4b4b4b;
    width: 722px;
    overflow: hidden;
    padding: 30px;
`

const Right = styled.div`
  background-color: #4b4b4b;
  width: 703px;
  overflow: scroll;
  padding: 30px;
`

const YellowStrip = styled.div`
  background-color: yellowgreen;
  height: 100vh;
  width: 15px;
`

const Homepage = () => {
  return (
    <MetaContainer>
      <YellowStrip/>
      <Left>
          <Logo/> 
      </Left>
      <Right>
        <HomeBio></HomeBio>
        <Status></Status>
      </Right>
    </MetaContainer>
    )
}

export default Homepage