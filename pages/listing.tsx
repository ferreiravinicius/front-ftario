import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { Cell, Grid } from "baseui/layout-grid";
import * as React from "react";
import Page from "../components/common/page";
import StickyBox from "react-sticky-box";
import {
  IoBulbOutline,
  IoFlaskOutline,
  IoLeafOutline,
  IoThermometerOutline,
  IoWaterOutline,
} from "react-icons/io5";
import MiniBadge from "../components/badge/mini-badge";

export interface ListingProps {}

const Listing: React.FC<ListingProps> = () => {
  const [css, theme] = useStyletron();

  const stListing = css({
    marginTop: `1px`,
    width: `100%`,
    height: `100%`,
    display: `flex`,
    alignItems: "flex-start", //tricky to stickybox works
  });

  const stListingFilter = css({
    backgroundColor: `red`,
    width: `20%`,
  });

  const stListingCards = css({
    backgroundColor: theme.colors.backgroundTertiary,
    width: `80%`,
    display: `flex`,
  });

  const stCard = css({
    flex: `0 0 20%`,
    backgroundColor: theme.colors.backgroundPrimary,
    padding: theme.sizing.scale600,
    margin: theme.sizing.scale600,
    display: `flex`,
    flexDirection: `column`,
    overflow: `hidden`,
    borderRadius: theme.borders.radius200,
    color: theme.colors.contentPrimary,
  });

  const stCardTop = css({
    maxHeight: `215px`,
    // overflowY: `hidden`,
    // overflowX: `visible`,
    position: `relative`
  });

  const stCardTopImage = css({
    width: `100%`,
  });

  const stCardAbout = css({
    backgroundColor: theme.colors.backgroundPrimary,
    paddingTop: theme.sizing.scale600,
    zIndex: 99,
  });

  const stCardAboutName = css({
    fontSize: theme.typography.ParagraphLarge.fontSize,
  });

  const stCardAboutNameVar = css({
    fontSize: theme.typography.ParagraphSmall.fontSize,
  });

  const stMiniBadgeWrapper = css({
    display: `flex`,
    flexDirection: `column-reverse`,
    alignItems: `flex-end`,
    position: `absolute`,
    top: 0,
    right: 0,
  });

  return (
    <Page>
      <ListingOuter>
        <Block className={stListing}>
          <StickyBox className={stListingFilter}> Filtro </StickyBox>
          <Block className={stListingCards}>
            <Block className={stCard}>
              <Block className={stCardTop}>
                <img
                  className={stCardTopImage}
                  src="https://i.imgur.com/9j1IMzN.png"
                  // src="https://i.imgur.com/xeEpmtt.png"
                  // src="https://i.imgur.com/6h90zd3.png"
                />
                <Block className={stMiniBadgeWrapper}>
                  <MiniBadge
                    color="#FDEFAA"
                    text="Low"
                    icon={<IoBulbOutline />}
                  />

                  <MiniBadge
                    color="#c2c2f5"
                    text="6 to 9"
                    icon={<IoFlaskOutline />}
                  />

                  <MiniBadge
                    color="#F8D1BF"
                    text="15 to 23°C"
                    icon={<IoThermometerOutline />}
                  />
                </Block>
              </Block>
              <Block className={stCardAbout}>
                <Block className={stCardAboutName}>
                  Anubias Barteri
                  <Block className={stCardAboutNameVar}>var. Nana</Block>
                </Block>
              </Block>
            </Block>
          </Block>
        </Block>
      </ListingOuter>
    </Page>
  );
};

const ListingOuter: React.FC = ({ children }) => {
  return (
    <Grid>
      <Cell span={12}>{children}</Cell>
    </Grid>
  );
};

export default Listing;
