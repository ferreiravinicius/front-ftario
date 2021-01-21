import { Theme } from "baseui/theme";
import { StyleObject } from "styletron-react";

export const scrollbar = (theme: Theme): StyleObject => ({
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

export default {};
