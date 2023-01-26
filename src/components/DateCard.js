import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  z-index: 2;
  padding-bottom: 24px;
  bottom: 0;
  position: fixed;
  background-color: #d8d8d8;
`

const DateCard = () => {
  return (
    <Container>January 2023</Container>
  )
}

export default DateCard