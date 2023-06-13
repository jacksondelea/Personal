import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    border-bottom: 0.5px dashed black;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
`

const Paragraph = styled.div`
    padding-bottom: 12px;
    text-align: left;
`

const HomeBio = () => {
  return (
    <Container>
      <Paragraph>
        Designer, artist and researcher.
      </Paragraph>
      <Paragraph>
        I hold a BA in English from Brown University. I'm interested in interfaces, artificial intelligence, 
        and computational culture.
        I have experience in the music industry, 
        education, and graphic design. 
      </Paragraph>
      <Paragraph>
        I currently work with Forensic Architecture as an engineer,
        artist and researcher for an upcoming exhibition on 
        surveillance technology.
      </Paragraph>
    </Container>
  )
}

export default HomeBio