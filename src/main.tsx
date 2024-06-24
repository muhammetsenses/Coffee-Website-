
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './index.css'
import { Hakkımızda, Homepage, Iletisim, Menu, Root } from './pages';

const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    children: [
      {
        index:true,
        element: <Homepage />
      },
      {
        path: "/menu",
        element: <Menu />
      },
      {
        path: "/hakkımızda",
        element: <Hakkımızda />
      },
      {
        path: "/iletisim",
        element: <Iletisim />
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
