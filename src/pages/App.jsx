import { useRoutes } from "react-router-dom";
import { getRoutes } from "../layout/routes";
// import "../App.css";

function App() {
  const userRole =
    typeof window !== "undefined" ? sessionStorage.getItem("ur") : null;
  const routeType = userRole !== null ? userRole : 0;
  const router = useRoutes(getRoutes(routeType));
  return <header className="App-header">{router}</header>;
}

export default App;
