import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { recentProjects } from '../data';
import RecentProject from './RecentProject';
import Marquee from 'react-fast-marquee';

const MetaContainer = styled.div`
  display: flex;
  max-height: 200px;
`

const MoreContainer = styled.div`
  min-width: 300px;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 30px;
  
`

const MoreButton = styled.h1`
  color: yellowgreen;

  &:hover{
    color: white;
    cursor: pointer;
  }
`

const Carousel = () => {
    const scrollerRef = useRef(null);
  
    return (
      <MetaContainer>
        <MoreContainer>
          <MoreButton>
            RECENT PROJECTS
          </MoreButton>
        </MoreContainer>
        <Marquee pauseOnHover={true} gradientWidth={0} speed={65} ref={scrollerRef}>
            {recentProjects.map((item) => (
                      <RecentProject item={item} key={item.title} />
                  ))}
        </Marquee>
      </MetaContainer>
  );
};

export default Carousel;
