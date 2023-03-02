import "@/styles/globals.css";
import { SVGIcons } from "@/utils/helpers";
import { PlanetContextProvider } from "@/utils/planet-context";
import { initializeIcons } from "@fluentui/font-icons-mdl2";
import { registerIcons } from "@fluentui/style-utilities";
import type { AppProps } from "next/app";

registerIcons(SVGIcons);
// initializeIcons();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlanetContextProvider>
      <Component {...pageProps} />
    </PlanetContextProvider>
  );
}
