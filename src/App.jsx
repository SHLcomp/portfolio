import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Error from './components/pages/error/Error';

const router = createBrowserRouter([
  {
    path: '/portfolio',
    element: <Home />,
    errorElement: <Error />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
