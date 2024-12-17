import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Signin from "../pages/SignIn/Signin";
import JobDetails from "../pages/jobDetails/JobDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "jobs/:id",
        element: (
          <PrivateRoute>
            {" "}
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "login",
        element: <Signin />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
