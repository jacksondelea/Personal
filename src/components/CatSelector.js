import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-bottom: .5px dashed black;
    flex-direction: column;
`

const Bottom = styled.div`
  width: 100%;
  display: flex;
`

const Top = styled.div`
  padding: 20px;
  background-color: yellowgreen;
`

const Left = styled.div`
  width: 50%;
  padding: 20px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
`

const Right = styled.div`
  width: 50%;
  padding: 10px;
  padding-right: 60px;
  display: flex;
  flex-direction: column;
`

const SemiBolded = styled.span`
  color: black;
  font-size: 24px;
  font-weight: 600;
  padding-bottom: 5px;
`

const Bubble = styled.div`
  border-left: 1px solid black;
  border-right: 1px solid black;
  height: 24px;
  max-width: 150px;
  margin: 5px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 14px;
  padding: 5px;

  &:hover{
        cursor: pointer;
        background-color: yellowgreen;
  }
`

const HomeInfo = () => {
  return (
    <Container>
      <Bottom>
        <Left>
          <Bubble>
            Writing
          </Bubble>
          <Bubble>
            Design
          </Bubble>
          <Bubble>
            Development
            </Bubble>
          <Bubble>
            Music
          </Bubble>
        </Left>
        <Right>
          
        </Right>
      </Bottom>
    </Container>
  )
}

export default HomeInfo