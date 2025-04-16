import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AllResultsPage from "./pages/AllResultsPage";
import ChoicesPage from "./pages/ChoicesPage";
import SingleResultPage from "./pages/SingleResultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/all-results",
    element: <AllResultsPage />,
  },
  {
    path: "/choice",
    element: <ChoicesPage />,
  },
  {
    path: "/single-result",
    element: <SingleResultPage />,
  },
]);

export default router;