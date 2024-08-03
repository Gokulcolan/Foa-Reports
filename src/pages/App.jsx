import { useRoutes } from "react-router-dom";
// import "../App.css";
import { getRoutes } from "../layout/Routes/index";

function App() {
  const router = useRoutes(getRoutes(0));
  return <header className="App-header">{router}</header>;
}

export default App;