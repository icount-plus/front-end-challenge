import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import RecipeDetailPage from "../pages/RecipeDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetailPage />,
  },
]);

export default router;
