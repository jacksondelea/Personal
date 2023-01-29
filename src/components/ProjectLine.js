import React from 'react'
import styled from 'styled-components'

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
  border: 1px dashed black;
`;

const ProjectForm = styled.p`
  margin-right: 16px;
  width: 100px;
  text-align: right;
  //border: 1px dashed black;
`;

const ProjectDate = styled.p`
  text-align: right;
  width: 100px;
  //border: 1px dashed black;
`;

const ProjectLine = (props) => {
  const { item, } = props;

    return (
        <ProjectContainer>
            <ProjectTitle>{item.title}</ProjectTitle>
            <ProjectDate>{item.date}</ProjectDate>
        </ProjectContainer>
    )
}

export default ProjectLine