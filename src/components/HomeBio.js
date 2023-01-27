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
          Jackson Delea is a creative technologist, writer and musician. 
        </Paragraph>
        <Paragraph>
          Informed by science fiction, metadata, hyperstition, and raving, his work collapses gaps between speculative futures and present(s). 
        </Paragraph>
        <Paragraph>
          He is currently based between Providence, Rhode Island (United States) and the Interzone. 
        </Paragraph>
    </Container>
  )
}

export default HomeBio