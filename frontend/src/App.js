import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/home";
import Header from "./components/header";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const appLayout = (
    <div className="container">
      <Header />
      <Outlet />
      <ToastContainer />
    </div>
  );
  const router = createBrowserRouter([
    {
      path: "/",
      element: appLayout,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
