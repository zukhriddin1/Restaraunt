import React from "react";
import MainLayout from "./components/MainLayout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import generateCalendar from "antd/es/calendar/generateCalendar";
import Genrel from "./pages/Genrel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "restaurant/general",
        element: <Genrel></Genrel>,
      },
      {
        path: "restaurant/menu",
        element: <div>menu info</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <div>Login</div>,
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
