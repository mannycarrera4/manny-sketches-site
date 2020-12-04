/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react"

const FilterOnSelectContext = React.createContext((id: string) => {})
const FilterSelectedContext = React.createContext("")

export { FilterOnSelectContext, FilterSelectedContext }
