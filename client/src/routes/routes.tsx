import type { RouteProps } from "react-router";

import { Login } from "../pages/login";
import { SignUp } from "../pages/sign-up";

export const ROUTES: RouteProps[] = [
  { path: "/login", element: <Login /> },
  { path: "/sign-up", element: <SignUp /> },
];
