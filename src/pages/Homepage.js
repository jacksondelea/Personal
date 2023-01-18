import React from 'react';
import styled from "styled-components";
import Status from '../components/Status';
import Navbar from '../components/Navbar';
import RecentProject from '../components/RecentProject';
import Carousel from '../components/Carousel';
import ProjectCarousel from '../components/ProjectCarousel';
import { recentProjects } from '../data';
import HomeInfo from '../components/HomeInfo';

const Container = styled.div`
    background-color: rgba(3, 3, 3, 0.8);
`

const Homepage = () => {
  return (
    <Container>
        <Navbar/> 
        <Status/>
        <Carousel/> 
        <HomeInfo/>
    </Container>
  )
}

export default Homepage