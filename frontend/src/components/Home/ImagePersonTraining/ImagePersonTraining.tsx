import React from "react";
import * as S from "./ImagePersonTrainingStyles";

interface ImagePersonTraining {
    image: string, 
    description: string,
}

const ImagePersonTraining: React.FC<ImagePersonTraining> = ({image, description}) => {
  return (
    <S.ImagePersonTrainingStyle src={image} alt={description} />
  );
};

export default ImagePersonTraining;