import React, { useState } from "react"
import { Stack, Button, Heading, Center, Flex } from "@chakra-ui/react"

function Counter() {
  const [count, setCount] = useState(0)

  const plusButton = () => {
    setCount(count + 1)
  }

  const negativeButton = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <Center bg={"blackAlpha.900"} color={"white"} h={"1000px"}>
        <Stack direction={"row"} spacing={5} alignItems={"center"}>
          {/* <Flex> */}
          <Button colorScheme="red" size={"lg"} onClick={negativeButton}>
            -
          </Button>
          <Heading size={"4xl"}>{count}</Heading>
          <Button colorScheme="green" size={"lg"} onClick={plusButton}>
            +
          </Button>
          {/* </Flex> */}
        </Stack>
      </Center>
    </div>
  )
}

export default Counter
