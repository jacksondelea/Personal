import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 120px;
    align-items: center;
    justify-content: center;
    padding: 12px;
`

const Paragraph = styled.div`
    font-size: 18px;
    padding-bottom: 12px;
`

const HomeBio = () => {
  return (
    <Container>
        <Paragraph>
            Writer, designer, developer and musician based in Providence, Rhode Island.
        </Paragraph>
        <Paragraph>
            He's interested in digitial technology, political economy, and ambience.
        </Paragraph>
    </Container>
  )
}

export default HomeBio