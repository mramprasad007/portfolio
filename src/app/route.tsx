import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from './'
import Home from '../pages/home'
const Router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  }
])
export default Router
