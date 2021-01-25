import { styled } from "baseui";
import { borderAbbr, scrollbarAbbr } from "../../../utils/css-utils";

const footerHeight = `80px`;

export const FilterContainer = styled(`div`, ({ $theme }) => ({
  width: `100%`,
  height: `100%`,
  display: `absolute`,
  overflowY: `hidden`,
  backgroundColor: $theme.colors.background,
}));

export const FilterBody = styled(`div`, ({ $theme }) => ({
  overflowY: `auto`,
  ...scrollbarAbbr($theme),
  height: `calc(100% - ${footerHeight})`,
  backgroundColor: $theme.colors.background,
}));

export const FilterFooter = styled(`div`, ({ $theme }) => ({
  display: `flex`,
  height: footerHeight,
  alignItems: `center`,
  alignContent: `center`,
  paddingLeft: $theme.sizing.scale600,
  paddingRight: $theme.sizing.scale600,
  borderTop: borderAbbr($theme.borders.border200),
  backgroundColor: $theme.colors.backgroundPrimary,
}));

export default {};
