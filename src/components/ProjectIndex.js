import styled from "styled-components";
import { useState } from "react";

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

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 8px;
`;

const ProjectTitle = styled.div`
  margin-right: 16px;
  width: 400px;
  text-align: left;
  cursor: pointer;
`;

const ProjectForm = styled.p`
  margin-right: 16px;
  width: 100px;
  text-align: right;
`;

const ProjectDate = styled.p`
  text-align: right;
  width: 100px;
`;

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
    `;

  return (
    <ProjectIndexContainer>
      <MenuIcon onClick={toggleMenu}>{expanded ? '[-] Collapse' : '[+] Projects'}</MenuIcon>
      <MenuContainer className={expanded ? 'expand' : ''}>
      <CategoryContainer>
        <CategoryTitle>Writing</CategoryTitle>
          <ProjectContainer>
            <ProjectTitle onClick={() => handleArticleSelect("Article 1")}>Article 1</ProjectTitle>
            <ProjectForm>Form</ProjectForm>
            <ProjectDate>Date</ProjectDate>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectTitle onClick={() => handleArticleSelect("Article 2")}>Article 2</ProjectTitle>
            <ProjectForm>Form</ProjectForm>
            <ProjectDate>Date</ProjectDate>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectTitle>Project</ProjectTitle>
            <ProjectForm>Form</ProjectForm>
            <ProjectDate>Date</ProjectDate>
          </ProjectContainer>
        </CategoryContainer>
        <CategoryContainer>
          <CategoryTitle>Design</CategoryTitle>
          <ProjectContainer>
            <ProjectTitle>Project</ProjectTitle>
            <ProjectForm>Form</ProjectForm>
            <ProjectDate>Date</ProjectDate>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectTitle>Project</ProjectTitle>
            <ProjectForm>Form</ProjectForm>
            <ProjectDate>Date</ProjectDate>
          </ProjectContainer>
          <ProjectContainer>
            <ProjectTitle>Project</ProjectTitle>
            <ProjectForm>Form</ProjectForm>
            <ProjectDate>Date</ProjectDate>
          </ProjectContainer>
        </CategoryContainer>
      </MenuContainer>
    </ProjectIndexContainer>
  );
}

export default ProjectIndex;
