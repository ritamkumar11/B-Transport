import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Login from './Components/Login';
import Contacts from './Components/Contacts';
import About from './Components/About';
import Services from './Components/Services';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
function App() {

  const navRouter = createBrowserRouter([
    {
      path: '/',
      element: <><Layout /></>,
      children: [
        {
          index: true,
          element:<Home />
        },
        {
          path: '/Services',
          element: <><Services /></>
        },
        {
          path: '/About',
          element: <><About /></>
        },
        {
          path: '/Contacts',
          element: <><Contacts /></>
        },
        {
          path: '/Login',
          element: <><Login /></>
        }
      ]
    }

  ])

  return (
    <>
      <RouterProvider router={navRouter} />

    </>
  )
}

export default App