import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { bioText } from '../data';
import HomeBio from './HomeBio';
import Status from './Status'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
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
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
      cursor: pointer;

      &:hover{
        color: #2ecc71;
        border: none;
        border-radius: 2px;
      }
    `;

    const Text = styled.div`
      overflow: hidden;
      margin: 0 auto; /* Gives that scrolling effect as the typing happens */
      letter-spacing: .15em;
      animation: 
        typing 0.5s steps(40, end),
        blink-caret .75s step-end infinite;
        @keyframes typing {
          from { width: 0 }
          to { width: 100% }
        }
        @keyframes blink-caret {
          from, to { border-color: transparent }
          50% { border-color: orange; }
        }
      `

  return (
    <Container>
        <MenuIcon onClick={toggleMenu}>{expanded ? '[-] Collapse' : '[+] Information'}</MenuIcon>
        <MenuContainer className={expanded ? 'expand' : ''}>
          <Text>
            <HomeBio></HomeBio>
            <Status></Status>
          </Text>
        </MenuContainer>
    </Container>
  )
}


export default ExpInfo