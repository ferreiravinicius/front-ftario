import * as React from "react";
import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { BiHeart, BiSun, BiWater, BiWind, BiTestTube } from "react-icons/bi";
import {
  IoWaterOutline,
  IoThermometerOutline,
  IoBulbOutline,
  IoFlaskOutline,
  IoRoseOutline,
  IoLeafOutline,
} from "react-icons/io5";
import { IconType } from "react-icons/lib";
import { Table } from "baseui/table-semantic";
import { ListItem, ListItemLabel, ARTWORK_SIZES } from "baseui/list";
import List from "../components/list/list";
import ListLine from "../components/list/list-line";
import Badge from "../components/badge/badge";
import { HeadingSmall, HeadingXSmall, ParagraphSmall } from "baseui/typography";
import Footer from "../components/common/footer";

export interface PlantDetailProps {}

export const COLORS = {
  gray: "#F8F8F8",
  green: "#00B761",
  white: "#FFFFFF",
  lightYellow: "#FFEAC9",
  otherGray: "rgb(229, 229, 229)",
};

const PlantDetail: React.FC<PlantDetailProps> = () => {
  const [css, theme] = useStyletron();

  const stBadgeList = css({
    display: `grid`,
    gridTemplateColumns: `1fr`,
    gridGap: `.5rem`,
  });

  const stDetailWrapper = css({
    display: "flex",
    flexDirection: "column",
    padding: "1rem 2rem",
    backgroundColor: theme.colors.background,
    fontFamily: theme.typography.ParagraphMedium.fontFamily,
  });

  const stAltTitle = css({
    fontWeight: 900,
    fontSize: "2rem",
    margin: "2rem 0rem",
    color: theme.colors.contentPrimary,
  });

  const stAbout = css({
    color: theme.colors.contentPrimary,
  });

  const stAboutGraphic = css({
    padding: theme.sizing.scale700,
  });

  const stAboutGraphicImage = css({
    width: "100%",
  });

  const stAboutHeader = css({
    display: "flex",
    justifyContent: "space-between",
  });

  const stAboutHeaderTitle = css({
    fontWeight: `bold`,
    fontSize: theme.typography.HeadingSmall.fontSize,
  });

  const stAboutHeaderTitleDesc = css({
    fontWeight: `normal`,
    fontSize: theme.typography.ParagraphMedium.fontSize,
    lineHeight: theme.typography.ParagraphMedium.lineHeight,
  });

  const stAboutHeaderHeart = css({
    fontSize: theme.typography.HeadingMedium.fontSize,
  });

  return (
    <>
      <Block className={stDetailWrapper}>
        <Block className={stAbout}>
          <Block className={stAboutGraphic}>
            <img
              className={stAboutGraphicImage}
              src="https://i.imgur.com/iyeEP5d.png"
            />
          </Block>
          <Block className={stAboutHeader}>
            <Block className={stAboutHeaderTitle}>
              Hygrophila Corymbosa
              <Block className={stAboutHeaderTitleDesc}>var. Siamensis</Block>
            </Block>
            <Block className={stAboutHeaderHeart}>
              <BiHeart />
            </Block>
          </Block>
        </Block>

        <ParagraphSmall>
          Planta bastante rústica, ideal para aquaristas iniciantes. Sua taxa de
          crescimento é bastante significativa, mesmo sob condições adversas.
        </ParagraphSmall>

        <Block className={stAltTitle}>Requirements</Block>

        <Block className={stBadgeList}>
          <Badge
            icon={<IoBulbOutline />}
            color="#FDEFAA"
            text="Low"
            subText="Illumination"
          />
          <Badge
            icon={<IoFlaskOutline />}
            color="#c2c2f5"
            text="6 to 9"
            subText="pH"
          />
          <Badge
            icon={<IoWaterOutline />}
            color="#D6ECEC"
            text="Moderated"
            subText="Hardness"
          />
          <Badge
            icon={<IoThermometerOutline />}
            color="#F8D1BF"
            text="15 to 23°C"
            subText="Temperature"
          />
          <Badge
            icon={<IoLeafOutline />}
            color="#dbfdaa"
            text="Not Demanding"
            subText="CO² Injection"
          />
        </Block>

        <Block className={stAltTitle}>Characteristics</Block>

        <Block className={stBadgeList}>
          <List>
            <ListLine label="Growth" info="Slow" />
            <ListLine label="Size" info="10cm to 25cm" />
            <ListLine
              label="Habit"
              info="Emergent"
              infoDescription="Rooted in the bottom, partially submerged and partially out of water."
            />
            <ListLine
              label="Propagation"
              info="Cuttings"
              infoDescription="Cut the stem and plant in substrate."
            />
            <ListLine
              label="Position"
              info="Back Aquarium"
              infoDescription="It's recommended to be planted in the back of the aquarium."
            />
          </List>
        </Block>
      </Block>
      <Footer />
    </>
  );
};

export default PlantDetail;
