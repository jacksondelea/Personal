import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 500px;
    height: 200px;
    display: flex;
    border: 1px dotted yellowgreen;
`
const Image = styled.img`
    height: 200px;
    width: 100%;
`

const Left = styled.div`
  width: 50%;
`

const Right = styled.div`
  height: 160px;
  width: 50%;
  text-align: right;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h1`
  color: black;
`

const Details = styled.span`
  color: black;
`
const ReadMoreButton = styled.span`
  color: white;
  font-size: 12px;
`

const RecentProject = (props) => {

  const { item } = props;

  return (
    <Container>
        <Left>
          <Image src={item.pic}/>
        </Left>
        <Right>
          <Title>{item.title.toUpperCase()}</Title>
          <Details>{item.description}</Details>
          <ReadMoreButton>Read more -{'>'} </ReadMoreButton>
        </Right>
    </Container>
  )
}

export default RecentProject