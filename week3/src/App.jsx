import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Mainpage from "./pages/Mainpage";
import RankingPage from "./pages/RankingPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/ranking",
    element: <RankingPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
