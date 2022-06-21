/* eslint-disable prettier/prettier */
import { useState } from "react";
import Header from "./components/Header/Header";
import InputBox from "./components/InputBox/InputBox";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Tarea from "./components/Tarea/Tarea";
import { Flex, useColorModeValue, Stack, Input } from "@chakra-ui/react";


const generateId = () => {
  let id = 0;
  return () => {
    id++;
    return id;
  };
};
const getId = generateId();

const App = () => {
  const [arrayTareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("todos");
  const [inputS, setInput] = useState("");

    const handleClickAll = (info) => {
      setFiltro("todos");
    };
  
  const handleChangeSearch = (event) => {
    setInput(event.target.value);
  }
  
    const handleClickComplete = (info) => {
      setFiltro("completos");
    };
    const handleClickIncomplete = (info) => {
      setFiltro("incompletos");
    };

  const addList = (nota) => {
    setTareas([...arrayTareas, { nota, isCompleted: false, id: getId() }]);
  };

  const toggleCompleted = (tarea) => {
    setTareas(
      arrayTareas.map((itemMap) => {
        if (itemMap.id === tarea.id) {
          const updateItemMp = {
            ...itemMap,
            isCompleted: !itemMap.isCompleted,
          };
          return updateItemMp;
        }
        return itemMap;
      })
    );
  };

  /* Elimina la tarea mediante un filter a arrayTareas, esta función se la pasaremos al
  botón de eliminar. 
  */
  const deleteItem = (item) => {
    setTareas(arrayTareas.filter((itemLista) => itemLista !== item));
  };

console.log(arrayTareas);
  
  return (
    <Flex
      minH={"100vh"}
      bg={useColorModeValue("gray.50", "gray.800")}
      justifyContent={"center"}
    >
      <Stack spacing={5} mx={"auto"} py={10} w={"380px"}>
        <Header></Header>

        <InputBox info={arrayTareas} addList={addList}></InputBox>

        <Input
          type="text"
          id="buscar"
          placeholder="Search your task 🔍"
          value={inputS}
          onChange={() => handleChangeSearch(event)}
        ></Input>

        <Stack
          w={"100%"}
          bg={useColorModeValue("white", "gray.700")}
          rounded={"xl"}
          boxShadow={"lg"}
          p={4}
          my={5}
        >
          <ButtonGroup
            info={arrayTareas}
            handleClickAll={handleClickAll}
            handleClickComplete={handleClickComplete}
            handleClickIncomplete={handleClickIncomplete}
          ></ButtonGroup>
          <Flex flexDirection="column" justifyContent={"space-between"}>
            {arrayTareas
              .filter((item) => {
                return (
                  (filtro === "todos" ||
                    (filtro === "completos" && item.isCompleted) ||
                    (filtro === "incompletos" && !item.isCompleted)) &&
                  item.nota.toLowerCase().includes(inputS.toLowerCase())
                );
              })
              .map((item) => {
                return (
                  <Tarea
                    setTareas={setTareas}
                    info={arrayTareas}
                    key={item.nota}
                    item={item}
                    toggleCompleted={toggleCompleted}
                    deleteItem={deleteItem}
                  ></Tarea>
                );
              })}
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
};

export default App;
