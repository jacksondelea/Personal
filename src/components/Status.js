import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border: 1px dashed black;
    display: flex;
    justify-content: space-between;
`
const Left = styled.div`
    width: 75%;
    text-align: left;
    padding: 30px;
`

const Right = styled.div`
    width: 25%;
    text-align: right;
    padding: 30px;
`
const TextDiv = styled.div`
    padding: 5px;
`

const SemiBolded = styled.span`
    color: black;
    font-size: 18px;
    font-weight: 600;
`

const Project = styled.span`
    color: black;
    font-size: 30px;
    font-weight: 600;

    &:hover{
    color: yellowgreen;
    cursor: pointer;  
  }
`

const HomeCarousel = () => {
  return (
    <Container>
        <Left>
            <TextDiv>
                <SemiBolded>currently:</SemiBolded>
            </TextDiv>
            <TextDiv>
                <Project>Brown University, BA</Project>
            </TextDiv>
        </Left>
        <Right>
            <TextDiv>
                <SemiBolded>etc:</SemiBolded>
            </TextDiv>
            <TextDiv>
                <SemiBolded>May, 2023</SemiBolded>
            </TextDiv>
        </Right>
    </Container>
  )
}

export default HomeCarousel