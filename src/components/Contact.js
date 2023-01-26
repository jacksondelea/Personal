import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 12px;
`

const Contact = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleMenu = () => {
        setExpanded(!expanded);
      }

    const MenuContainer = styled.div`
        display: ${expanded ? 'block' : 'none'};
    `;

    /*const MenuIcon = styled.button`
        color: #fff;
        background-color: #2ecc71;
        padding: 8px 16px;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        text-align: center;
        ${expanded ? '"Expand -"' : '"Expand+"'};
    `;*/

    const MenuIcon = styled.div`
        color: #fff;
        background-color: #2ecc71;
        padding: 4px 8px;
        border: none;
        border-radius: 8px;
        align-items: left;
        justify-content: center;
        margin-bottom: 12px;
    `;

  return (
    <Container>
        <MenuIcon onClick={toggleMenu}>{expanded ? '-' : '+'}</MenuIcon>
        <MenuContainer>
            Jackson Delea is a graduate of Brown University. 
        </MenuContainer>
        
    </Container>
  )
}


export default Contact