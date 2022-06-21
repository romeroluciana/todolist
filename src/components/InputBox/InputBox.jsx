/* eslint-disable spaced-comment */
/* eslint-disable prettier/prettier */

import {
  Button,
  FormControl,
  Input,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";


import { useState } from "react";

const InputBox = ({ addList }) => {
  const [nota, setNota] = useState(window.localStorage.getItem("nota"));

  const [input, setInput] = useState();






  /*esto va en app*/ 
  const setLocalStorage = value => {
    setNota(value)
    window.localStorage.setItem("nota", value)
  }

  const handleOnChange = (event) => {
    setNota(event.target.value);
    setInput(event.target.value);
    setLocalStorage(event.target.value)
  };

  const handleOnClick = () => {
    if (nota) addList(nota);
    setInput("");
  };

  


  return (
    <Stack
      w={"100%"}
      bg={useColorModeValue("white", "gray.700")}
      rounded={"xl"}
      boxShadow={"lg"}
      p={8}
      my={5}
    >
      <FormControl id="text">
        <Input
          name={"task"}
          onChange={handleOnChange}
          placeholder="Type your task..."
          _placeholder={{ color: "gray.500" }}
          type="text"
          value={input}
        />
      </FormControl>
      <Button
        type="button"
        onClick={handleOnClick}
        fontFamily={"heading"}
        w="30%"
        size="sm"
        // maxW="400px"
        colorScheme="teal"
      >
        Save
      </Button>
    </Stack>
  );
};
export default InputBox;
