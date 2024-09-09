import { useRoutes } from "react-router-dom";
import { getRoutes } from "../layout/routes";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const userRole =
    typeof window !== "undefined" ? sessionStorage.getItem("ur") : null;
  const routeType = userRole !== null ? userRole : 0;

  // Fetch the routes based on the role
  const router = useRoutes(getRoutes(routeType));

  // Simulate data loading
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Assume data loading takes 3 seconds
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loader type="spin" color="#00f" /> // You can change type and color as needed
      ) : (
        <div>{router}</div> // Replace this with the actual content you want to display after loading
      )}
    </div>
  );
}

export default App;
