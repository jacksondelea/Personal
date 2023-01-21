import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-bottom: 0.5px dashed black;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    width: 75%;
    text-align: left;
`

const Right = styled.div`
    width: 25%;
    text-align: right;
`
const TextDiv = styled.div`
    color: black;
    font-size: 12px;

    &:hover{
    color: yellowgreen;
    cursor: pointer;  
  }
`

const HomeCarousel = () => {
  return (
    <Container>
        <Left>
            <TextDiv>previously:</TextDiv>       
            <TextDiv>Elsewhere, NYC</TextDiv>         
        </Left>
        <Right>
            <TextDiv>.</TextDiv>       
            <TextDiv>2022</TextDiv>
        </Right>
    </Container>
  )
}

export default HomeCarousel