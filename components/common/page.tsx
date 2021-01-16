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
    margin: 0,
    padding: 0,
    display: `flex`,
    flexDirection: `column`,
    height: `100vh`,
  });

  return (
    <Block className={stPage}>
      <Navbar />
      {/* <Grid gridMargins={[0, 36, 64]}> */}
      <Grid>
        <Cell span={12}>
          {children}
        </Cell>
      </Grid>
      {/* <Footer /> */}
    </Block>
  );
};

export default Page;
