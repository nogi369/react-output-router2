import { createBrowserRouter } from "react-router-dom";
import { NAVIGATION_LIST } from "../constants/navigations";
import { TodoPage } from "../components/Pages/todo";
import { CreatePage } from "../components/Pages/create";
import { DetailPage } from "../components/Pages/detail";
import { EditPage } from "../components/Pages/edit";

export const router = createBrowserRouter([
  { path: NAVIGATION_LIST.TOP, element: <TodoPage /> },
  { path: NAVIGATION_LIST.DETAIL, element: <DetailPage /> },
  { path: NAVIGATION_LIST.CREATE, element: <CreatePage /> },
  { path: NAVIGATION_LIST.EDIT, element: <EditPage /> },
]);
