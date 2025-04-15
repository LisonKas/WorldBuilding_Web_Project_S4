import { createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AllResultsPage from "./components/AllResultsPage";
import ChoicePage from "./components/ChoicePage";
import SingleResultPage from "./components/SingleResultPage";

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
    element: <ChoicePage />,
  },
  {
    path: "/single-result",
    element: <SingleResultPage />,
  },
]);

export default router;