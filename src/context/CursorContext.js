import React, { createContext, useState } from 'react'

export const CursorContext = createContext()

const CursorContextProvider = props => {
  const [hoveredState, setHoveredState] = useState(false)

  return (
    <CursorContext.Provider value={{ hoveredState, setHoveredState }}>
      {props.children}
    </CursorContext.Provider>
  )
}

export default CursorContextProvider
