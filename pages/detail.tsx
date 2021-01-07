import * as React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { BiHeart, BiSun, BiWater, BiWind, BiTestTube } from "react-icons/bi";
import { IoWaterOutline, IoThermometerOutline, IoBulbOutline, IoFlaskOutline, IoRoseOutline, IoLeafOutline } from "react-icons/io5";
import { IconType } from 'react-icons/lib';
import { Table } from "baseui/table-semantic";
import {ListItem, ListItemLabel, ARTWORK_SIZES} from 'baseui/list';

export interface PlantDetailProps {

}

export const COLORS = {
  gray: "#F8F8F8",
  green: "#00B761",
  white: "#FFFFFF",
  lightYellow: "#FFEAC9",
  otherGray: "rgb(229, 229, 229)"
};

export const FONTS = {
  rubik: `Rubik`, //@300;400;600
  mulish: `Mulish`, //@400;700;800
  montserrat: `Montserrat`, //@300;400;500;700
  roboto: `Roboto`, //@300;400;700
}

const ACTUAL_FONT = FONTS.rubik;

const Separator: React.FC<PlantDetailProps> = () => {

  const [css] = useStyletron();

  const stSeparator = css({
    margin: "1rem 0rem",
  });

  return <Block className={stSeparator} />
}

const PlantDetail: React.FC<PlantDetailProps> = () => {

  const [css, theme] = useStyletron();

  const stBadgeList = css({
    display: `grid`,
    gridTemplateColumns: `1fr`,
    gridGap: `.5rem`
  })

  const stDetailWrapper = css({
    display: "flex",
    flexDirection: "column",
    padding: "1rem 2rem"
  });

  const stImageWrapper = css({
    padding: "2rem"
  });

  const stImage = css({
    width: "100%"
  });

  const stAboutText = css({
    fontWeight: 400,
    fontSize: "1.4rem",
    fontFamily: ACTUAL_FONT,
  });

  const stAboutHeader = css({
    fontFamily: ACTUAL_FONT,
    fontWeight: 900,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
  });

  const stAboutTitle = css({
    fontWeight: 900,
    fontSize: "2.5rem",
    fontFamily: ACTUAL_FONT,
  });

  const stAltTitle = css({
    fontWeight: 900,
    fontSize: "2rem",
    fontFamily: ACTUAL_FONT,
    margin: "2rem 0rem",
  });

  const stAboutVariety = css({
    fontWeight: 500,
    fontSize: "1.6rem",
  });

  const stAboutHeart = css({
    fontSize: "2.5rem",
  });


  // List

  const stList = css({
    margin: "0",
    padding: "0",
    fontFamily: ACTUAL_FONT,
  });

  const stListLine = css({
    display: "flex",
    justifyContent: `flex-start`,
    fontSize: "1.4rem",
    padding: `1.5rem .8rem`,
    // borderBottom: `2px solid ${COLORS.gray}`,
    borderRadius: ".6rem",
    ":last-child": {
      borderBottom: `none`,
    },
    ":nth-child(odd)": {
      backgroundColor: COLORS.gray,
    }
  });

  const stListContent = css({
    fontWeight: 600,
    flex: `1 0`
  });

  const stListTitle = css({
    fontWeight: 600,
    flex: `0 0`,
    minWidth: `30%`,
  });

  const stListDescription = css({
    color: `rgba(0, 0, 0, 1)`,
    // fontSize: `1.2rem`,
    fontWeight: 300,
  });

  return (
    <Block className={stDetailWrapper}>
      <Block className={stImageWrapper}>
        <img className={stImage} src="https://i.imgur.com/iyeEP5d.png" />
      </Block>
      <Block className={stAboutHeader}>
        <Block className={stAboutTitle}>
          Anubia Barteri
          <Block className={stAboutVariety}>var. Nana</Block>
        </Block>
        <Block className={stAboutHeart}>
          <BiHeart />
        </Block>
      </Block>
      <Block className={stAboutText}>
        Planta bastante rustica, ideal para aquaristas iniciantes. Sua taxa de
        crescimento é bastante significativa, mesmo sob condições adversas.
      </Block>

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
        <ul className={stList}>

          <li className={stListLine}>
            <Block className={stListTitle}>Growth</Block>
            <Block className={stListContent}>
              Slow
            </Block>
          </li>

          <li className={stListLine}>
            <Block className={stListTitle}>Size</Block>
            <Block className={stListContent}>
              10cm to 25cm
            </Block>
          </li>

          <li className={stListLine}>
            <Block className={stListTitle}>Habit</Block>
            <Block className={stListContent}>
              Emergent
              <Block className={stListDescription}>
                Rooted in the bottom, partially submerged and partially out of water.
              </Block>
            </Block>
          </li>

          <li className={stListLine}>
            <Block className={stListTitle}>Position</Block>
            <Block className={stListContent}>
              Back Aquarium
              <Block className={stListDescription}>
                It's recommended to be planted in the back of the aquarium.
              </Block>
            </Block>
          </li>
        </ul>
      </Block>

      <Block className={stAltTitle}>Planting</Block>

      <Block className={stAltTitle}>Propagation</Block>
    </Block>
  );
};

const List: React.FC<{}> = ({ children }) => {

  const [css] = useStyletron();

  const stList = css({
    padding: "0",
    margin: "0",
  });

  return (
    <ul className={stList}>
      {children}
    </ul>
    );
}

export interface BadgeProps {
  text: string
  color: string
  subText: string
  icon: JSX.Element
}

const Badge: React.FC<BadgeProps> = ({ icon, color, text, subText }) => {

  const [css, theme] = useStyletron();

  const stBadgeWrapper = css({
    display: "flex",
    flexDirection: "row", //column
    alignItems: "center",
    // border: `1px solid ${COLORS.otherGray}`,
    backgroundColor: COLORS.gray,
    padding: ".8rem .8rem",
    borderRadius: ".6rem",
    fontFamily: ACTUAL_FONT,
  })

  const stBadgeIcon = css({
    color: `rgba(0, 0, 0, .6)`,
    backgroundColor: color,
    padding: "1rem",
    borderRadius: "50%",
    display: "flex",
    fontSize: "2rem",
    // border: `1px solid ${color}`,
  })


  const stBadgeInfo = css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    fontSize: "1.4rem",
    lineHeight: `1.8rem`,
    alignItems: "flex-start", //center
    marginLeft: "2rem",
  })

  const stBadgeInfoBolder = css({
    // color: color,
    color: `rgba(0, 0, 0, .8)`,
    fontWeight: 600,
    fontSize: "1.6rem",
  })

  const stBadgeInfoLighter = css({
    color: `rgba(0, 0, 0, .6)`,
    // textTransform: `uppercase`,
    fontSize: `1.4rem`
  })

  return (
    <Block className={stBadgeWrapper}>
      <Block className={stBadgeIcon}>
        {/* <BiSun /> */}
        {icon}
      </Block>
      <Block className={stBadgeInfo}>
        <Block className={stBadgeInfoBolder}>{text}</Block>
        <Block className={stBadgeInfoLighter}>{subText}</Block>
      </Block>
    </Block>
  );
};


export default PlantDetail;