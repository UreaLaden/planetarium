import "@/styles/globals.css";
import { PlanetContextProvider } from "@/utils/planet-context";
import type { AppProps } from "next/app";
import {registerIcons} from "@fluentui/react";
import { SVGIcons } from "@/utils/helpers";
registerIcons(SVGIcons);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlanetContextProvider>
      <Component {...pageProps} />
    </PlanetContextProvider>
  );
}
