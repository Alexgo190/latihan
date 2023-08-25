import "./App.css"
import {
  Heading,
  Center,
  Checkbox,
  Text,
  List,
  ListItem,
  Container,
  IconButton,
  Button,
  Input,
} from "@chakra-ui/react"

import { DeleteIcon } from "@chakra-ui/icons"
import { useState, useRef } from "react"
import React from "react"

function App() {
  const [todos, setTodos] = useState([
    "Create Guest Experience mobile check-in",
    "Document current CI/CD process",
    "Perform Code Review for final Pillow-Talk release",
    "Implement new Color Palette from Design Team",
    "Fix image uploading process for guest check-in",
    "Provide on-boarding documentation",
  ])

  const [todo, setTodo] = useState("")

  const removeTodo = (value) => {
    setTodos((todos) => {
      return todos.filter((todo) => todo != value)
    })
  }

  const [count, setCount] = useState(0)

  const checkbox = useRef(null)

  const handleClick = () => {
    if (checkbox.current.checked) {
      setCount(count + 1)
    } else if (!checkbox.current.checked) {
      setCount(count - 1)
    }
  }

  return (
    <>
      <Center padding={3}>
        <Heading as="h1" size="xl" noOfLines={2}>
          Chores ToDo List
        </Heading>
      </Center>
      <Container>
        <List>
          {todos.map((item) => (
            <ListItem marginBottom={4}>
              <div className="flex" key={item}>
                <Checkbox
                  ref={checkbox}
                  size="md"
                  borderColor="green.500"
                  marginRight={20}
                  onChange={handleClick}
                ></Checkbox>
                <Text width={"80"} paddingRight={10}>
                  {item}
                </Text>
                <IconButton
                  textAlign={"right"}
                  colorScheme="red"
                  variant={"outline"}
                  icon={<DeleteIcon />}
                  onClick={() => {
                    removeTodo(item)
                  }}
                ></IconButton>
              </div>
            </ListItem>
          ))}
        </List>
      </Container>
      <hr width="100%" />
      <Container>
        <Heading
          as="h5"
          textAlign={"center"}
          fontSize={"3xl"}
          marginBottom={"5"}
        >
          Done : {count}
        </Heading>
        <Text>Add Todo</Text>
        <br />
        <Input
          placeholder="Add Task"
          width="100%"
          variant={"outline"}
          marginBottom={5}
          onChange={(e) => {
            setTodo(e.target.value)
          }}
          value={todo}
        ></Input>
        <br />
        <Button
          colorScheme="blue"
          marginBottom={5}
          onClick={() => {
            const newArray = [...todos, todo]
            setTodos(newArray)
            setTodo("")
          }}
        >
          ADD TASK
        </Button>
      </Container>
    </>
  )
}

export default App
