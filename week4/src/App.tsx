import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HobbyPage from "./pages/HobbyPage";
import Mypage from "./pages/Mypage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/hobby",
    element: <HobbyPage />,
  },
  {
    path: "/mypage",
    element: <Mypage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
