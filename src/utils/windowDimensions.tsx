import * as React from "react";

export interface WindowSpec {
  width: number;
  height: number;
}

export const useWindowSize = (): WindowSpec => {
  const [windowSize, setWindowSize] = React.useState<WindowSpec>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  React.useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};
