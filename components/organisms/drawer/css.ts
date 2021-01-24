import { Theme } from "baseui/theme";
import { styled } from "baseui";
import { SIZES } from "../../../utils/constants";
import { borderAbbr } from "../../../utils/css";

interface DrawerContainerProps {
  open: boolean;
}

export const DrawerContainer = styled<DrawerContainerProps, "div">(
  `div`,
  ({ $theme, open }) => ({
    display: open ? `visible` : `none`,
    position: `absolute`,
    top: SIZES.navbar.height,
    overflowY: "auto",
    width: SIZES.drawer.width.small,
    height: `calc(100vh - ${SIZES.navbar.height} - ${SIZES.drawerBottomBar.height})`,
    backgroundColor: $theme.colors.background,

    [$theme.mediaQuery.medium]: {
      position: `fixed`,
      overflowY: "auto",
      display: `block`,
      top: SIZES.navbar.height,
      width: SIZES.drawer.width.medium,
      height: `calc(100vh - ${SIZES.navbar.height} - ${SIZES.drawerBottomBar.height})`,
      borderRight: `10px solid red`,
    },

    [$theme.mediaQuery.large]: {
      width: SIZES.drawer.width.large,
    },
  })
);

export default {};
