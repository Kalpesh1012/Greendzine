import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Login from "./Components/Login";
import HomePage from "./Components/HomePage";
import EmployessDetails from "./Components/EmployessDetails";

function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Home",
      element: <HomePage />,
    },
    {
      path: "/Employee",
      element: <EmployessDetails />,
    },
  ]);
  return (
    <>
      <div>
        <RouterProvider router={appRoute} />
      </div>
    </>
  );
}

export default App;
