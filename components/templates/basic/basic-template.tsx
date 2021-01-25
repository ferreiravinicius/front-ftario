import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import * as React from "react";
import { SIZES } from "../../../utils/constants";
import { borderAbbr } from "../../../utils/css";
import MainPage from "../main-page/main-page";
import { SideContainer, TemplateContainer } from "./css";

export interface BasicTemplateProps {}

const BasicTemplate: React.FC<BasicTemplateProps> = () => {
  const [css, theme] = useStyletron();

  const bd = theme.borders.border200;
  const border = `${bd.borderWidth} ${bd.borderStyle} ${bd.borderColor}`;

  const stTemplateDrawerAction = css({
    
    // backgroundColor: `lightyellow`,

    position: `fixed`,
    zIndex: 5,
    display: `flex`,
    flexDirection: `row`,
    bottom: 0,
    backgroundColor: theme.colors.background,
    borderTop: border,
    width: `100%`,
    alignItems: `center`,
    height: SIZES.drawerBottomBar.height,

    [theme.mediaQuery.medium]: {
      width: SIZES.drawer.width.medium,
      borderRight: borderAbbr(theme.borders.border200),
    },
    [theme.mediaQuery.large]: {
      width: SIZES.drawer.width.large,
    },
  });

  const stDrawerContent = css({

  });

  const stTemplateMain = css({
    //do not add paddings/margins
    // backgroundColor: `lightseagreen`,

    position: `absolute`,
    top: SIZES.navbar.height,
    overflowY: "auto",
    width: `100vw`,
    height: `calc(100vh - ${SIZES.navbar.height})`,
    backgroundColor: theme.colors.background,

    [theme.mediaQuery.medium]: {
      position: `absolute`,
      top: SIZES.navbar.height,
      left: SIZES.drawer.width.medium,
      width: `calc(100vw - ${SIZES.drawer.width.medium})`,
      height: `calc(100vh - ${SIZES.navbar.height})`,
      overflowY: "auto",
    },
    [theme.mediaQuery.large]: {
      width: `calc(100vw - ${SIZES.drawer.width.large})`,
      left: SIZES.drawer.width.large,
    },
  });

  return (
    <MainPage>
      <TemplateContainer>
        {/* Drawer */}
        <SideContainer open={false}>
          Side
          {/* <Block className={stTemplateDrawerAction}>Drawer Action</Block> */}
          {/* <Block className={stDrawerContent}>Drawer</Block> */}
        </SideContainer>

        {/* Main */}
        <Block className={stTemplateMain}>
          Main 
        </Block>
      </TemplateContainer>
    </MainPage>
  );
};

export default BasicTemplate;
