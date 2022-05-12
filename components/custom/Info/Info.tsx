import { Flex } from "components/core/Flex";
import { Label } from "components/core/Label";
import { Text } from "components/core/Text";

interface Props {
  name: string;
  tooltip: string;
  statistic?: string;
  labelId?: string;
}

const Info = ({ name, tooltip, labelId, statistic }: Props) => {
  return (
    <Flex justify="between">
      <Flex justify="between" gap={3}>
        <Label htmlFor={labelId}>{name}</Label>
        <Text variant="gray">{tooltip}</Text>
      </Flex>
      <Text>{statistic}</Text>
    </Flex>
  );
};

export default Info;
