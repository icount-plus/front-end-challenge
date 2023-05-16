import { RouterProvider } from "react-router-dom";
import router from "./routes";
import NavbarComponent from "./components/NavbarComponent";

function App() {
  return (
    <div>
      <NavbarComponent />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
