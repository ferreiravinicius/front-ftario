
// boxShadow: `0 2px 5px 0 rgba(0,0,0,0.12),0 2px 10px 0 rgba(0,0,0,0.12)`,
import { useStyletron } from "baseui";
import { Block, BlockProps } from "baseui/block";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import {
  HeadingXSmall,
  Paragraph2
} from "baseui/typography";
import * as React from "react";

export interface FinderProps {}

const Finder: React.FC<FinderProps> = () => {
  const [css, theme] = useStyletron();

  const finderWrapper = css({
    fontFamily: `Montserrat`,
    display: "flex",
    flexDirection: "column", //TODO: media query change to row @ mobile
  });

  const sideWrapper = css({
    backgroundColor: COLORS.gray,
    padding: ".5rem 2rem",
  });

  const gridWrapper = css({
    backgroundColor: COLORS.gray,
    padding: "0rem 2rem",
  });

  const mockInfo = css({
    backgroundColor: COLORS.lightYellow,
    borderRadius: "2rem",
    padding: "2rem 1rem",
    marginBottom: theme.sizing.scale800,
  });

  const mockIcon = css({
    fontSize: "3rem",
    padding: "0 1rem",
  });

  return (
    <Block className={finderWrapper}>
      <Block className={sideWrapper}>
        <HeadingXSmall marginBottom={theme.sizing.scale800}>
          Hello <strong>there</strong> 🌱{" "}
        </HeadingXSmall>
        <Block className={mockInfo}>
          <Block display="flex" alignItems="center">
            <Block className={mockIcon}>🌵</Block>
            <Paragraph2 margin={0}>
              How to maintain a haapy and healthy cactus.
            </Paragraph2>
          </Block>
        </Block>
      </Block>
      <Block className={gridWrapper}>
        <PlantGrid />
      </Block>
    </Block>
  );
};

export const COLORS = {
  gray: "#F8F8F8",
  white: "#FFFFFF",
  lightYellow: "#FFEAC9",
};

export interface PlantGridProps {}

const PlantGrid: React.FC<PlantGridProps> = () => {
  const itemProps: BlockProps = {
    // backgroundColor: "mono300",
    display: "flex",
  };

  return (
    <FlexGrid
      flexGridColumnCount={[1, 2, 4, 6]}
      flexGridColumnGap="scale400"
      flexGridRowGap="scale400"
      backgroundColor={COLORS.gray}
    >
      {[...Array(10)].map((_, item) => (
        <FlexGridItem key={item} {...itemProps}>
          <PlantCard />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
};

export interface PlantCardProps {}

const PlantCard: React.FC<PlantCardProps> = () => {
  const [css, theme] = useStyletron();

  const cardWrapper = css({
    width: "100%",
    color: "#0c0c0c",
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.white,
    padding: ".5rem",
    borderRadius: "2rem"
  });

  const topWrapper = css({
    padding: "1rem",
    borderRadius: "2rem",
    backgroundColor: COLORS.gray,
  });

  const imgThemed = css({
    width: "100%",
  });

  const contentThemed = css({
    backgroundColor: COLORS.white,
    padding: "1rem 1.5rem",
    "> span": {
      backgroundColor: "red!important"
    }
  });

  const titleThemed = css({
    fontWeight: 700,
    fontSize: "1.6rem",
  });

  return (
    <Block className={cardWrapper}>
      <Block className={topWrapper}>
        <img
          className={imgThemed}
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1145795/plant-1.png"
        />
      </Block>
      <Block className={contentThemed}>
        <Block className={titleThemed}>Elodea Canadensis</Block>
        <span>var. planchonii</span>
      </Block>
    </Block>
  );
};

export default Finder;
