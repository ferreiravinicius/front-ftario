import * as React from "react";
import { useStyletron } from "baseui";
import { Block } from "baseui/block";

export interface ListLineProps {
  label: string;
  info: string;
  infoDescription?: string;
}

const ListLine: React.FC<ListLineProps> = ({
  label,
  info,
  infoDescription,
}) => {

  const [css, theme] = useStyletron();

  const stListLine = css({
    display: "flex",
    justifyContent: `flex-start`,
    fontSize: theme.typography.ParagraphSmall.fontSize,
    paddingTop: theme.sizing.scale600,
    paddingBottom: theme.sizing.scale600,
    paddingLeft: theme.sizing.scale300,
    paddingRight: theme.sizing.scale300,
    borderRadius: theme.borders.radius200,
    color: theme.colors.contentPrimary,
    backgroundColor: theme.colors.background,
    ":last-child": {
      borderBottom: `none`,
    },
    ":nth-child(odd)": {
      backgroundColor: theme.colors.backgroundSecondary,
    }
  });

  const stListLineLabel = css({
    flex: `0 0`,
    minWidth: `100px`,
  });

  const stListLineInfo = css({
    flex: `1 0`,
  });

  const stListLineInfoDesc = css({
    color: theme.colors.primary500,
    marginTop: theme.sizing.scale100,
  });

  return (
    <li className={stListLine}>
      <Block className={stListLineLabel}>{label}</Block>
      <Block className={stListLineInfo}>
        {info}
        {infoDescription && (
          <Block className={stListLineInfoDesc}>{infoDescription}</Block>
        )}
      </Block>
    </li>
  );
};

export default ListLine;
