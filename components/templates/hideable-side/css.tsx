import { styled } from "baseui";
import { SIZES } from "../../../utils/constants";
import { borderAbbr } from "../../../utils/css-utils";

export const TemplateContainer = styled(`div`, ({ $theme }) => ({
  backgroundColor: `lightcyan`,
  color: $theme.colors.contentPrimary,

  [$theme.mediaQuery.medium]: {
    display: `block`,
    position: `relative`,
    width: `100%`,
    height: `100%`,
  },
}));

export interface SideContainerProps {
  open: boolean;
}

export const SideContainer = styled<SideContainerProps, `div`>(
  `div`,
  ({ $theme, open }) => ({
    zIndex: 4,
    display: open ? `visible` : `none`,
    position: `absolute`,
    overflowY: `auto`,
    top: SIZES.navbar.height,
    width: SIZES.drawer.width.small,
    backgroundColor: $theme.colors.background,
    height: `calc(100vh - ${SIZES.navbar.height})`,

    [$theme.mediaQuery.medium]: {
      display: `block`,
      position: `fixed`,
      overflowY: "auto",
      top: SIZES.navbar.height,
      width: SIZES.drawer.width.medium,
      borderRight: borderAbbr($theme.borders.border200),
    },

    [$theme.mediaQuery.large]: {
      width: SIZES.drawer.width.large,
    },
  })
);

export const MainContainer = styled(`div`, ({ $theme }) => ({
  //do not add paddings/margins
  width: `100vw`,
  overflowY: "auto",
  position: `absolute`,
  top: SIZES.navbar.height,
  backgroundColor: $theme.colors.background,
  height: `calc(100vh - ${SIZES.navbar.height})`,

  [$theme.mediaQuery.medium]: {
    overflowY: "auto",
    position: `absolute`,
    top: SIZES.navbar.height,
    left: SIZES.drawer.width.medium,
    height: `calc(100vh - ${SIZES.navbar.height})`,
    width: `calc(100vw - ${SIZES.drawer.width.medium})`,
  },

  [$theme.mediaQuery.large]: {
    left: SIZES.drawer.width.large,
    width: `calc(100vw - ${SIZES.drawer.width.large})`,
  },
}));

export default {};
