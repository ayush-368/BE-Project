import React from "react";
import "../styles/publication.css";

const PaperPublication = () => {
  return (
    <section className="publicationWrapper">
      <div className="publication">
        <div className="publicationdiv">
          <img src="/images/bg2.png"></img>
        </div>
        <div className="publicationContent">
          <h1>Paper Publication</h1>
          <p>Published Research:Face Liveliness Detection using ML Approaches in IJSRCSEIT, Vol 10, issue 8 <br/> [Nov-Dec 2024]</p>
          <div className="thumbnail-container">
            <img src="/publication_thumbnail.jpeg" alt="Paper Thumbnail" className="thumbnail" />
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default PaperPublication;
