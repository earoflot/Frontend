import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./Routes/App.jsx";

import Home from "./Pages/Home.jsx";
import Notifications from "./Pages/Notifications.jsx";
import Apply from "./Pages/Apply.jsx";
import Post from "./Pages/Post.jsx";
import Placement from "./Pages/Placement.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Exam from "./Pages/Exam.jsx";
import Game from "./Pages/Game.jsx";

import { Provider } from "react-redux";
import Store from "./Store/index.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/home", element: <Home /> },
      { path: "/notifications", element: <Notifications /> },
      { path: "/apply", element: <Apply /> },
      { path: "/post", element: <Post /> },
      { path: "/placement", element: <Placement /> },
      { path: "/exam", element: <Exam /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/game", element: <Game /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
