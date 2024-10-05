import { useRoutes } from "react-router-dom";
import "./App.css";

import { routesItem } from "./Routes";

function App() {
  let routes = useRoutes(routesItem);
  return routes;
}

export default App;
