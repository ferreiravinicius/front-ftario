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
    padding: `1.5rem .8rem`, //TODO use theme
    borderRadius: ".6rem", //TODO use theme
    ":last-child": {
      borderBottom: `none`,
    },
    ":nth-child(odd)": {
      backgroundColor: "#F8F8F8", //TODO use theme
    }
  });

  const stListLineLabel = css({
    fontWeight: theme.typography.font650.fontWeight,
    flex: `0 0`,
    minWidth: `30%`,
  });

  const stListLineInfo = css({
    fontWeight: theme.typography.font650.fontWeight,
    flex: `1 0`
  });

  const stListLineInfoDesc = css({
    color: `rgba(0, 0, 0, 1)`, //TODO: use theme
    fontWeight: theme.typography.font300.fontWeight,
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
