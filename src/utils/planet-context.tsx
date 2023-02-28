import * as React from "react";
import { planetColors } from "./helpers";

export interface PlanetSpec {
  content: string;
  source: URL;
}

export interface PlanetImages {
  planet: string;
  internal: string;
  geology: string;
}

export interface Planet {
  name: string;
  overview: PlanetSpec;
  geology: PlanetSpec;
  radius: string;
  revolution: string;
  rotation: string;
  structure: PlanetSpec;
  temperature: string;
  images: PlanetImages;
  colorScheme?:string;
  index?:number;
}

export interface PlanetContextProps {
  planets: Planet[];
  currentPlanet?: Planet;
  populatePlanets: (rawPlanetData: Planet[]) => void;
  showPlanet:(planetToShow:Planet) => void;
}

export interface PlanetContextProviderProps {
  children?: React.ReactNode;
}

export const PlanetContext = React.createContext<PlanetContextProps>({
  planets: [],
  currentPlanet: undefined,
  populatePlanets: (rawPlanetData: Planet[]) => {},
  showPlanet:(planetToShow:Planet) => {}
});

export const PlanetContextProvider: React.FC<PlanetContextProviderProps> = (
  props: PlanetContextProviderProps
) => {
  const [allPlanets, setAllPlanets] = React.useState<Planet[]>([]);
  const [currentPlanet, setCurrentPlanet] = React.useState<Planet | undefined>(
    undefined
  );
  

  const setAllPlanetsHandler = (inputPlanets: Planet[]) => {
    const planetList = createPlanetList(inputPlanets);
    setAllPlanets(allPlanets => planetList);
    setCurrentPlanetHandler(planetList[0]);
  };

  const setCurrentPlanetHandler = (planetToShow:Planet) => {
    setCurrentPlanet(currentPlanet => planetToShow);
  }

  const generatePlanet = (planet: Planet,planetIndex:number): Planet => {
    let overviewSpec: PlanetSpec = {
      content: planet.overview.content,
      source: planet.overview.source,
    };
    let geologySpec: PlanetSpec = {
      content: planet.geology.content,
      source: planet.geology.source,
    };
    let structureSpec: PlanetSpec = {
      content: planet.structure.content,
      source: planet.structure.source,
    };
    let newPlanet: Planet = {
      name: planet.name,
      overview: overviewSpec,
      geology: geologySpec,
      radius: planet.radius,
      revolution: planet.revolution,
      rotation: planet.rotation,
      structure: structureSpec,
      temperature: planet.temperature,
      images: planet.images,
      colorScheme:planetColors.get(planet.name) ?? "",
      index:planetIndex
    };
    return newPlanet;
  };

  const createPlanetList = (rawPlanetData: Planet[]): Planet[] => {
    let planetArray: Planet[] = [];
    rawPlanetData.forEach((planet: Planet,index:number) => {
      let newPlanet: Planet = generatePlanet(planet,index);
      planetArray.push(newPlanet);
    });
    return planetArray;
  };

  const context = {
    planets: allPlanets,
    currentPlanet: currentPlanet,
    populatePlanets: setAllPlanetsHandler,
    showPlanet:setCurrentPlanetHandler
  };

  return (
    <PlanetContext.Provider value={context}>
      {props.children}
    </PlanetContext.Provider>
  );
};
