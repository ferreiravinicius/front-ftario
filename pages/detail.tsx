import * as React from 'react';
import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { BiHeart, BiSun, BiWater, BiWind } from "react-icons/bi";
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
    display: `flex`
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
    fontFamily: `Roboto`,
    textAlign: `justify`,
    marginBottom: "2rem",
  });

  const stAboutHeader = css({
    fontFamily: `Montserrat`,
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "2rem",
  });

  const stAboutTitle = css({
    fontWeight: 900,
    fontSize: "2rem",
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
          Elodea Canadensis
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
        <Badge icon={<BiSun />} color="#FDEFAA" text="Intense" subText="Light" />
        <Badge icon={<BiWater />} color="#D6ECEC" text="Moderated" subText="Hardness" />
        <Badge icon={<BiWind />} color="#F8D1BF" text="15-23°C" subText="Temperature" />

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
    flexDirection: "column",
    alignItems: "center",
    border: `2px solid ${COLORS.gray}`,
    padding: ".8rem",
    borderRadius: "1rem",
    fontFamily: `Roboto`,
    marginRight: ".5rem",
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
    alignItems: "center",
    marginTop: ".5rem",
  })

  const stBadgeInfoBolder = css({
    color: color,
    fontWeight: 800,
  })

  const stBadgeInfoLighter = css({
    color: `rgba(0, 0, 0, .5)`
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