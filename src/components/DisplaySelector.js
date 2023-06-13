import react from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import DesignPage from './pageTypes/DesignPage'

const Article = (props) => {
    const { selectedArticle } = props;
  
    return(
      <div>
        {selectedArticle === "Default" && <div></div>}
        {selectedArticle === "NTS" && <div>NTS</div>}
        {selectedArticle === "Dall-E" && <div>Dall-E</div>}
        {selectedArticle === "Clone" && <div><DesignPage></DesignPage></div>}
      </div>
    )
  }

export default Article;