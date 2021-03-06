import { BaseProvider, createDarkTheme, createLightTheme, DarkTheme, LightTheme, LocaleProvider } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { debug, styletron } from "../styletron";

const localePortuguese = {
  "select": {
    "noResultsMsg": "Nenhum resultado encontrado",
    "placeholder": "Select...",
    "create": "Criar"
  },
};

const locale = {}

const primitives = {
  primaryFontFamily: 'Rubik, Roboto, sans-serif',
}

// const theme = createDarkTheme(primitives, { name: `dark` });
const theme = createLightTheme(primitives, { name: `light` });

function MyApp({ Component, pageProps } : { Component: any, pageProps: any }) {
  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <BaseProvider theme={theme}>
        <LocaleProvider locale={locale}>
          <Component {...pageProps} />
        </LocaleProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
