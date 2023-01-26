import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    align-items: center;
    flex: 1;
    display: flex;
    justify-content: flex-start;
`

const LogoText = styled.span`
    font-family: 'Michroma', Arial, sans-serif;
    font-weight: 1000;
    font-size: 36px;
    letter-spacing: -5px;
    

    &:hover{
    color: yellowgreen;
    cursor: pointer;
  }
`


const Navbar = () => {  

  return (
    <Container>
        <LogoText>
            Jackson  Delea
        </LogoText>
    </Container>
  )
}

export default Navbar