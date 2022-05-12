import { useRef, useEffect } from "react";
import useSize from "@react-hook/size";
import { Box } from "components/core/Box";
// @ts-ignore
import * as Plot from "@observablehq/plot";

interface Props {
  data: number[];
}

const Graph = ({ data }: Props) => {
  const graphEl = useRef(null);
  const [width] = useSize(graphEl);

  useEffect(() => {
    const chart = Plot.plot({
      width,
      y: {
        grid: true,
      },
      marks: [Plot.rectY(data, Plot.binX({ y: "count" })), Plot.ruleY([0])],
    });
    // @ts-ignore
    graphEl.current.append(chart);
    return () => chart.remove();
  }, [data, width]);

  return <Box ref={graphEl} />;
};

export default Graph;
