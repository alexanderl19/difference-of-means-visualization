// TODO: This file/project is a mess. Please refactor, like tomorrow.

import type { NextPage } from "next";
import { useState } from "react";
import { Flex } from "components/core/Flex";
import NumberTextArea from "components/custom/NumberTextArea";
import Graph from "components/custom/Graph";
import { ErrorBoundary } from "react-error-boundary";
import { Box } from "components/core/Box";
import Info from "components/custom/Info";

const Home: NextPage = () => {
  const [control, setControl] = useState<number[]>([]);
  const [experimental, setExperimental] = useState<number[]>([]);
  const [randomGroupOne, setRandomGroupOne] = useState<number[]>([]);
  const [randomGroupTwo, setRandomGroupTwo] = useState<number[]>([]);
  const [averageDeltas, setAverageDeltas] = useState<number[]>([]);
  const [randomizeNumber, setRandomizeNumber] = useState<number>(1);

  const randomize = () => {
    // TODO: This function is probably less than stellar. Refactor.
    const tempAverageDeltas = [];
    for (let i = 0; i < randomizeNumber; i++) {
      const groupOne = control
        .concat(experimental)
        .sort(() => Math.random() - 0.5);
      const groupTwo = groupOne.splice(groupOne.length / 2);
      setRandomGroupOne(groupOne);
      setRandomGroupTwo(groupTwo);

      const groupOneSum = groupOne.reduce(
        (previous, current) => previous + current,
        0
      );
      const groupTwoSum = groupTwo.reduce(
        (previous, current) => previous + current,
        0
      );
      tempAverageDeltas.push(groupTwoSum - groupOneSum);
    }
    setAverageDeltas([...averageDeltas, ...tempAverageDeltas]);
  };

  return (
    <Flex direction="column" gap={2} as="main">
      <NumberTextArea
        name={"Control Group Data"}
        value={control}
        onChange={setControl}
      />
      <NumberTextArea
        name={"Experimental Group Data"}
        value={experimental}
        onChange={setExperimental}
      />
      <Flex
        direction="column"
        gap={2}
        css={{
          width: "100%",
          padding: "$2",
          borderRadius: "$2",
          borderWidth: 1,
          borderColor: "$sand7",
          borderStyle: "solid",
        }}
      >
        <Info
          name="Random Groups"
          tooltip="The control and experimental data is combined, then randomly split into two groups."
        />
        <Flex gap={2}>
          <button onClick={randomize}>Randomize</button>
          <input
            value={randomizeNumber}
            onChange={(e) => setRandomizeNumber(parseInt(e.target.value))}
          />
        </Flex>
        <Box
          css={{
            width: "100%",
            padding: "$2",
            borderRadius: "$2",
            borderWidth: 1,
            borderColor: "$sand7",
            borderStyle: "solid",
            backgroundColor: "$sand3",
            maxHeight: "$9",
            overflowY: "auto",
          }}
        >
          {randomGroupOne.join(", ")}
        </Box>
        <Box
          css={{
            width: "100%",
            padding: "$2",
            borderRadius: "$2",
            borderWidth: 1,
            borderColor: "$sand7",
            borderStyle: "solid",
            backgroundColor: "$sand3",
            maxHeight: "$9",
            overflowY: "auto",
          }}
        >
          {randomGroupTwo.join(", ")}
        </Box>
        <Box
          css={{
            width: "100%",
            padding: "$2",
            borderRadius: "$2",
            borderWidth: 1,
            borderColor: "$sand7",
            borderStyle: "solid",
            backgroundColor: "$sand3",
            maxHeight: "$9",
            overflowY: "auto",
          }}
        >
          {averageDeltas.join(", ")}
        </Box>
      </Flex>

      <ErrorBoundary fallback={<div>graph broke</div>}>
        <Graph data={averageDeltas} />
      </ErrorBoundary>
    </Flex>
  );
};

export default Home;
