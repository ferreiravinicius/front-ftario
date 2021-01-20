import { useStyletron } from "baseui";
import { AppNavBar, NavItemT } from "baseui/app-nav-bar";
import { Block } from "baseui/block";
import { LabelMedium } from "baseui/typography";
import * as React from "react";
import { StyleObject } from "styletron-react";
import { SIZES } from "../../utils/constants";

const Navbar: React.FC<{}> = () => {

  const [css, theme] = useStyletron();

  const currentBorder = theme.borders.border200;
  const border = `${currentBorder.borderWidth} ${currentBorder.borderStyle} ${currentBorder.borderColor}`;

  const stNavbar = css({
    height: SIZES.navbarHeight,
    margin: 0, 
    zIndex: 9,
    backgroundColor: theme.colors.background,
    display: `flex`,
    flexDirection: `row`,
    alignItems: `center`,
    alignContent: `center`,
    borderBottom: border,
    justifyContent: `space-between`,
    paddingLeft: theme.sizing.scale600,
    paddingRight: theme.sizing.scale600,
  });

  const stNavbarLogo = css({
  });

  const stNavbarMenu = css({
  });

  return (
    <Block className={stNavbar}>
      <Block className={stNavbarLogo}>
        <LabelMedium>florestario</LabelMedium>
      </Block>

      <Block className={stNavbarMenu}>
        Store About
      </Block>
    </Block>
  );
};

export interface PageProps {}

const Page: React.FC<PageProps> = ({ children }) => {
  const [css, theme] = useStyletron();

  const stPage = css({
    backgroundColor: theme.colors.background,
    fontFamily: theme.typography.ParagraphMedium.fontFamily,
    margin: 0,
    padding: 0,
    display: `flex`,
    flexDirection: `column`,
    height: `100vh`,
    width: `100vw`,
    overflowX: `hidden`,
  });

  const stPageContent = css({
    display: `flex`,
    height: `100%`,
    width: `100%`,
  });

  return (
    <Block className={stPage}>
      <Navbar />
      <Block className={stPageContent}>{children}</Block>
    </Block>
  );
};

export default Page;
