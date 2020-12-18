import { Block } from "baseui/block";
import { Button, KIND, SHAPE, SIZE } from "baseui/button";
import { Option, Select, TYPE, Value } from "baseui/select";
import * as React from "react";
import GenusAPI from "../../service/genus";

function first(arr: readonly any[]) {
  return arr[0] || null;
}

const RegisterPlant: React.FC = () => {
  const [genusOption, setGenusOption] = React.useState<Value>([]);
  const [isCreating, setCreating] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<Option[]>([]);

  const createGenus = async (value: Value) => {
    setCreating(true);
    const selected = first(value);
    if (selected?.isCreatable) {
      const name = selected.label;
      const { error } = await GenusAPI.registerGenus({ name });
      if (error) {
        console.log("Error at creating genus: ");
        console.log(error);
      }
    }
    setCreating(false);
  };

  const filterGenus = async (text: string) => {
    const { data, error } = await GenusAPI.filterGenusByName(text);
    if (error) {
      console.log("Error at filtering genus: ");
      return console.log(error);
    }

    if (data) {
      const allOptions: Option[] = data.map((each) => ({
        id: each?.id,
        label: each?.name,
      }));
      setOptions(allOptions);
    }
  };

  return (
    <>
      <Block>
        <Select
          creatable
          options={options}
          size={SIZE.compact}
          value={genusOption}
          placeholder="Select genus"
          type={TYPE.search}
          onInputChange={({ currentTarget }) =>
            filterGenus(currentTarget.value)
          }
          noResultsMsg="Type to filter or create."
          onChange={(params) => setGenusOption(params.value)}
          disabled={isCreating}
        />
      </Block>
      <Block>
        <Button
          onClick={() => createGenus(genusOption)}
          kind={KIND.primary}
          size={SIZE.compact}
          shape={SHAPE.pill}
          isLoading={isCreating}
        >
          {genusOption[0]?.isCreatable ? `Create` : `Next`}
        </Button>
      </Block>
    </>
  );
};

export default RegisterPlant;
