import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Children } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,

    children: [
      {
        path: '/',
        element: <h2> HomePage</h2>,
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
