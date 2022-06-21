/* eslint-disable prettier/prettier */
import { Flex, Heading } from "@chakra-ui/react";
import ColorModeToggle from "./ColorModeToggle";
import { FcCheckmark } from "react-icons/fc";

const Header = () => {
  return (
    <Flex justifyContent={"space-between"} marginTop={5}>
      <Heading marginRight={20} display={"flex"}>
        My tasks <FcCheckmark></FcCheckmark>
      </Heading>
      <ColorModeToggle></ColorModeToggle>
    </Flex>
  );
};

export default Header;
