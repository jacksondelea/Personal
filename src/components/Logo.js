import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
`

const LogoText = styled.span`
    font-family: 'Michroma', Arial, sans-serif;
    font-weight: 1000;
    font-size: 36px;
    letter-spacing: -5px;
    min-width: 100%;

    &:hover{
    color: #2ecc71;
    cursor: pointer;
  }
`


const Navbar = () => {  

  return (
    <Container>
        <LogoText>
            Jackson    Delea
        </LogoText>
    </Container>
  )
}

export default Navbar