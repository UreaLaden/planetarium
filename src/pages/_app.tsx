import "@/styles/globals.css";
import { PlanetContextProvider } from "@/utils/planet-context";
import type { AppProps } from "next/app";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlanetContextProvider>
      <Component {...pageProps} />
    </PlanetContextProvider>
  );
}
