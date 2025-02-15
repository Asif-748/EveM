import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import About from "../Pages/About/About";
import CreateEvent from "../Pages/Create Event/CreateEvent";
import Contact from "../Pages/Contact/Contact";

let router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout></MainLayout>,
    children:[
      {
        path:"/",
        element:<Homepage></Homepage>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/createevent",
        element:<CreateEvent></CreateEvent>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
    ],
  },
]);
export default router;