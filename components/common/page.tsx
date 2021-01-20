import { useStyletron } from "baseui";
import { AppNavBar, NavItemT } from "baseui/app-nav-bar";
import { Block } from "baseui/block";
import * as React from "react";
import { StyleObject } from "styletron-react";

const Navbar: React.FC<{}> = () => {
  const [items, setItems] = React.useState<NavItemT[]>([
    {
      label: `About`,
    },
  ]);

  const reset: StyleObject = {
    margin: 0, 
    padding: 0,
    zIndex: 99999,
  }

  return (
    <Block $style={reset}>
      <AppNavBar title="florestario" mainItems={items} />
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

  return (
    <Block className={stPage}>
      <Navbar />
      <Block>{children}</Block>
    </Block>
  );
};

export default Page;
