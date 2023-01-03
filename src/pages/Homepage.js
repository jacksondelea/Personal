import React from 'react';
import styled from "styled-components";
import Status from '../components/Status';
import Navbar from '../components/Navbar';
import RecentProject from '../components/RecentProject';

const Container = styled.div`
    background-color: rgba(3, 3, 3, 0.8);
`

const Homepage = () => {
  return (
    <Container>
        <Navbar/> 
        <Status/>
    </Container>
  )
}

export default Homepage