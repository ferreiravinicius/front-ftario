import { Block } from "baseui/block";
import { Button, KIND, SHAPE, SIZE } from "baseui/button";
import { Option, Select, TYPE, Value } from "baseui/select";
import * as React from "react";
import RegisterPlantContext from "../../contexts/register/showroom";
import GenusAPI, { GenusOutput } from "../../service/genus";

function first(arr: readonly any[]) {
  return arr[0] || null;
}

export interface GenusStepProps {
  nextStep: () => void;
}

//TODO: fill option when updating...
const GenusStep: React.FC<GenusStepProps> = ({ nextStep }) => {
  const [genusOption, setGenusOption] = React.useState<Value>([]);
  const [busy, setBusy] = React.useState<boolean>(false);
  const [options, setOptions] = React.useState<Option[]>([]);

  const { setFormGenus } = React.useContext(RegisterPlantContext);

  const handleClick = async (value: Value) => {
    setBusy(true);

    const selectedOption = first(value);

    console.log("Selected: ");
    console.log(selectedOption);

    let genus = {
      id: selectedOption?.id,
      name: selectedOption?.label,
    };

    if (selectedOption?.isCreatable) {
      const name = selectedOption.label;
      const { data, error } = await GenusAPI.registerGenus({ name });
      if (error) {
        console.log("Error at creating genus: ");
        setGenusOption([]);
        setBusy(false);
        return console.log(error);
      } else {
        console.log("Got data: ");
        console.log(data);
        genus = {
          id: data?.id,
          name: data?.name,
        };
      }
    }

    setFormGenus(genus);
    setBusy(false);
    nextStep();
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
      <Block display="flex">
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
          disabled={busy}
        />
      </Block>
      <Block display="flex" justifyContent="flex-end" marginTop="1em">
        <Button
          onClick={() => handleClick(genusOption)}
          kind={KIND.primary}
          size={SIZE.compact}
          shape={SHAPE.pill}
          isLoading={busy}
        >
          {genusOption[0]?.isCreatable ? `Create` : `Next`}
        </Button>
      </Block>
    </>
  );
};

export default GenusStep;
