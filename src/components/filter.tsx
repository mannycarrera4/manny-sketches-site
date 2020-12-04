/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"
import { Button, Stack } from "@chakra-ui/react"
import { FilterOnSelectContext, FilterSelectedContext } from "./filterContext"

interface FilterItemProps {
  id: string
  label?: string
  children?: React.ReactNode
}

interface FilterProps {
  onSelect: (id: string) => void
  selected: string
}

const FilterItem = ({ id, children, label }: FilterItemProps) => {
  const onSelect = React.useContext(FilterOnSelectContext)
  const selected = React.useContext(FilterSelectedContext)
  return (
    <Button
      variant={selected === id ? "solid" : "ghost"}
      onClick={() => onSelect(id)}
    >
      {children ? children : label}
    </Button>
  )
}

const GroupFilterItems = () => {
  return (
    <>
      <FilterItem id="all" label="All" />
      <FilterItem id="outdoors" label="Outdoors" />
      <FilterItem id="animals" label="Animals" />
    </>
  )
}

const Filter = ({ onSelect, selected }: FilterProps) => {
  return (
    <FilterOnSelectContext.Provider value={onSelect}>
      <FilterSelectedContext.Provider value={selected}>
        <Stack
          justify="center"
          mb="20px"
          spacing={4}
          direction="row"
          align="center"
        >
          <GroupFilterItems />
        </Stack>
      </FilterSelectedContext.Provider>
    </FilterOnSelectContext.Provider>
  )
}

export default Filter
