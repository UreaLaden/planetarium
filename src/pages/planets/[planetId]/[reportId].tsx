import { DetailButtons } from "@/component/DetailButtons";
import Layout from "@/component/Layout";
import NavBar from "@/component/NavBar";
import { styles } from "@/styles/Details.css";
import { PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import * as React from "react";

export const Details = () => {
  const context = React.useContext<PlanetContextProps>(PlanetContext);
 
  return (
    <Layout/>
  );
};

export default Details;
