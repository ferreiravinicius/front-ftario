import { useStyletron } from "baseui";
import { Block, BlockProps } from "baseui/block";
import { Heading, HeadingLevel } from "baseui/heading";
import {
  Caption1,
  H1,
  HeadingMedium,
  HeadingSmall,
  Label1,
  Paragraph3,
} from "baseui/typography";
import * as React from "react";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";

export interface FinderProps {}

const Finder: React.FC<FinderProps> = () => {
  return (
    <>
      <PlantGrid />
    </>
  );
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
      backgroundColor="#F8F8F8"
      padding="2rem"
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

  const cardThemed = css({
    width: "100%",
    color: "#0C9769",
    // color: "#E3F3EE",
    overflow: "hidden",
    padding: "2rem 0 0 0",
    fontFamily: `Montserrat`,
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    borderRadius: "1rem 4rem 0 0",
    // backgroundColor: "#0C9769",
    boxShadow: `0 2px 5px 0 rgba(0,0,0,0.12),0 2px 10px 0 rgba(0,0,0,0.12)`,

    background: `
linear-gradient(135deg, #0D986A 25%, transparent 25%) -50px 0,
linear-gradient(225deg, #0D986A 25%, transparent 25%) -50px 0,
linear-gradient(315deg,#0D986A 25%, transparent 25%),
linear-gradient(45deg, #0D986A 25%, transparent 25%);
background-size: 100px 100px;
background-color: #139e70;`
  });

  const contentThemed = css({
    padding: "6rem 4rem 4rem 4rem",
    borderRadius: "0rem 1rem 0 0",
    // borderRadius: "4rem 4rem 0 0",
    // borderRadius: "4rem 0rem 0 0",
    backgroundColor: "#f3f3f3",
    boxShadow: `0 2px 5px 0 rgba(0,0,0,0.12),0 2px 10px 0 rgba(0,0,0,0.12)`
  });

  const titleThemed = css({
    fontWeight: 700,
    fontSize: "1.6rem",
  });

  const imgThemed = css({
    // border: "3px solid red",
    width: "100%",
  });

  const topThemed = css({
    // border: "3px solid red",
    marginBottom: "-4rem",
    zIndex: 1
  });

  return (
    <Block className={cardThemed}>
      <Block className={topThemed}>
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
