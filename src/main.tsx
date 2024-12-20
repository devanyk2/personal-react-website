import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Root from "./routes/root.tsx";
import ErrorPage from "./errorPage.tsx";
import About from "./routes/about.tsx"
import Resume from "./routes/resume.tsx"
import Projects, {loader as ProjectLoader} from "./routes/projects.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "projects/:project_id?",
        element: <Projects />,
        loader: ProjectLoader,
      },
    ],
  },
]);

const rootElement: HTMLElement = document.getElementById('root')!;
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);