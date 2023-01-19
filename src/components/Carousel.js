import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { recentProjects } from '../data';
import RecentProject from './RecentProject';
import Marquee from 'react-fast-marquee';

const MetaContainer = styled.div`
  display: flex;
  max-height: 200px;
  border-bottom: .5px dashed black;
  width: 100%;
`

const MoreContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 10px;
  
`

const MoreButton = styled.span`
  color: black;

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
        <Marquee pauseOnHover={true} gradientWidth={0} speed={55} ref={scrollerRef}>
            {recentProjects.map((item) => (
                      <RecentProject item={item} key={item.title} />
                  ))}
        </Marquee>
      </MetaContainer>
  );
};

export default Carousel;
