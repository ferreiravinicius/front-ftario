import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import * as React from "react";
import Link from "next/link";

export interface CardProps {
  img: string;
  name: string;
  nameAlt?: string;
}

const Card: React.FC<CardProps> = ({ img, name, nameAlt }) => {
  const [css, theme] = useStyletron();

  const stCard = css({
    flex: `0 0 20%`,
    backgroundColor: theme.colors.backgroundPrimary,
    display: `flex`,
    flexDirection: `column`,
    overflow: `hidden`,
    borderRadius: theme.borders.radius200,
    color: theme.colors.contentPrimary,
    borderColor: theme.borders.border100.borderColor,
    borderWidth: theme.borders.border100.borderWidth,
    borderStyle: theme.borders.border100.borderStyle,
    transition: `opacity .5s`,
    cursor: `pointer`,
    ":hover": {
      opacity: `.6`,
      transition: `opacity .5s`,
    },
  });

  const stCardTop = css({
    maxHeight: `215px`,
    overflowY: `hidden`,
    // overflowX: `visible`,
    position: `relative`,
    backgroundColor: theme.colors.backgroundSecondary,
    borderRadius: theme.borders.radius200,
    padding: theme.sizing.scale600,
  });

  const stCardTopImage = css({
    width: `100%`,
  });

  const stCardAbout = css({
    backgroundColor: theme.colors.backgroundPrimary,
    padding: theme.sizing.scale600,
    zIndex: 99,
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

  return (
    <Link href="/detail">
      <Block className={stCard}>
        <Block className={stCardTop}>
          <img className={stCardTopImage} src={img} />
        </Block>
        <Block className={stCardAbout}>
          <Block className={stCardAboutName}>
            {name}
            {nameAlt && <Block className={stCardAboutNameVar}>{nameAlt}</Block>}
          </Block>
        </Block>
      </Block>
    </Link>
  );
};

export default Card;
