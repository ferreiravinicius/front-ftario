import { useStyletron } from "baseui";
import { Button, KIND, SHAPE, SIZE } from "baseui/button";
import { Cell, Grid } from "baseui/layout-grid";
import { Option, Select, TYPE, Value } from "baseui/select";
import { Label1, Paragraph1 } from "baseui/typography";
import Head from "next/head";
import * as React from "react";

const Outer: React.FunctionComponent<{}> = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.accent100,
        display: "block",
        margin: "0 auto",
        maxWidth: "60vw",
        "@media screen and (max-width: 768px)": {
          maxWidth: "100vw",
        },
      })}
    >
      {children}
    </div>
  );
};

const Inner: React.FunctionComponent<{}> = ({ children }) => {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.accent400,
        justifyContent: "flex-end!important",
      })}
    >
      {children}
    </div>
  );
};

export interface RegisterPlantProps {}

const options: Option[] = [
  { id: "1112", label: "Elodea" },
  { id: "1112", label: "Anubias" },
];

export interface Genus {
  id: number;
  name: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const RegisterPlant: React.FC<RegisterPlantProps> = () => {
  const [genusOption, setGenusOption] = React.useState<Value>([]);
  const [isCreating, setCreating] = React.useState<boolean>(false);

  const createGenus = async (value: Value) => {
    setCreating(true);
    console.log(value[0]?.label);
    await sleep(2000);
    setCreating(false);
  };

  return (
    <Outer>
      <Head>
        <title>Register Aquatic Plant</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid gridColumns={12}>
        <Cell span={12}>
          <Label1>Belongs to which genus?</Label1>
          <Paragraph1>
            First we need to know wich genus this plant belongs. A genus is a
            taxonomic rank used in the biological classification of living
            organisms.
          </Paragraph1>
        </Cell>

        <Cell span={12}>
          <Select
            creatable
            options={options}
            size={SIZE.compact}
            value={genusOption}
            placeholder="Select genus"
            type={TYPE.search}
            onChange={(params) => setGenusOption(params.value)}
            disabled={isCreating}
          />
        </Cell>

        <Cell span={1}>
          <Inner>
            <Button
              onClick={() => createGenus(genusOption)}
              kind={KIND.primary}
              size={SIZE.compact}
              shape={SHAPE.default}
              isLoading={isCreating}
            >
              {genusOption[0]?.isCreatable ? `Create` : `Next`}
            </Button>
          </Inner>
        </Cell>
      </Grid>
    </Outer>
  );
};

export default RegisterPlant;
