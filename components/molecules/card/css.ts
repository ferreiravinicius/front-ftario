import { styled } from "baseui";

export const CardContainer = styled(`div`, ({ $theme }) => ({
  display: `flex`,
  flexGrow: 0,
  cursor: `pointer`,
  overflow: `hidden`,
  flexDirection: `column`,
  color: $theme.colors.contentPrimary,
  borderRadius: $theme.borders.radius200,
  backgroundColor: $theme.colors.backgroundPrimary,
  borderColor: $theme.borders.border100.borderColor,
  borderWidth: $theme.borders.border100.borderWidth,
  borderStyle: $theme.borders.border100.borderStyle,
  transition: `opacity .5s`,
  ":hover": {
    opacity: `.6`,
    transition: `opacity .5s`,
  },
}));

export const CardHeader = styled(`div`, ({ $theme }) => ({
  overflowY: `hidden`,
  position: `relative`,
  padding: $theme.sizing.scale600,
  borderRadius: $theme.borders.radius200,
  backgroundColor: $theme.colors.backgroundSecondary,
}));

export default {};
