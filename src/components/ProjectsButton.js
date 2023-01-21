import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

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

const HomeInfo = ({handleScrollButton}) => {
  return (
    <Container>
          <Bubble onClick={handleScrollButton}>
            Projects
          </Bubble>
    </Container>
  )
}

export default HomeInfo