import { useStyletron } from "baseui";
import { AppNavBar, NavItemT } from "baseui/app-nav-bar";
import { Block } from "baseui/block";
import { Cell, Grid } from "baseui/layout-grid";
import * as React from "react";
import Footer from "./footer";

const Navbar: React.FC<{}> = () => {
  const [items, setItems] = React.useState<NavItemT[]>([{ label: `Teste` }]);

  return <AppNavBar title="florestario" mainItems={items} />;
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
  });

  return (
    <Block className={stPage}>
      <Navbar />
      <Block>
        {children}
      </Block>
    </Block>
  );
};

export default Page;
