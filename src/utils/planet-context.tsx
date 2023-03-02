import * as React from "react";
import { planetColors } from "./helpers";

export interface PlanetSpec {
  id:number;
  content: string;
  source: URL;
  image:string;
}

export interface PlanetImages {
  planet: string;
  internal: string;
  geology: string;
}

export interface PlanetStats {
  title: string;
  statistic: string;
}

export interface Planet {
  id:number;
  name: string;
  overview: PlanetSpec;
  geology: PlanetSpec;
  radius: string;
  revolution: string;
  rotation: string;
  structure: PlanetSpec;
  temperature: string;
  images: PlanetImages;
  colorScheme?: string;
  index?: number;
}

export interface PlanetContextProps {
  planets: Planet[];
  currentPlanet?: Planet;
  currentPlanetStats?: PlanetStats[];
  currentPlanetSpec?:PlanetSpec,
  populatePlanets: (rawPlanetData: Planet[]) => void;
  showPlanet: (planetToShow: Planet) => void;
  updatePlanetStats: (planet:Planet) => void;
  setCurrentSpec: (id:number) => void;
}

export interface PlanetContextProviderProps {
  children?: React.ReactNode;
}

export const PlanetContext = React.createContext<PlanetContextProps>({
  planets: [],
  currentPlanet: undefined,
  currentPlanetStats: [],
  currentPlanetSpec:undefined,
  populatePlanets: (rawPlanetData: Planet[]) => {},
  showPlanet: (planetToShow: Planet) => {},
  updatePlanetStats: (planet:Planet) => {},
  setCurrentSpec: (id:number) => {}
});

export const PlanetContextProvider: React.FC<PlanetContextProviderProps> = (
  props: PlanetContextProviderProps
) => {
  const [allPlanets, setAllPlanets] = React.useState<Planet[]>([]);
  const [currentPlanet, setCurrentPlanet] = React.useState<Planet | undefined>(
    undefined
  );
  const [stats, setStats] = React.useState<PlanetStats[]>([]);
  const [spec,setSpec] = React.useState<PlanetSpec | undefined>(undefined);

  const setSpecHandler = (id:number) =>{
    if(currentPlanet === undefined) return;
    const specs = [currentPlanet.overview,currentPlanet.geology,currentPlanet.structure];
    const currentSpec = specs.find(spec => spec.id === id);
    setSpec(currentSpec);
  }

  const setStatsHandler = (planet:Planet) => {
    if (!planet) return;
    let rotation: PlanetStats = {
      title: "ROTATION TIME",
      statistic: planet.rotation,
    };
    let revolution:PlanetStats = {
      title:"REVOLUTION TIME",
      statistic:planet.revolution
    }
    let radius:PlanetStats = {
      title:"RADIUS",
      statistic:planet.radius
    }
    let temp:PlanetStats = {
      title:"AVERAGE TEMP.",
      statistic:planet.temperature
    }
    setStats([rotation,revolution,radius,temp]);
    setSpecHandler(1);
  };

  const setAllPlanetsHandler = (inputPlanets: Planet[]) => {
    const planetList = createPlanetList(inputPlanets);
    setAllPlanets(allPlanets => planetList);
    setCurrentPlanetHandler(planetList[0]);
    setSpecHandler(1);
  };

  const setCurrentPlanetHandler = (planetToShow: Planet) => {
    setCurrentPlanet((currentPlanet) => planetToShow);
    setStatsHandler(planetToShow);
    setSpecHandler(1);
  };

  const generatePlanet = (planet: Planet, planetIndex: number): Planet => {
    let overviewSpec: PlanetSpec = {
      id:1,
      content: planet.overview.content,
      source: planet.overview.source,
      image:planet.images.planet,
    };
    let geologySpec: PlanetSpec = {
      id:2,
      content: planet.geology.content,
      source: planet.geology.source,
      image:planet.images.geology
    };
    let structureSpec: PlanetSpec = {
      id:3,
      content: planet.structure.content,
      source: planet.structure.source,
      image:planet.images.internal
    };
    let newPlanet: Planet = {
      id:planetIndex,
      name: planet.name,
      overview: overviewSpec,
      geology: geologySpec,
      radius: planet.radius,
      revolution: planet.revolution,
      rotation: planet.rotation,
      structure: structureSpec,
      temperature: planet.temperature,
      images: planet.images,
      colorScheme: planetColors.get(planet.name) ?? "",
    };
    console.table(newPlanet.images);
    return newPlanet;
  };

  const createPlanetList = (rawPlanetData: Planet[]): Planet[] => {
    let planetArray: Planet[] = [];
    rawPlanetData.forEach((planet: Planet, index: number) => {
      let newPlanet: Planet = generatePlanet(planet, index);
      planetArray.push(newPlanet);
    });
    return planetArray;
  };

  const context = {
    planets: allPlanets,
    currentPlanet: currentPlanet,
    currentPlanetStats:stats,
    currentPlanetSpec:spec,
    populatePlanets: setAllPlanetsHandler,
    showPlanet: setCurrentPlanetHandler,
    updatePlanetStats:setStatsHandler,
    setCurrentSpec:setSpecHandler
  };

  return (
    <PlanetContext.Provider value={context}>
      {props.children}
    </PlanetContext.Provider>
  );
};
