import './App.css';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Login from './Components/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CityRides from './Components/Service/CityRides';
import HireAVehicle from './Components/Service/HireAVehicle';
import BookTransportationVehicle from './Components/Service/BookTransportationVehicle';
import Company from './Components/About/Company';
import Blog from './Components/About/Blog';
import Help from './Components/Help';

function App() {

  const hRouter = createBrowserRouter([
    {
      path: '/',
      element: <><Layout /></>,
      children: [
        {
          index: true,
          element:<Home />
        },
        {
          path: '/Login',
          element: <><Login /></>
        },
        {
          path: '/CityRides',
          element: <><CityRides /></>
        },
        {
          path: '/HireAVehicle',
          element: <><HireAVehicle /></>
        },
        {
          path: '/BookTransportationVehicle',
          element: <>< BookTransportationVehicle /></>
        },
        {
          path: '/Company',
          element: <><Company /></>
        },
        {
          path: '/Blog',
          element: <><Blog /></>
        },
        {
          path: '/Help',
          element: <><Help /></>
        }

      ]
    }

  ])

  return (
    <>
      <RouterProvider router={hRouter} />

    </>
  )
}

export default App