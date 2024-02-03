import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './Home';

import { RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import DashBoard from './DashBoard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={<Home />} />
      <Route
        path="/dashboard"
        element={
              <DashBoard />
          </>
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
