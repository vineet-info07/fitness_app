import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../features/auth/AuthPage";

export const router = createBrowserRouter([
  { path: "/", element: <AuthPage /> },
]);
