import React from 'react'
import "./App.css"
import { NavBar } from './components/NavBar'
import { ExtensionCard } from './components/ExtensionCard'

export const App = () => {
  return (
    <>
      <NavBar/>
      <ExtensionCard/>
    </>
  )
}
