import React from "react";
import "../styles/publication.css";

const PaperPublication = () => {
  return (
    <section className="publication">
      <h2>Paper Publication</h2>
      <p>Published Research:Face Liveliness Detection using ML Approaches in IJSRCSEIT, Vol 10, issue 8 [Nov-Dec 2024]</p>
      <div className="thumbnail-container">
        <img src="/publication_thumbnail.jpeg" alt="Paper Thumbnail" className="thumbnail" />
      </div>
    </section>
  );
};

export default PaperPublication;
