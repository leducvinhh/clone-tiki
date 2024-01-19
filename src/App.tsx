import Header from "./components/Header";
import { useRoutes } from "react-router-dom";
import routes from "./router/router";

function App() {
  const element = useRoutes(routes)

  return (
    <div>
      <Header />
      {element}
    </div>
  );
}

export default App;
