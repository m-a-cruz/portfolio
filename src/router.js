import { createBrowserRouter } from 'react-router-dom';
import Notfound from './views/Notfound';
import App from './portfolio/App';
import Home from './portfolio/Home';
import About from './portfolio/About';
import Education from './portfolio/Education';
import Contact from './portfolio/Contact';
import Authentication from './views/Authentication';
import Dashboard from './views/Dashboard';
import Login from './views/Login';
import Positions from './views/crud/Positions';
import Candidates from './views/crud/Candidates';


const router = createBrowserRouter([
    // {
    //  path: '/login',
    //  element: <Login />   
    // },
    {
     path: '/portfolio',
     element: <App />,
     children: [
      {
       path: '/portfolio/home',
       element: <Home />
      },
      {
        path: '/portfolio/about',
        element: <About />
       },
       {
        path: '/portfolio/education',
        element: <Education />
       },
       {
        path: '/portfolio/contact',
        element: <Contact />
       },
     ]
    },
    {
     path: '/',
     element: <Authentication />,
     children: [
      {
        path: '/',
        element: <Login />
       },
      {
       path: '/login',
       element: <Login />
      },
      {
       path: '/dashboard',
       element: <Dashboard />,
       children: [
        {
          path: '/dashboard/positions',
          element: <Positions />
        },
        {
          path: '/dashboard/candidates',
          element: <Candidates />
        }
       ]
      }
     ]
    },
    {
     path: '*',
     element: <Notfound />
    }
])

export default router
