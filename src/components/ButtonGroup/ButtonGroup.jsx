/* eslint-disable prettier/prettier */
/* eslint-disable spaced-comment */
import { Button, Flex } from "@chakra-ui/react";

const ButtonGroup = ({
  info,
  handleClickAll,
  handleClickComplete,
  handleClickIncomplete,
}) => {
  return (
    <Flex flexDirection="row" justifyContent={"space-between"}>
      <Button
        onClick={() => handleClickAll(info)}
        colorScheme="teal"
        variant="outline"
      >
        All
      </Button>
      <Button
        onClick={() => handleClickComplete(info)}
        colorScheme="teal"
        variant="outline"
      >
        Complete
      </Button>
      <Button
        onClick={() => handleClickIncomplete(info)}
        colorScheme="teal"
        variant="outline"
      >
        Incomplete
      </Button>
    </Flex>
  );
};
export default ButtonGroup;

