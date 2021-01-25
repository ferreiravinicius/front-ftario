import { Button, ButtonOverrides } from "baseui/button";
import * as React from "react";
import { FilterBody, FilterContainer, FilterFooter } from "./css";

export interface FilterProps {}

const Filter: React.FC<FilterProps> = () => { //TODO: implement context for filter
  return (
    <FilterContainer>
      <FilterBody>Filter Body</FilterBody>
      <FilterFooter>
        <Button
          overrides={overrides}
          onClick={() => alert("click")}
        >
          Aplly Filters
        </Button>
      </FilterFooter>
    </FilterContainer>
  );
};

const overrides: ButtonOverrides = {
  BaseButton: {
    style: {
      width: "100%",
    },
  },
};

export default Filter;
