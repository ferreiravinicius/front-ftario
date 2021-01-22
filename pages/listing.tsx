import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { Button, KIND, SHAPE, SIZE } from "baseui/button";
import { Checkbox } from "baseui/checkbox";
import { Input } from "baseui/input";
import { Cell, Grid } from "baseui/layout-grid";
import { Select } from "baseui/select";
import { Slider } from "baseui/slider";
import { HeadingXSmall, LabelMedium, LabelSmall } from "baseui/typography";
import * as React from "react";
import { BiFilterAlt } from "react-icons/bi";
import Card from "../components/molecules/card/card";
import Page from "../components/common/page";

export interface ListingProps {}

const Listing: React.FC<ListingProps> = () => {
  const [css, theme] = useStyletron();

  const [isFilterOpen, setFilterOpen] = React.useState(false);

  const stListing = css({
    marginTop: `1px`,
    width: `100%`,
    display: `flex`,

    [theme.mediaQuery.medium]: {
      alignItems: "flex-start", //tricky to stickybox works
    },
  });

  const currentBorder = theme.borders.border200;
  const border = `${currentBorder.borderWidth} ${currentBorder.borderStyle} ${currentBorder.borderColor}`;

  const stListingFilter = css({
    width: `100%`,
    display: isFilterOpen ? `block` : `none`,

    [theme.mediaQuery.medium]: {
      width: `30%`,
      paddingTop: theme.sizing.scale600,
      paddingRight: theme.sizing.scale600,
      display: `block`,
      position: `sticky`,
      top: `0px`,
    },
    [theme.mediaQuery.large]: {
      width: `20%`,
    },
  });

  const stListingCards = css({
    backgroundColor: theme.colors.backgroundPrimary,
    width: `100%`,
    display: isFilterOpen ? `none` : `grid`,
    gridTemplateColumns: `1fr 1fr`,
    gridGap: theme.sizing.scale200,

    [theme.mediaQuery.medium]: {
      width: `70%`,
      gridGap: theme.sizing.scale400,
      gridTemplateColumns: `1fr 1fr 1fr`,
      paddingRight: 0,
      borderLeft: border,
      paddingTop: theme.sizing.scale600,
      paddingLeft: theme.sizing.scale600,
      paddingBottom: theme.sizing.scale600,
    },
    [theme.mediaQuery.large]: {
      width: `80%`,
      gridTemplateColumns: `1fr 1fr 1fr 1fr`,
    },
  });

  const stMobileMenu = css({
    fontSize: theme.typography.ParagraphSmall.fontSize,
    borderBottom: border,
    marginBottom: `1rem`,
    [theme.mediaQuery.medium]: {
      display: `none`,
    },
  });

  const stInner = css({
    display: `flex`,
    justifyContent: `flex-end`,
    color: theme.colors.contentSecondary,
  });

  const [value, setValue] = React.useState([0, 14]);
  const [selectValue, setSelectValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Page>
      <Block className={stMobileMenu}>
        <ListingOuter>
          <Block className={stInner}>
            <Button
              endEnhancer={
                <BiFilterAlt color={theme.colors.contentSecondary} />
              }
              kind={KIND.tertiary}
              size={SIZE.compact}
              onClick={() => setFilterOpen((actual) => !actual)}
            >
              <LabelSmall color="contentSecondary">Filter</LabelSmall>
            </Button>
          </Block>
        </ListingOuter>
      </Block>
      <ListingOuter>
        <Block className={stListing}>
          <Block className={stListingFilter}>
            <HeadingXSmall marginTop={0}>Filters</HeadingXSmall>

            <LabelMedium marginBottom="scale100">Keyword</LabelMedium>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.currentTarget.value)}
              clearOnEscape
              placeholder="Type here"
            />

            <LabelMedium marginTop="scale600" marginBottom="scale100">
              pH Range
            </LabelMedium>
            <Slider
              value={value}
              min={0}
              max={14}
              onChange={({ value }) => setValue(value)}
            />

            <LabelMedium marginBottom="scale100">Temperature Range</LabelMedium>
            <Slider
              value={value}
              min={0}
              max={40}
              onChange={({ value }) => setValue(value)}
            />

            <LabelMedium marginBottom="scale100">Habit</LabelMedium>
            <Select
              options={[
                { label: "Emergent", id: "#F0F8FF" },
                { label: "Submerged", id: "#FAEBD7" },
                { label: "Floating", id: "#00FFFF" },
              ]}
              value={selectValue}
              multi
              // size={SIZE.compact}
              onChange={(params: any) => setSelectValue(params.value)}
            />

            <LabelMedium marginTop="scale600" marginBottom="scale100">
              Illumination
            </LabelMedium>
            <Checkbox checked={true} onChange={() => {}}>
              Low
            </Checkbox>
            <Checkbox checked={!true} onChange={() => {}}>
              Moderated
            </Checkbox>
            <Checkbox checked={!true} onChange={() => {}}>
              Intense
            </Checkbox>

            <LabelMedium marginTop="scale600" marginBottom="scale100">
              Growth
            </LabelMedium>
            <Checkbox checked={true} onChange={() => {}}>
              Slow
            </Checkbox>
            <Checkbox checked={!true} onChange={() => {}}>
              Moderated
            </Checkbox>
            <Checkbox checked={!true} onChange={() => {}}>
              Fast
            </Checkbox>

            <Button
              shape={SHAPE.pill}
              overrides={{
                BaseButton: {
                  style: {
                    width: "100%",
                    marginTop: `2rem`,
                    marginBottom: `2rem`,
                  },
                },
              }}
              onClick={() => alert("click")}
            >
              Aplly Filters
            </Button>
          </Block>
          <Block className={stListingCards}>
            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />

            <Card
              img="https://i.imgur.com/6h90zd3.png"
              name="Hygrofila Carymbosa"
              nameAlt="var. Siameses"
            />

            <Card
              img="https://i.imgur.com/xeEpmtt.png"
              name="Rotala Besoluta"
              nameAlt="var. None"
            />

            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />

            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />

            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />

            <Card
              img="https://i.imgur.com/6h90zd3.png"
              name="Hygrofila Carymbosa"
              nameAlt="var. Siameses"
            />

            <Card
              img="https://i.imgur.com/xeEpmtt.png"
              name="Rotala Besoluta"
              nameAlt="var. None"
            />

            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />

            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />

            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />

            <Card
              img="https://i.imgur.com/6h90zd3.png"
              name="Hygrofila Carymbosa"
              nameAlt="var. Siameses"
            />

            <Card
              img="https://i.imgur.com/xeEpmtt.png"
              name="Rotala Besoluta"
              nameAlt="var. None"
            />

            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />

            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />

            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />

            <Card
              img="https://i.imgur.com/6h90zd3.png"
              name="Hygrofila Carymbosa"
              nameAlt="var. Siameses"
            />

            <Card
              img="https://i.imgur.com/xeEpmtt.png"
              name="Rotala Besoluta"
              nameAlt="var. None"
            />

            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />

            <Card
              img="https://i.imgur.com/9j1IMzN.png"
              name="Anubias Barteri"
              nameAlt="var. Nana"
            />
          </Block>
        </Block>
      </ListingOuter>
    </Page>
  );
};

const ListingOuter: React.FC = ({ children }) => {
  return (
    <Grid>
      <Cell
        span={12}
        // overrides={{ Cell: { style: { position: `relative` } } }}
      >
        {children}
      </Cell>
    </Grid>
  );
};

export default Listing;
