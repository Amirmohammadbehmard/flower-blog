import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Panel from "./pages/panel/Panel";
import Selection from "./pages/selection/Selection";
import Article from "./pages/arrticle/Article";
import Setting from "./pages/Setting";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import AboutMore from "./pages/aboutmore/AboutMore";
import { Navigate } from "react-router-dom";
export let routesItem = [
  { path: "/", element: <Home /> },
  { path: "/about/*", element: <About />},

  {
    path: "/article/*",
    element: <Article />,
    children: [
      {
        path: "health",
        element: <h2>random text about flowers and health</h2>,
      },
      {
        path: "plants",
        element: <h2> random text flowers and plant</h2>,
      },
      {
        path: "water",
        element: <h2>random text flowers and water</h2>,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/panel", element: <PrivateRoute><Panel /></PrivateRoute> },
  { path: "/selection/:id", element: <Selection /> },
  { path: "/setting", element: <PrivateRoute><Setting /></PrivateRoute> },
  { path: "/aboutmore", element: <AboutMore /> },
  { path:"*" ,element:<Navigate to="/" />  }
  
];
