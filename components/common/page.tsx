import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import * as React from 'react';
import Footer from './footer';
import {AppNavBar, NavItemT, setItemActive} from 'baseui/app-nav-bar';
import {ChevronDown, Delete, Overflow, Upload} from 'baseui/icon';
import {Grid, Cell} from 'baseui/layout-grid';

const Navbar: React.FC<{}> = () => {

  const [items, setItems] = React.useState<NavItemT[]>([
    { label: `Teste` }
  ]);

  return (
    <AppNavBar 
      title="florestario"
      mainItems={items}
    />
  );
}

export interface PageProps {
  
}
 
const Page: React.FC<PageProps> = ({ children }) => {

  const [css, theme] = useStyletron();

  const stPage = css({
    backgroundColor: theme.colors.background,
    margin: 0,
    padding: 0,
    display: `flex`,
    flexDirection: `column`,
  });

  const stInner = css({
    width: `100vw`,
    paddingLeft: theme.sizing.scale1000,
    paddingRight: theme.sizing.scale1000,
    [theme.mediaQuery.large]: {
      maxWidth: `60vw`,
      alignSelf: `center`,
    }
  });

  return (
    <Block className={stPage}>
      <Navbar />
      <Grid>
        {children}
      </Grid>
      <Footer />
    </Block>
  );
}
 
export default Page;