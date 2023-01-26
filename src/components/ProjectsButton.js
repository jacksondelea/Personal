import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    min-height: 85vh;
    max-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    border: 1px black dashed;
`

const Bubble = styled.div`
  border-left: 1px solid black;
  border-right: 1px solid black;
  max-width: 150px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 12px;

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