import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import './App.css'
import TopBar from '../components/TopBar';
import LandingPage from '../pages/LandingPage';
import CvPage from '../pages/CvPage';

const router = createBrowserRouter([
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
      }
    ],


  },

], { basename: import.meta.env.BASE_URL });


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
