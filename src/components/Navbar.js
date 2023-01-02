import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px dashed black;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const LogoText = styled.span`
    font-weight: 1000;
    font-size: 72px;
    letter-spacing: -5px;

    &:hover{
    color: yellowgreen;
    transform: scale(1.1);
  }
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 30px;
    
`

const OptionText = styled.span`
    &:hover{
        color: yellowgreen;
        transform: scale(1.1);
  }
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <LogoText>
                    Jackson Delea
                </LogoText>
            </Left>
            <Right >
                <OptionText>Info</OptionText>
                <OptionText>Info</OptionText>
                <OptionText>Info</OptionText>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar