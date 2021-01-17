import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { Cell, Grid } from "baseui/layout-grid";
import {
  DisplaySmall,
  DisplayXSmall,
  ParagraphMedium,
} from "baseui/typography";
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

  const stDetailWrapper = css({
    width: `100%`,
    display: "grid",
    marginTop: `1px`,
    backgroundColor: theme.colors.background,
    fontFamily: theme.typography.ParagraphMedium.fontFamily,
    gridTemplateAreas: `
      "ilu" 
      "abt" 
      "cha"`,
    color: theme.colors.contentPrimary,
    [theme.mediaQuery.medium]: {
      gridTemplateAreas: `
        "abt ilu"
        "cha cha"
      `,
      gridTemplateColumns: `50% auto`,
    },
    [theme.mediaQuery.large]: {
      gridTemplateAreas: `
        "abt ilu cha"
      `,
      gridTemplateColumns: `20% 40% 40%`,
    },
  });

  const distanceTop = {
    paddingTop: theme.sizing.scale1200,
  };

  const stIllustration = css({
    gridArea: `ilu`,
    backgroundColor: theme.colors.backgroundTertiary,
    padding: theme.sizing.scale1000,

    borderRadius: theme.borders.radius200,
    marginTop: theme.sizing.scale600,

    [theme.mediaQuery.medium]: {
      borderRadius: 0,
      marginTop: 0,

      backgroundColor: theme.colors.backgroundTertiary,
      justifySelf: `center`,
      padding: theme.sizing.scale800,
      maxWidth: `50vw`,
      zIndex: 2,
    },
    [theme.mediaQuery.large]: {
      backgroundColor: theme.colors.backgroundTertiary,
      maxWidth: `30vw`,
      padding: theme.sizing.scale800,
    },
  });

  const stAboutGraphicImage = css({
    width: `100%`,
    zIndex: 9999,
  });

  const stCharacteristics = css({
    gridArea: `cha`,
    paddingTop: theme.sizing.scale800,
    [theme.mediaQuery.medium]: {
      paddingTop: theme.sizing.scale600,
    },
    [theme.mediaQuery.large]: {
      paddingLeft: theme.sizing.scale800,
      ...distanceTop,
    },
  });

  const stAbout = css({
    gridArea: `abt`,
    [theme.mediaQuery.medium]: {
      display: `flex`,
      flexDirection: "column",
      paddingRight: theme.sizing.scale800,
      ...distanceTop,
    },
    [theme.mediaQuery.large]: {
      ...distanceTop,
    },
  });

  const stBadgeList = css({
    display: `grid`,
    gridTemplateColumns: `1fr`,
    gridRowGap: theme.sizing.scale100,
    [theme.mediaQuery.medium]: {
      gridRowGap: 0,
      gridTemplateColumns: `1fr`,
    },
  });

  const hrTitle = {
    fontWeight: 900,
    fontSize: "2rem",
    marginBottom: theme.sizing.scale800,
    color: theme.colors.contentPrimary,
  };

  const stAltTitle = css({
    ...hrTitle,
  });

  const stAboutWrapper = css({
    [theme.mediaQuery.medium]: {
      // maxWidth: `200px`
    },
  });

  const stAboutHeader = css({
    display: "flex",
  });

  const stAboutName = css({
    marginTop: theme.sizing.scale800,
    [theme.mediaQuery.medium]: {
      marginTop: 0,
    },
  });

  const stAboutNameGenus = css({
    fontWeight: `bold`,
    fontSize: theme.typography.HeadingSmall.fontSize,
    lineHeight: theme.typography.HeadingXSmall.lineHeight,
    display: `inline-block`,
    marginRight: theme.sizing.scale200,

    [theme.mediaQuery.medium]: {
      marginRight: 0,
      display: `block`,
      fontWeight: `bold`,
      fontSize: theme.typography.HeadingSmall.fontSize,
      lineHeight: theme.typography.HeadingXSmall.lineHeight,
    },
  });

  const stAboutNameSpecies = css({
    display: `inline-block`,
    fontWeight: `bold`,
    fontSize: theme.typography.HeadingSmall.fontSize,
    lineHeight: theme.typography.HeadingXSmall.lineHeight,

    [theme.mediaQuery.medium]: {
      display: `block`,
      fontWeight: `bold`,
      fontSize: theme.typography.DisplaySmall.fontSize,
      lineHeight: theme.typography.DisplayXSmall.lineHeight,
    },
  });

  const stAboutNameOptional = css({
    [theme.mediaQuery.medium]: {
      fontWeight: `normal`,
      fontSize: theme.typography.HeadingXSmall.fontSize,
    },
  });

  React.useEffect(() => {
    console.log(theme.mediaQuery);
  }, []);

  return (
    <Page>
      <DetailOuter>
        <Block className={stDetailWrapper}>
          <Block className={stAbout}>
            <Block className={stAboutWrapper}>
              <Block className={stAboutHeader}>
                <Block className={stAboutName}>
                  <Block className={stAboutNameGenus}>Anubias</Block>
                  <Block className={stAboutNameSpecies}>Barteri</Block>
                  <Block className={stAboutNameOptional}>var. Nana</Block>
                </Block>
              </Block>
              <ParagraphMedium>
                Planta bastante rústica, ideal para aquaristas iniciantes. Sua
                taxa de crescimento é bastante significativa, mesmo sob
                condições adversas.
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
      </DetailOuter>
    </Page>
  );
};

const DetailOuter: React.FC = ({ children }) => {
  return (
    <Grid>
      <Cell span={12}>
        {children}
      </Cell>
    </Grid>
  )
}

export default PlantDetail;
