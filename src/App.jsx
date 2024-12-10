import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import Home from "./Components/Home/Home";
import Vehicles from "./Components/Vehicles/Vehicles";

function App() {
  const routes = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "all-vehicles", element: <Vehicles /> },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
