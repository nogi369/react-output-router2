import { createBrowserRouter } from "react-router-dom";
import { NAVIGATION_LIST } from "../constants/navigations";
import { TodoPage } from "../components/Pages/todo";

export const router = createBrowserRouter([
  { path: NAVIGATION_LIST.TOP, element: <TodoPage /> },
]);
