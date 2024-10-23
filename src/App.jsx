import { useRoutes } from "react-router-dom";
import "./App.css";

import { routesItem } from "./Routes";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("hello mother fucker", window.location.pathname);
    setInterval(() => {
      console.log("im in the app ha ha ha", window.location.pathname);
    }, 5000);
  }, []);
  let routes = useRoutes(routesItem);
  return routes;
}

export default App;
