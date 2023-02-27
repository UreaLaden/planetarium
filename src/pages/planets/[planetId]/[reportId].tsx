import { PlanetContext, PlanetContextProps } from "@/utils/planet-context";
import { useRouter } from "next/router";
import * as React from "react";

export const Details = () => {
  const router = useRouter();
  const context = React.useContext<PlanetContextProps>(PlanetContext);
  console.log(router.query);
  const content = React.useMemo(() => {
    switch (router.query.reportId) {
      case "1":
        return context.currentPlanet?.overview.content;
      case "2":
        return context.currentPlanet?.structure.content;
      case "3":
        return context.currentPlanet?.geology.content;
    }
  }, [router.query.reportId]);
  return (
    <div>
      <div>{context.currentPlanet?.name} Details</div>
      <div>{content}</div>
    </div>
  );
};

export default Details;
