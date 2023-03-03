import { DetailButtons } from "@/component/DetailButtons";
import Layout from "@/component/Layout";
import NavBar from "@/component/NavBar";
import { styles } from "@/styles/Details.css";
import { PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import { useRouter } from "next/router";
import * as React from "react";

export const Details = () => {
  return (
    <Layout/>
  );
};

export default Details;
