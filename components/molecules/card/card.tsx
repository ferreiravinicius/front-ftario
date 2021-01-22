import { useStyletron } from "baseui";
import { AspectRatioBox, AspectRatioBoxBody } from "baseui/aspect-ratio-box";
import { Block } from "baseui/block";
import * as React from "react";
import ImageBox from "../../atoms/image-box";
import { CardContainer, CardHeader } from "./css";

export interface CardProps {
  img: string;
  name: string;
  nameAlt?: string;
}

const Card: React.FC<CardProps> = ({ img, name, nameAlt }) => {
  const [css, theme] = useStyletron();

  const stCardTopImage = css({
    width: `100%`,
  });

  const stCardAbout = css({
    backgroundColor: theme.colors.backgroundPrimary,
    padding: theme.sizing.scale600,
    // zIndex: 2,
  });

  const stCardAboutName = css({
    fontSize: theme.typography.ParagraphLarge.fontSize,
  });

  const stCardAboutNameVar = css({
    fontSize: theme.typography.ParagraphSmall.fontSize,
  });

  const stMiniBadgeWrapper = css({
    display: `flex`,
    flexDirection: `column-reverse`,
    alignItems: `flex-end`,
    position: `absolute`,
    top: 0,
    right: 0,
  });

  const ContainedImage = css({
    height: `100%`,
    width: `100%`,
    objectFit: `contain`,
  });

  return (
    <CardContainer>
      <CardHeader>
        <ImageBox 
          src={img}
          width="424px"
        />
      </CardHeader>
      <Block className={stCardAbout}>
        <Block className={stCardAboutName}>
          <CardContainer />
          {name}
          {nameAlt && <Block className={stCardAboutNameVar}>{nameAlt}</Block>}
        </Block>
      </Block>
    </CardContainer>
  );
};

export default Card;
