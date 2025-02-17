import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Directory from './components/Directory'
import DragandDrop from './components/DragandDrop'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Directory />
  },
  {
    path: "/drag-and-drop",
    element: <DragandDrop />
  }
])

function App() {

  return <RouterProvider
  basename="https://anthonybronca.github.io/playground/"
  router={routes}/>
}

export default App
