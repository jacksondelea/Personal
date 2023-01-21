import styled from "styled-components";

const ProjectIndexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 100vh;
  margin-top: 240px;
`;

const CategoryContainer = styled.div`
  width: 100%;
  text-align: left;
`;

const CategoryTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const ProjectTitle = styled.div`
  font-size: 16px;
  margin-right: 16px;
`;

const ProjectForm = styled.p`
  font-size: 16px;
  margin-right: 16px;
`;

const ProjectDate = styled.p`
  font-size: 16px;
`;

const ProjectIndex = (props) => {
    const { handleArticleSelect } = props;

  return (
    <ProjectIndexContainer>
      <CategoryContainer>
        <CategoryTitle>Writing</CategoryTitle>
        <hr/>
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
        <hr/>
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
