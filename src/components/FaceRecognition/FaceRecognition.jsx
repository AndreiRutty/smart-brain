import React from "react";
import "./faceRecognition.css";

const FaceRecognition = ({ imageUrl, box }) => {
  const boxStyle = {
    top: box.topRow,
    right: box.rightCol,
    bottom: box.bottomRow,
    left: box.leftCol,
  };

  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img
          id="inputImage"
          src={imageUrl}
          alt=""
          width="400px"
          height="auto"
          style={{marginTop: '20px'}}
        />
        <div
          className="bounding-box"
          style={boxStyle}
        ></div>
      </div>
    </div>
  );
};

export default FaceRecognition;
