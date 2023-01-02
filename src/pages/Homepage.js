import React from 'react';
import styled from "styled-components";
import HomeCarousel from '../components/HomeCarousel';
import Navbar from '../components/Navbar';

const Container = styled.div`
    background-color: rgba(3, 3, 3, 0.8);
`

const Homepage = () => {
  return (
    <Container>
        <Navbar/> 
        <HomeCarousel/>
    </Container>
  )
}

export default Homepage