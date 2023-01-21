import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    align-items: center;
    justify-content: center;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
`

const LogoText = styled.span`
    font-weight: 1000;
    font-size: 36px;
    letter-spacing: -4px;
    

    &:hover{
    color: yellowgreen;
    cursor: pointer;
  }
`

const Navbar = () => {  

  return (
    <Container>
            <Left>
                <LogoText>
                    Jackson Delea
                </LogoText> 
            </Left>
    </Container>
  )
}

export default Navbar