import React from 'react'
import { RouterProvider } from "react-router-dom";
import { router } from './Routes';
import './assets/css/main.scss'

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
