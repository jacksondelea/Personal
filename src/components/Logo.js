import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-bottom: .5px dashed black;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
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
    font-size: 36px;
    letter-spacing: -4px;

    &:hover{
    color: yellowgreen;
    cursor: pointer;
  }
`

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 10px;
    
`

const OptionText = styled.span`
    margin-left: 5px;
    margin-right: 15px;
    font-size: 14px;
    &:hover{
        color: yellowgreen;
        cursor: pointer;
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
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar