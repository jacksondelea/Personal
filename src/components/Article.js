const Article = (props) => {
    const { selectedArticle } = props;
  
    return(
      <div>
        {selectedArticle === "Article 1" && <div>This is the content of Article 1</div>}
        {selectedArticle === "Article 2" && <div>This is the content of Article 2</div>}
      </div>
    )
  }

export default Article;