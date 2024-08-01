import { useRoutes } from "react-router-dom";
import "../styles/App.css";
import LazyLoader from "../components/Loader/lazyLoader";
import { getRoutes } from "../layout/routes";

function App() {
  const routeType = 0;
  const router = useRoutes(getRoutes(routeType));

  return (
    <>
      <LazyLoader>{router}</LazyLoader>
    </>
  );
}

export default App;
