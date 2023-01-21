import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    max-height: 84px;
    max-width: 360px;
    display: flex;
    background-color: rgba(43,43,43,1);
    flex: 0 0 auto;
`
const Image = styled.img`
    max-height: 84px;
    max-width: 84px;
`

const Left = styled.div`
  width: 50%;
`

const Right = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Title = styled.h1`
  color: white;
  font-size: 12px;
`

const Details = styled.body`
  color: white;
`
const ReadMoreButton = styled.span`
  color: yellowgreen;
  font-size: 10px;

  &:hover{
    cursor: pointer;
    color: white;
  }

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