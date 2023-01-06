import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { recentProjects } from '../data';
import RecentProject from './RecentProject';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  overflow-x: scroll;

    /* Move the scrollbar down by 10px */
    &::-webkit-scrollbar {
    width: 5px;
    background-color: #f5f5f5;
  }
  
  /* Make the scrollbar edges square */
  &::-webkit-scrollbar-thumb {
    border-radius: 0px;
    background-color: #555;
  }

`;

const Carousel = () => {
    const scrollerRef = useRef(null);
    let requestId = null;  // Keep track of the request ID for cancelling the animation
  
    useEffect(() => {
      const scroll = () => {
        const { scrollWidth, clientWidth, scrollLeft } = scrollerRef.current;
        if (scrollWidth - scrollLeft <= clientWidth) {
          const startTime = performance.now();
          const duration = 500;  // Transition duration in milliseconds
          const ease = t => t * t;  // Easing function
  
          const transition = currentTime => {
            const elapsed = currentTime - startTime;
            const progress = ease(elapsed / duration);
            scrollerRef.current.scrollLeft = (1 - progress) * (scrollWidth - clientWidth);
            if (elapsed < duration) {
              requestId = requestAnimationFrame(transition);
            } else {
              requestId = requestAnimationFrame(scroll);  // Call scroll again after the transition is complete
            }
          };
          transition(startTime);
        } else {
          scrollerRef.current.scrollLeft += 1;  // Scroll to the right
          requestId = requestAnimationFrame(scroll);
        }
      };
  
      const handleMouseEnter = () => {
        cancelAnimationFrame(requestId);  // Cancel the animation when the mouse enters the element
      };
  
      const handleMouseLeave = () => {
        requestId = requestAnimationFrame(scroll);  // Resume the animation when the mouse leaves the element
      };
  
      scrollerRef.current.addEventListener('mouseenter', handleMouseEnter);
      scrollerRef.current.addEventListener('mouseleave', handleMouseLeave);
  
      requestId = requestAnimationFrame(scroll);
  
      return () => {
        scrollerRef.current.removeEventListener('mouseenter', handleMouseEnter);
        scrollerRef.current.removeEventListener('mouseleave', handleMouseLeave);
        cancelAnimationFrame(requestId);
      };
    }, []);
  
  
    return (
      <Container ref={scrollerRef} >
        {recentProjects.map((item) => (
                  <RecentProject item={item} key={item.title} />
              ))}
    </Container>
  );
};

export default Carousel;
