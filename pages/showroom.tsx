import { useStyletron } from "baseui";
import { Block } from "baseui/block";
import { Button, SHAPE, SIZE } from "baseui/button";
import { Checkbox } from "baseui/checkbox";
import { Input } from "baseui/input";
import { Select } from "baseui/select";
import { Slider } from "baseui/slider";
import { LabelMedium } from "baseui/typography";
import * as React from "react";
import Card from "../components/card/card";
import Page from "../components/common/page";
import { SIZES } from "../utils/constants";
import { IoOptionsOutline } from "react-icons/io5";

export interface ShowroomProps {}

const Showroom: React.FC<ShowroomProps> = () => {
  const [css, theme] = useStyletron();

  const [isFilterOpen, setFilterOpen] = React.useState(false);

  const currentBorder = theme.borders.border200;
  const border = `${currentBorder.borderWidth} ${currentBorder.borderStyle} ${currentBorder.borderColor}`;

  const [value, setValue] = React.useState([0, 14]);
  const [selectValue, setSelectValue] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  const stTemplate = css({
    //do not add paddings/margins
    backgroundColor: `lightcyan`,
    color: theme.colors.contentPrimary,

    [theme.mediaQuery.medium]: {
      display: `block`,
      position: `relative`,
      width: `100%`,
      height: `100%`,
    },
  });

  const stTemplateDrawer = css({
    //do not add paddings/margins
    // backgroundColor: `lightsalmon`,

    zIndex: 4,
    display: isFilterOpen ? `visible` : `none`,
    position: `absolute`,
    top: SIZES.navbar.height,
    overflowY: "auto",
    width: SIZES.drawer.width.small,
    height: `calc(100vh - ${SIZES.navbar.height} - ${SIZES.drawerBottomBar.height})`,
    backgroundColor: theme.colors.background,

    [theme.mediaQuery.medium]: {
      position: `fixed`,
      overflowY: "auto",
      display: `block`,
      top: SIZES.navbar.height,
      width: SIZES.drawer.width.medium,
      height: `calc(100vh - ${SIZES.navbar.height} - ${SIZES.drawerBottomBar.height})`,
      borderRight: border,
    },
    [theme.mediaQuery.large]: {
      width: SIZES.drawer.width.large,
    }
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
    }
  });

  const stMainInner = css({
    display: `flex`,
    flexDirection: `column`,
    padding: theme.sizing.scale600, //@main padding
  });

  const stDrawerInner = css({
    padding: theme.sizing.scale600, //@main padding
  });

  const stMainGrid = css({
    display: `grid`,
    gridTemplateColumns: `1fr 1fr`,
    gridGap: theme.sizing.scale200,
  });

  const stMainNavbar = css({
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-end`,
    marginBottom: theme.sizing.scale600, //@main padding
    alignItems: `center`,
    border: border,
    borderRadius: theme.borders.radius200,
    overflow: `hidden`,

    [theme.mediaQuery.medium]: {
      display: `none`,
      visibility: `hidden`,
    },
  });

  const stMainNavbarFilter = css({
    [theme.mediaQuery.medium]: {
      display: `none`,
      visibility: `hidden`,
    },
  });

  const stLink = css({
    fontSize: theme.typography.LabelXSmall.fontSize,
    color: theme.colors.contentPrimary,
    textTransform: `uppercase`,
  });

  const stDrawerBottomInner = css({
    width: `100%`,
    paddingRight: theme.sizing.scale600,
    paddingLeft: theme.sizing.scale600,
  });

  const stTemplateDrawerBottom = css({
    position: `fixed`,
    zIndex: 5,
    display: `flex`,
    flexDirection: `row`,
    bottom: 0,
    background: theme.colors.background,
    borderTop: border,
    width: `100%`,
    alignItems: `center`,
    height: SIZES.drawerBottomBar.height,

    [theme.mediaQuery.medium]: {
      width: SIZES.drawer.width.medium,
      borderRight: border,
    },
    [theme.mediaQuery.large]: {
      width: SIZES.drawer.width.large,
    },
  });

  return (
    <Page>
      <Block className={stTemplate}>
        <Block className={stTemplateDrawer}>
          <Block className={stTemplateDrawerBottom}>
            <Block className={stDrawerBottomInner}>
              <Button
                // shape={SHAPE}
                overrides={{
                  BaseButton: {
                    style: {
                      borderRadius: theme.borders.radius200,
                      width: "100%",
                    },
                  },
                }}
                onClick={() => alert("click")}
              >
                Aplly Filters
              </Button>
            </Block>
          </Block>

          <Block className={stDrawerInner}>
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

            {/* <Block className={stDrawButton}>
            <Button
              shape={SHAPE.pill}
              overrides={{
                BaseButton: {
                  style: {
                    width: "100%",
                    marginTop: theme.sizing.scale800,
                  },
                },
              }}
              onClick={() => alert("click")}
            >
              Aplly Filters
            </Button>
            </Block> */}
          </Block>
        </Block>
        <Block className={stTemplateMain}>
          <Block className={stMainInner}>
            <Block className={stMainNavbar}>
              <Block className={stMainNavbarFilter}>
                <Button
                  onClick={() => setFilterOpen((actual) => !actual)}
                  endEnhancer={
                    <IoOptionsOutline color={theme.colors.contentSecondary} />
                  }
                  kind="minimal"
                >
                  <Block className={stLink}>Filter</Block>
                </Button>
              </Block>
            </Block>
            <Block className={stMainGrid}>
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
        </Block>
      </Block>

      {/* <Block className={stBlank}>
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
                  marginTop: theme.sizing.scale800,
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
      </Block> */}
    </Page>
  );
};

export default Showroom;
