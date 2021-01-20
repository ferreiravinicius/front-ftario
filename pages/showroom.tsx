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
import Card from "../components/card/card";
import Page from "../components/common/page";
import { Drawer, SIZE as drawerSIZE, ANCHOR } from "baseui/drawer";

export interface ShowroomProps {}

const Showroom: React.FC<ShowroomProps> = () => {
  const [css, theme] = useStyletron();

  const [isFilterOpen, setFilterOpen] = React.useState(false);

  const szDrawer = {
    medium: `32vw`,
    large: `20vw`,
  };

  const stListing = css({
    marginTop: `1px`,
    display: `flex`,
    position: `absolute`,
    right: 0,

    [theme.mediaQuery.medium]: {
      width: `calc(100vw - ${szDrawer.medium})`,
    },
    [theme.mediaQuery.large]: {
      width: `calc(100vw - ${szDrawer.large})`,
    },
  });

  const stListingCards = css({
    backgroundColor: theme.colors.backgroundPrimary,
    width: `100%`,
    display: `grid`,
    gridTemplateColumns: `1fr 1fr`,
    gridGap: theme.sizing.scale200,

    [theme.mediaQuery.medium]: {
      gridTemplateColumns: `1fr 1fr 1fr 1fr`,
      gridGap: theme.sizing.scale400,
      paddingRight: theme.sizing.scale600,
      paddingTop: theme.sizing.scale600,
      paddingLeft: theme.sizing.scale600,
      paddingBottom: theme.sizing.scale600,
    },
    [theme.mediaQuery.large]: {
      gridTemplateColumns: `1fr 1fr 1fr 1fr 1fr`,
    },
  });

  const currentBorder = theme.borders.border200;
  const border = `${currentBorder.borderWidth} ${currentBorder.borderStyle} ${currentBorder.borderColor}`;

  const stDrawerContent = css({
    width: `100%`,
  });

  const [value, setValue] = React.useState([0, 14]);
  const [selectValue, setSelectValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <Page>
      <Drawer
        isOpen
        closeable
        showBackdrop
        anchor={ANCHOR.left}
        size={drawerSIZE.auto}
        overrides={{
          Backdrop: {
            style: {
              [theme.mediaQuery.medium]: {
                display: `none`,
              },
            },
          },
          Close: {
            style: {
              marginTop: theme.sizing.scale1400,
              [theme.mediaQuery.medium]: {
                display: `none`,
              },
            },
          },
          DrawerContainer: {
            style: {
              width: `100vw`,
              paddingTop: theme.sizing.scale1400,
              [theme.mediaQuery.medium]: {
                borderRight: border,
                marginTop: 0,
                paddingTop: theme.sizing.scale1400,
                width: szDrawer.medium,
              },
              [theme.mediaQuery.large]: {
                width: szDrawer.large,
              },
            },
          },
          DrawerBody: {
            //TODO: delete if not necessary
            style: {
              paddingBottom: theme.sizing.scale800,
              [theme.mediaQuery.medium]: {},
            },
          },
          Root: {
            style: {
              [theme.mediaQuery.medium]: {
                width: `0vw`,
                backgroundColor: `red`,
              },
            },
          },
        }}
      >
        <Block className={stDrawerContent}>
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
      </Drawer>
      <Block className={stListing}>
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
            img="https://i.imgur.com/6h90zd3.png"
            name="Hygrofila Carymbosa"
            nameAlt="var. Siameses"
          />

          <Card
            img="https://i.imgur.com/xeEpmtt.png"
            name="Rotala Besoluta"
            nameAlt="var. None"
          />
        </Block>
      </Block>
    </Page>
  );
};

export default Showroom;
