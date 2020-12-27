import * as React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { BiHeart, BiSun, BiWater, BiWind, BiTestTube } from "react-icons/bi";
import { IconType } from 'react-icons/lib';

export interface PlantDetailProps {

}

export const COLORS = {
  gray: "#F8F8F8",
  green: "#00B761",
  white: "#FFFFFF",
  lightYellow: "#FFEAC9",
};

const PlantDetail: React.FC<PlantDetailProps> = () => {

  const [css, theme] = useStyletron();

  const stBadgeList = css({
    display: `grid`,
    gridTemplateColumns: `1fr 1fr`,
    gridGap: `.2rem`
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
    fontWeight: 500,
    fontSize: "1.6rem",
    fontFamily: `Mulish`,
    textAlign: `justify`,
    marginBottom: "2rem",
  });

  const stAboutHeader = css({
    fontFamily: `Mulish`,
    fontWeight: 900,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
  });

  const stAboutTitle = css({
    fontWeight: 900,
    fontSize: "2rem",
  });

  const stAboutVariety = css({
    fontWeight: 500,
    fontSize: "1.6rem",
  });

  const stAboutHeart = css({
    fontSize: "2.5rem",
  });

  return (
    <Block className={stDetailWrapper}>
      <Block className={stImageWrapper}>
        <img
          className={stImage}
          src="https://i.imgur.com/iyeEP5d.png"
        />
      </Block>
      <Block className={stAboutHeader}>
        <Block className={stAboutTitle}>
          Anubia Barteri
          <Block className={stAboutVariety}>
            var. Nana
          </Block>
        </Block>
        <Block className={stAboutHeart}>
          <BiHeart />
        </Block>
      </Block>
      <Block className={stAboutText}>
        Planta bastante rustica, ideal para aquaristas iniciantes. Sua taxa de crescimento é
        bastante significativa, mesmo sob condições adversas.
      </Block>

      <Block className={stBadgeList}>
        <Badge icon={<BiSun />} color="#FDEFAA" text="Low" subText="Illumination" />
        <Badge icon={<BiWater />} color="#D6ECEC" text="Moderated" subText="Hardness" />
        <Badge icon={<BiWind />} color="#F8D1BF" text="15 to 23°C" subText="Temperature" />
        <Badge icon={<BiTestTube />} color="#c2c2f5" text="6 to 9" subText="pH" />
      </Block>
    </Block>
  )
};

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
    border: `2px solid ${COLORS.gray}`,
    // backgroundColor: color,
    // backgroundColor: COLORS.gray,
    padding: ".8rem .8rem",
    borderRadius: "1rem",
    fontFamily: `Mulish`,
    // marginRight: ".5rem",
  })

  const stBadgeIcon = css({
    color: `rgba(0, 0, 0, .4)`,
    backgroundColor: color,
    padding: ".8rem",
    borderRadius: "50%",
    display: "flex",
    border: `1px solid ${color}`
  })


  const stBadgeInfo = css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    fontSize: "1.4rem",
    lineHeight: `1.6rem`,
    alignItems: "flex-start", //center
    marginLeft: "1rem",
  })

  const stBadgeInfoBolder = css({
    // color: color,
    color: `rgba(0, 0, 0, .8)`,
    fontWeight: 600,
  })

  const stBadgeInfoLighter = css({
    color: `rgba(0, 0, 0, .6)`,
    textTransform: `uppercase`,
    fontSize: `1.0rem`
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