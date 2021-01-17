import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import * as React from "react";

export interface MiniBadgeProps {
  text: string;
  color: string;
  icon: JSX.Element;
}

const MiniBadge: React.FC<MiniBadgeProps> = ({ icon, text, color }) => {
  const [css, theme] = useStyletron();

  const stMiniBadge = css({
    display: `flex`,
    flexDirection: `row`,
    padding: `.4rem`,
    marginRight: `-2rem`,
    paddingRight: `2rem`,
    backgroundColor: theme.name === `dark` ? theme.colors.backgroundSecondary : color,
    fontSize: theme.typography.ParagraphXSmall.fontSize,
    borderRadius: theme.borders.radius200,
    color: theme.colors.contentPrimary,
  });

  const stMiniBadgeIcon = css({
    color: theme.colors.contentSecondary,
    display: "flex",
    padding: `.5rem`,
    borderRadius: `50%`,
    fontSize: theme.typography.ParagraphMedium.fontSize,
  });

  const stMiniBadgeInfo = css({
    marginTop: `.5rem`,
  });

  return (
    <Block className={stMiniBadge}>
      <Block className={stMiniBadgeIcon}>
        {icon}
      </Block>
      <Block className={stMiniBadgeInfo}>{text}</Block>
    </Block>
  );
};

export default MiniBadge;
