
// boxShadow: `0 2px 5px 0 rgba(0,0,0,0.12),0 2px 10px 0 rgba(0,0,0,0.12)`,
import { useStyletron } from "baseui";
import { Block, BlockProps } from "baseui/block";
import { FlexGrid, FlexGridItem } from "baseui/flex-grid";
import {
  HeadingXSmall,
  Paragraph2
} from "baseui/typography";
import * as React from "react";
import { BiDroplet, BiSun } from "react-icons/bi";
import { ProgressBar, SIZE } from "baseui/progress-bar";
import { Button, SHAPE } from "baseui/button";


export interface FinderProps { }

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
  green: "#00B761",
  white: "#FFFFFF",
  lightYellow: "#FFEAC9",
};

export interface PlantGridProps { }

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
          <PlantCard name="Anubia Barteri" variety="Nana" />
        </FlexGridItem>
      ))}
    </FlexGrid>
  );
};

export interface PlantCardProps {
  name: string
  variety?: string
}

const PlantCard: React.FC<PlantCardProps> = ({ name, variety }) => {
  const [css, theme] = useStyletron();

  const cardWrapper = css({
    width: "100%",
    color: "#0c0c0c",
    display: "flex",
    flexDirection: "column",
    backgroundColor: COLORS.white,
    padding: ".5rem",
    borderRadius: "1.2rem",
    overflow: `hidden`
  });

  const topWrapper = css({
    padding: ".5rem",
    borderRadius: "1rem",
    backgroundColor: COLORS.gray,
    border: `2px solid ${COLORS.gray}`
  });

  const imgThemed = css({
    width: "100%",
  });

  const stTextWrapper = css({
    backgroundColor: "white",
    padding: "2rem .5rem",
  });

  const titleThemed = css({
    fontWeight: 700,
    fontSize: "1.4rem",
    lineHeight: "1.0rem"
  });

  const stVariety = css({
    fontWeight: 500,
    fontSize: "1.2rem"
  })

  const stBadgeList = css({
    display: `flex`
  })

  const stBadgeWrapper = css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: COLORS.gray,
    border: `2px solid ${COLORS.gray}`,
    padding: ".8rem",
    borderRadius: "1rem"
  })

  const stBadgeIcon = css({
    // fontSize: "1.6rem",
    // color: "rgba(0, 0, 0, .8)",
    color: COLORS.white,
    // backgroundColor: COLORS.white,
    backgroundColor: COLORS.green,
    padding: ".8rem",
    borderRadius: "50%",
    display: "flex",
    border: `1px solid ${COLORS.green}`
  })


  const stBadgeInfo = css({
    width: "100%",
    fontSize: "1.2rem",
    fontWeight: 500,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // backgroundColor: "red"
  })

  const stBadgeInfoBolder = css({
    // textTransform: "uppercase",
    fontSize: "1.2rem",
    color: COLORS.green,
    fontWeight: 800,
  })

  const stBadgeInfoValue = css({
    color: `rgba(0, 0, 0, .6)`
    // textTransform: "uppercase",
    // fontSize: "1rem",
    // fontWeight: 800,
  })

  return (
    <Block className={cardWrapper}>
      <Block className={topWrapper}>
        <img
          className={imgThemed}
          //src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1145795/plant-1.png"
          src="https://png2.cleanpng.com/sh/8a7506b475947fb4a21cbe862ea8aea5/L0KzQYm3V8E5N6F8hJH0aYP2gLBuTfFvfZNueeU2YnH1hLb5ib13aaMyhtN3YT3kgcbokvl2dV5sh95tZnn2eH7okgVie5QyTdQ9ZkjmdYS9hMJmPmozS6c5NEC7QYm4VcMyQWU1SKgCNES6QnB3jvc=/kisspng-anubias-barteri-var-nana-aquarium-goldfish-aquasc-5b4f8ce36d2e69.3504081815319400674472.png"
        />
      </Block>

      <Block className={stTextWrapper}>
        <Block className={titleThemed}>{name}</Block>
        {variety && <span className={stVariety}>var. {variety}</span>}
      </Block>

      {false && <Block className={stBadgeList}>
        <Block className={stBadgeWrapper}>
          <Block className={stBadgeIcon}>
            <BiSun />
          </Block>
          <Block className={stBadgeInfo}>
            <Block className={stBadgeInfoBolder}>Intense</Block>
            <Block className={stBadgeInfoValue}>Light</Block>
          </Block>
        </Block>
      </Block>}

    </Block>
  );
};

export default Finder;
