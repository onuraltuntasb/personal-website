import ReactDOM from 'react-dom/client'
import { RouterProvider, createHashRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import './App.css'
import TopBar from '../components/TopBar';
import LandingPage from '../pages/LandingPage';
import CvPage from '../pages/CvPage';


const router = createHashRouter([
  {
    element: <TopBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/cv",
        element: <CvPage />,
      },

    ],


  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
