import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './Home';


import DashBoard from './DashBoard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={  <DashBoard />} />
      <Route
        path="/dashboard"
        element={
              <DashBoard />
         
        }
      />
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
