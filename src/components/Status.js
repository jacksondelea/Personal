import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-bottom: 0.5px dashed black;
    border-top: 0.5px dashed black;
    display: flex;
    justify-content: space-between;
    padding: 12px;
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
    font-size: 16px;

    &:hover{
    color: yellowgreen;
    cursor: pointer;  
  }
`

const HomeCarousel = () => {
  return (
    <Container>
        <Left>
            <TextDiv>currently:</TextDiv>       
            <TextDiv>Brown University</TextDiv>         
        </Left>
        <Right>
            <TextDiv>.</TextDiv>       
            <TextDiv>May, 2023</TextDiv>
        </Right>
    </Container>
  )
}

export default HomeCarousel