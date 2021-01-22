import { AspectRatioBox, AspectRatioBoxBody } from "baseui/aspect-ratio-box";
import * as React from "react";
import { StyleObject } from "styletron-react";

export interface ImageBoxProps {
  src?: string;
  width?: string;
}

const ImageBox: React.FC<ImageBoxProps> = ({ src, width = `scale4800` }) => {
  const containedImg: StyleObject = {
    height: `100%`,
    width: `100%`,
    objectFit: `contain`,
  };

  return (
    <AspectRatioBox width={width}>
      <AspectRatioBoxBody $style={containedImg} as="img" src={src} />
    </AspectRatioBox>
  );
};

export default ImageBox;
