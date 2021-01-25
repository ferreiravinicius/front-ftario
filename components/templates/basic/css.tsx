import { styled } from "baseui";
import { SIZES } from "../../../utils/constants";
import { borderAbbr } from "../../../utils/css";

export interface DrawerProps {
  open: boolean;
}

export const DrawerContainer = styled<DrawerProps, `div`>(`div`, ({ $theme, open }) => ({
  zIndex: 4,
  display: open ? `visible` : `none`,
  position: `absolute`,
  overflowY: `auto`,
  top: SIZES.navbar.height,
  width: SIZES.drawer.width.small,
  backgroundColor: $theme.colors.background,
  height: `calc(100vh - ${SIZES.navbar.height} - ${SIZES.drawerBottomBar.height})`,

  [$theme.mediaQuery.medium]: {
    display: `block`,
    position: `fixed`,
    overflowY: "auto",
    top: SIZES.navbar.height,
    width: SIZES.drawer.width.medium,
    borderRight: borderAbbr($theme.borders.border200),
    height: `calc(100vh - ${SIZES.navbar.height} - ${SIZES.drawerBottomBar.height})`,
  },

  [$theme.mediaQuery.large]: {
    width: SIZES.drawer.width.large,
  },
}));

export default {};
