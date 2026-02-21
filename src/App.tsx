import { RouterProvider } from "react-router-dom";
import { router } from "./helpers/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
