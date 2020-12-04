import React from "react"
import { Button, Stack } from "@chakra-ui/react"

const Filter = () => {
  return (
    <Stack
      justify="center"
      mb="20px"
      spacing={4}
      direction="row"
      align="center"
    >
      <Button colorScheme="gray" size="sm">
        All
      </Button>
      <Button colorScheme="gray" size="sm">
        Outdoors
      </Button>
      <Button colorScheme="gray" size="sm">
        Animals
      </Button>
      <Button colorScheme="gray" size="sm">
        Other
      </Button>
    </Stack>
  )
}

export default Filter
