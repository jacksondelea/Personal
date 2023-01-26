import styled from "styled-components";

const ProjectIndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  return (
    <ProjectIndexContainer>
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
    </ProjectIndexContainer>
  );
}

export default ProjectIndex;
