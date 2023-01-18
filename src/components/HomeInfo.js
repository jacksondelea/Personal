import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 1438px;
    border: 1px dashed black;
    flex-direction: column;
`

const Bottom = styled.div`
  width: 100%;
  display: flex;
`

const Top = styled.div`
  padding: 30px;
  background-color: yellowgreen;
`

const Left = styled.div`
  width: 50%;
  padding: 30px;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
`

const Right = styled.div`
  width: 50%;
  padding: 30px;
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

const Line = styled.span`
  color: black;
  font-size: 18px;
  font-weight: 400;
  padding-bottom: 5px;
`

const HomeInfo = () => {
  return (
    <Container>
      <Bottom>
        <Left>
          <Line>
            I am a:
          </Line>
          <Line>
            -Writer
          </Line>
          <Line>
            -Designer
          </Line>
          <Line>
            -Developer
          </Line>
          <Line>
            -Musician
          </Line>
          <Line>
            based in Providence, Rhode Island.  
          </Line>
        </Left>
        <Right>
          <SemiBolded>
            Skills
          </SemiBolded>
        </Right>
      </Bottom>
    </Container>
  )
}

export default HomeInfo