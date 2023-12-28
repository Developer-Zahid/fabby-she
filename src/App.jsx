import React  from 'react'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes';
import './assets/scss/style.scss'

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
