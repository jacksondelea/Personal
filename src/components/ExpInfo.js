import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-top: 12px;
`

const ExpInfo = () => {
  return (
    <Container>
        EXPAND [+]
    </Container>
  )
}

export default ExpInfo