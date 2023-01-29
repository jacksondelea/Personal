import react from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

const Article = (props) => {
    const { selectedArticle } = props;
  
    return(
      <div>
        {selectedArticle === "Default" && <div>[...]STANDBY</div>}
        {selectedArticle === "NTS" && <div>NTS</div>}
        {selectedArticle === "Dall-E" && <div>Dall-E</div>}
        {selectedArticle === "Clone" && <div>Clone Site</div>}
      </div>
    )
  }

export default Article;