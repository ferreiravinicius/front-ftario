import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { Button, SHAPE } from "baseui/button";
import { Checkbox } from "baseui/checkbox";
import { Input } from "baseui/input";
import { Select } from "baseui/select";
import { Slider } from "baseui/slider";
import { LabelMedium } from "baseui/typography";
import * as React from "react";
import Card from "../components/card/card";
import Page from "../components/common/page";

export interface ShowroomProps {}

const Showroom: React.FC<ShowroomProps> = () => {
  const [css, theme] = useStyletron();

  const [isFilterOpen, setFilterOpen] = React.useState(false);

  const currentBorder = theme.borders.border200;
  const border = `${currentBorder.borderWidth} ${currentBorder.borderStyle} ${currentBorder.borderColor}`;

  const [value, setValue] = React.useState([0, 14]);
  const [selectValue, setSelectValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const szdrawer = {
    medium: `30vw`,
    large: `20vw`,
  };

  const stListing = css({
    display: `flex`,
    marginLeft: szdrawer.large,
    width: `calc(100vw - ${szdrawer.large})`,
    backgroundColor: theme.colors.background,
  });

  const stListingContent = css({
    backgroundColor: theme.colors.backgroundPrimary,
    width: `100%`,
    display: `grid`,
    gridTemplateColumns: `1fr 1fr`,
    gridGap: theme.sizing.scale200,

    [theme.mediaQuery.medium]: {
      gridTemplateColumns: `1fr 1fr 1fr 1fr`,
      gridGap: 0,
      paddingRight: theme.sizing.scale600,
      paddingTop: theme.sizing.scale600,
      paddingLeft: theme.sizing.scale600,
      paddingBottom: theme.sizing.scale600,
    },
    [theme.mediaQuery.large]: {
      gridTemplateColumns: `1fr 1fr 1fr 1fr 1fr`,
    },
  });

  const stDrawer = css({
    display: `flex`,
    position: `fixed`,
    top: 0,
    bottom: 0,
    width: szdrawer.large,
    flexDirection: `column`,
    backgroundColor: theme.colors.background,
    borderRight: border,

    overflowY: `auto`,
    "::-webkit-scrollbar": {
      width: `6px`,
      backgroundColor: theme.colors.background,
    },
    "::-webkit-scrollbar-track": {
      borderRadius: `10px`,
      backgroundColor: theme.colors.background,
    },
    "::-webkit-scrollbar-thumb": {
      borderRadius: `10px`,
      backgroundColor: `rgba(0, 0, 0, .1)`,
    },
  });

  const stDrawerContent = css({
    display: `flex`,
    flexDirection: `column`,
    padding: theme.sizing.scale600,
  });

  return (
    <Page>
      <Block className={stDrawer}>
        <Block className={stDrawerContent}>
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
      </Block>
      <Block className={stListing}>
        <Block className={stListingContent}>
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
