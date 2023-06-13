import styled from "styled-components";
import { useState } from "react";
import { designProjects, writingProjects, musicProjects } from '../data'

const ProjectIndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  min-height: 85vh;
`;

const CategoryContainer = styled.div`
  width: 100%;
  text-align: left;
`;

const CategoryTitle = styled.h2`
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProjectLine = (props) => {

  const { item, handleArticleSelect } = props;

  const ProjectLineContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    padding-top: 8px;
    border-radius: 8px;
    
    &:hover{
    background-color: black;
    color: #2ecc71;
    };
  `

  const ProjectTitle = styled.div`
    margin-right: 16px;
    text-align: left;
    cursor: pointer;
    padding-left: 8px;
  `

  const ProjectDate = styled.p`
    text-align: right;
    padding-right: 8px;
  `

    return (
      <ProjectLineContainer onClick={() => {handleArticleSelect(item.id)}}>
            <ProjectTitle>{item.title}</ProjectTitle>
            <ProjectDate>{item.date}</ProjectDate>
        </ProjectLineContainer>
    )
}

const ProjectIndex = (props) => {
  const { handleArticleSelect } = props;

  const [expanded, setExpanded] = useState(false);

  const toggleMenu = () => {
      setExpanded(!expanded);
  }

  const MenuContainer = styled.div`
    display: ${expanded ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;

    max-height:0;
    &.expand{
      max-height:1000px;
    }
  `

  const MenuIcon = styled.div`
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
    cursor: pointer;

    &:hover{
      color: #2ecc71;
      border: none;
      border-radius: 2px;
    }
  `

  return (
    <ProjectIndexContainer>
      <MenuIcon onClick={toggleMenu}>{expanded ? '[-] Collapse' : '[+] Projects'}</MenuIcon>
      <MenuContainer className={expanded ? 'expand' : ''}>
        <CategoryContainer>
            <CategoryTitle>Design</CategoryTitle>
              {designProjects.map((item) => (
                <ProjectLine item={item} key={item.title} handleArticleSelect={handleArticleSelect} />
              ))}
          </CategoryContainer>
        <CategoryContainer>
        <CategoryTitle>Writing</CategoryTitle>
          {writingProjects.map((item) => (
              <ProjectLine item={item} key={item.title} handleArticleSelect={handleArticleSelect}/>
            ))}
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Music</CategoryTitle>
            {musicProjects.map((item) => (
              <ProjectLine item={item} key={item.title} handleArticleSelect={handleArticleSelect} />
            ))}
        </CategoryContainer>
      </MenuContainer>
    </ProjectIndexContainer>
  )
}

export default ProjectIndex;
