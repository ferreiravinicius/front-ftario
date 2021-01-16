import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import * as React from "react";

export interface BadgeProps {
  text: string;
  color: string;
  subText: string;
  icon: JSX.Element;
}

const Badge: React.FC<BadgeProps> = ({ icon, color, text, subText }) => {
  const [css, theme] = useStyletron();

  React.useEffect(() => {
    // console.log(theme.name)
  }, []);

  const stBadge = css({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: theme.sizing.scale300,
    color: theme.colors.contentPrimary,
    borderRadius: theme.borders.radius200,
    backgroundColor: theme.colors.backgroundSecondary,
    fontFamily: theme.typography.ParagraphSmall.fontFamily,
    [theme.mediaQuery.medium]: {
      backgroundColor: `transparent`,
      padding: theme.sizing.scale100,
    },
  });

  const stBadgeIcon = css({
    display: "flex",
    borderRadius: "50%",
    backgroundColor: theme.name === `dark` ? theme.colors.primary700 : color,
    padding: theme.sizing.scale600,
    fontSize: theme.sizing.scale650,
    color: theme.colors.contentTertiary, 
    [theme.mediaQuery.medium]: {
      fontSize: theme.sizing.scale600,
      padding: theme.sizing.scale500,
    },
  });

  const stBadgeInfo = css({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: theme.sizing.scale700,
    fontSize: theme.typography.ParagraphSmall.fontSize,
  });

  const stBadgeInfoBolder = css({
    fontWeight: `normal`,
    color: theme.colors.contentPrimary,
    fontSize: theme.typography.ParagraphMedium.fontSize,
    [theme.mediaQuery.medium]: {
      fontWeight: `normal`,
    },
  });

  const stBadgeInfoLighter = css({
    color: theme.colors.contentSecondary,
    fontSize: theme.typography.ParagraphSmall.fontSize,
  });

  return (
    <Block className={stBadge}>
      <Block className={stBadgeIcon}>{icon}</Block>
      <Block className={stBadgeInfo}>
        <Block className={stBadgeInfoBolder}>{text}</Block>
        <Block className={stBadgeInfoLighter}>{subText}</Block>
      </Block>
    </Block>
  );
};

export default Badge;
