import { useState, useEffect, Dispatch, SetStateAction } from "react";
import nextId from "react-id-generator";
import { Flex } from "components/core/Flex";
import TextArea from "components/core/TextArea";
import Info from "components/custom/Info";

interface Props {
  name: string;
  tooltip?: string;
  value: number[];
  onChange: Dispatch<SetStateAction<number[]>>;
  height?: "tall" | "short";
  readOnly?: boolean;
}

const NumberTextArea = ({
  name,
  tooltip,
  value: numbers,
  onChange,
  height,
  readOnly = false,
}: Props) => {
  const htmlId = nextId();
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    onChange(
      value
        .split(/[,;\s]+/)
        .map((item) => parseFloat(item))
        .filter((item) => !isNaN(item) && isFinite(item))
    );
  }, [value, onChange]);

  return (
    <Flex direction="column" gap={1}>
      <Info
        name={name}
        labelId={htmlId}
        statistic={`${numbers.length} Value${numbers.length === 1 ? "" : "s"}`}
        tooltip={
          tooltip ||
          (readOnly ? "" : "Comma, Semicolon, or Whitespace Delimited")
        }
      />
      <TextArea
        id={htmlId}
        name={name}
        height={height}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </Flex>
  );
};

export default NumberTextArea;
