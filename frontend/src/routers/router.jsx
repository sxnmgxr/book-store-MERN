import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import { Children } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/order',
        element: <div>OrderPage</div>,
      },
      {
        path: '/about',
        element: <div>AboutPage</div>,
      },
    ],
  },
]);

export default router;
