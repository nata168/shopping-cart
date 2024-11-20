import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Store } from './component/Store'
import { ErrorPage } from './component/ErrorPage'
import { Home } from './component/Home'
import { About } from './component/About'
import { Cart } from './component/Cart'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {path: "home", element: <Home />},
      {path: "about", element: <About />},
      {path: "cart", element: <Cart />},
    ],
  },
  {
    path: "/store",
    element: <Store />,
  },
  {
    path: "/store/:nameParam",
    element: <Store />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
