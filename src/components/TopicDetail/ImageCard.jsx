import React from "react";

const ImageCard = ({ imgSrc, altText, description }) => {
  return (
    <div className="row text-center">
      
        <img src={imgSrc} className="img" alt={altText} />
      
      <div className="text-center">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
