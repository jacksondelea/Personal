import React from 'react'
import { Carousel } from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import styled from 'styled-components'
import { recentProjects } from '../data';
import RecentProject from './RecentProject';

const Container = styled.div`
    height: 200px; 
    display: flex;
    flex-wrap: wrap; 
`

const ProjectCarousel = () => {
    return (
      <Container>
        {recentProjects.map((item) => (
            <RecentProject item={item} key={item.title} />
        ))}
      </Container>
    );
  };

export default ProjectCarousel