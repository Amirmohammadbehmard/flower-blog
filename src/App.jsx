import { useRoutes } from "react-router-dom";
import "./App.css";

import { routesItem } from "./Routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    setInterval(() => {
      alert("im in the => ", window.location.pathname);
    }, 15000);
  }, []);
  let routes = useRoutes(routesItem);
  return routes;
}

export default App;
