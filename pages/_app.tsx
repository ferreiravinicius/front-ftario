import { BaseProvider, LightTheme, LocaleProvider } from "baseui";
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

function MyApp({ Component, pageProps }) {
  return (
    <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
      <BaseProvider theme={LightTheme}>
        <LocaleProvider locale={locale}>
          <Component {...pageProps} />
        </LocaleProvider>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default MyApp;
