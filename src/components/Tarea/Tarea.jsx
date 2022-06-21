/* eslint-disable prettier/prettier */
import { useState } from "react";
import { Flex, Input, Text, Checkbox } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

const Tarea = ({ item, toggleCompleted, deleteItem, info, setTareas }) => {
  const [esVisibleInput, setEsVisibleInput] = useState(false);
  const [input, setInput] = useState(item.nota);

  const hadleClickCheck = (tarea) => {
    toggleCompleted(tarea);
  };

  const handleDeleteItem = (item) => {
    deleteItem(item);
  };

  const handlePress = (e) => {
    if (e.key === "Enter" && e.target.value) {
      setEsVisibleInput(false);
      setTareas(
        info.map((itemMap) => {
          if (item.id === itemMap.id) {
            return { ...itemMap, nota: input };
          }
          return itemMap;
        })
      );
    }
  };
  const handleOnChange = (e) => {
    setInput(e.target.value);
  };

  if (esVisibleInput) {
    return (
      <Input
        value={input}
        placeholder="Ingrese su tarea"
        _placeholder={{ color: "gray.500" }}
        type="text"
        onChange={handleOnChange}
        onKeyPress={handlePress}
      />
    );
  } else {
    return (<>
      <Flex
        justifyContent={"space-between"}
        marginTop={5}
        marginBottom={3}
        flexDirection="row"
        key={`lista ${item.id}`}
      >
        <Checkbox
          colorScheme="teal"
          defaultChecked={item.isCompleted}
          onChange={() => hadleClickCheck(item)}
        >
          {item.isCompleted ? (
            <Text as="del">{item.nota}</Text>
          ) : (
            <Text>{item.nota}</Text>
          )}
        </Checkbox>
        <Flex>
          <DeleteIcon
            color="red"
            mr={3}
            onClick={() => handleDeleteItem(item)}
          />
          <EditIcon
            color="blue.600"
            onClick={() => setEsVisibleInput(true)}
          ></EditIcon>
        </Flex>
      </Flex>
    <hr /></>
    );
  }
};

export default Tarea;
