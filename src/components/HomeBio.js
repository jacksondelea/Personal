import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-bottom: 0.5px dashed black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Paragraph = styled.div`
    padding-bottom: 12px;
`
const Link = styled.li`
`

const HomeBio = () => {
  return (
    <Container>
        <Paragraph>
            Writer, designer, developer and musician based in Providence, Rhode Island.
        </Paragraph>
    </Container>
  )
}

export default HomeBio