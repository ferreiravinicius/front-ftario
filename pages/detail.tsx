import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { ParagraphMedium } from "baseui/typography";
import * as React from "react";
import {
  IoBulbOutline,
  IoFlaskOutline,
  IoLeafOutline,
  IoThermometerOutline,
  IoWaterOutline,
} from "react-icons/io5";
import Badge from "../components/badge/badge";
import Page from "../components/common/page";
import List from "../components/list/list";
import ListLine from "../components/list/list-line";

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
    [theme.mediaQuery.medium]: {
      gridTemplateColumns: `1fr`,
    },
  });

  const stDetailWrapper = css({
    width: `100%`,
    maxWidth: `100%`,
    display: "grid",
    marginTop: `1px`,
    backgroundColor: theme.colors.background,
    fontFamily: theme.typography.ParagraphMedium.fontFamily,
    gridTemplateAreas: `"abt" "req" "cha"`,
    color: theme.colors.contentPrimary,
    [theme.mediaQuery.medium]: {
      paddingTop: theme.sizing.scale1000,
      gridTemplateAreas: `
        "abt ilu"
        "cha cha"
      `,
      gridTemplateColumns: `2fr 3fr`,
      // gridColumnGap: theme.sizing.scale800,
    },
    [theme.mediaQuery.large]: {
      gridTemplateAreas: `
        "abt ilu cha"
      `,
      gridTemplateColumns: `2fr 2fr 4fr`,
    }
  });

  const stIllustration = css({
    gridArea: `ilu`,
    [theme.mediaQuery.medium]: {
      textAlign: `right`,
      zIndex: 2,
      // maxHeight: `300px`,
      // overflow: `hidden`
    },
  });

  const stCharacteristics = css({
    gridArea: `cha`,
    [theme.mediaQuery.medium]: {
      zIndex: 1,
    },
    [theme.mediaQuery.large]: {
      backgroundColor: theme.colors.backgroundSecondary,
      padding: `0 ${theme.sizing.scale600}`,
      borderRadius: theme.borders.radius400,
    },
  });

  const stAbout = css({
    gridArea: `abt`,
    [theme.mediaQuery.medium]: {
      display: `flex`,
      flexDirection: "column",
    },
  });

  const hrTitle = {
    fontWeight: 900,
    fontSize: "2rem",
    margin: "2rem 0rem",
    color: theme.colors.contentPrimary,
  };

  const stAltTitle = css({
    ...hrTitle,
  });

  const stMobileTitle = css({
    ...hrTitle,
    [theme.mediaQuery.medium]: {
      display: `none`,
    },
  });

  const stAboutWrapper = css({
    [theme.mediaQuery.medium]: {
      // maxWidth: `200px`
    },
  });

  const stAboutGraphicImage = css({
    height: `100%`,
    zIndex: 9999,
  });

  const stAboutHeader = css({
    display: "flex",
    justifyContent: "space-between",
  });

  const stAboutHeaderTitle = css({
    fontWeight: `bold`,
    fontSize: theme.typography.HeadingXSmall.fontSize,
    [theme.mediaQuery.medium]: {
      fontSize: theme.typography.DisplayMedium.fontSize,
      lineHeight: theme.typography.DisplaySmall.lineHeight,
    },
  });

  const stAboutHeaderTitleDesc = css({
    fontWeight: `normal`,
    fontSize: theme.typography.ParagraphMedium.fontSize,
    lineHeight: theme.typography.ParagraphMedium.lineHeight,
    [theme.mediaQuery.medium]: {
      fontSize: theme.typography.HeadingSmall.fontSize,
    },
  });

  React.useEffect(() => {
    console.log(theme.mediaQuery);
  }, []);

  return (
    <Page>
      <Block className={stDetailWrapper}>
        <Block className={stAbout}>
          <Block className={stAboutWrapper}>
            <Block className={stAboutHeader}>
              <Block className={stAboutHeaderTitle}>
                Anubias Bartheri
                <Block className={stAboutHeaderTitleDesc}>var. Nana</Block>
              </Block>
            </Block>
            <ParagraphMedium>
              Planta bastante rústica, ideal para aquaristas iniciantes. Sua
              taxa de crescimento é bastante significativa, mesmo sob condições
              adversas.
            </ParagraphMedium>
          </Block>
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
        </Block>

        <Block className={stIllustration}>
          <img
            className={stAboutGraphicImage}
            // src="https://tropica.com/imagegen.ashx?image=/Plants/072B%20XL/1.JPG&class=product"
            // src="https://i.imgur.com/iyeEP5d.png"
            src="https://i.imgur.com/9j1IMzN.png"
            // src="https://i.imgur.com/xeEpmtt.png"
            // src="https://i.imgur.com/6h90zd3.png"
          />
        </Block>

        <Block className={stCharacteristics}>
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
      </Block>
    </Page>
  );
};

const avatarOverrides = {
  Avatar: {
    style: ({ $theme }: any) => ({
      borderTopLeftRadius: $theme.borders.radius400,
      borderTopRightRadius: $theme.borders.radius400,
      borderBottomRightRadius: $theme.borders.radius400,
      borderBottomLeftRadius: $theme.borders.radius400,
    }),
  },
  Root: {
    style: ({ $theme }: any) => ({
      borderTopLeftRadius: $theme.borders.radius400,
      borderTopRightRadius: $theme.borders.radius400,
      borderBottomRightRadius: $theme.borders.radius400,
      borderBottomLeftRadius: $theme.borders.radius400,
    }),
  },
};

export default PlantDetail;
