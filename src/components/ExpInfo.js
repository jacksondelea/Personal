import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { bioText } from '../data';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 12px;
`

const ExpInfo = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
        setExpanded(!expanded);
      }

    const MenuContainer = styled.div`
      display: ${expanded ? 'block' : 'none'};
      max-height:0;
      &.expand{
        max-height:1000px;
      }
    `

    const MenuIcon = styled.div`
      color: #fff;
      background-color: #2ecc71;
      padding: 4px 8px;
      border: none;
      border-radius: 8px;
      align-items: left;
      justify-content: center;
      margin-bottom: 12px;
      cursor: pointer;
    `;

    const Text = styled.div`
      animation: typeOut 0.5s ease-in-out forwards;
      @keyframes typeOut {
        from {
            width: 0%;
        }
        to {
            width: 100%;
        }
    }
    `

  return (
    <Container>
        <MenuIcon onClick={toggleMenu}>{expanded ? '-' : '+'}</MenuIcon>
        <MenuContainer className={expanded ? 'expand' : ''}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </MenuContainer>
    </Container>
  )
}


export default ExpInfo