// Core Module...........
import React from "react";

// External Module..........
// Redux Strore Module Import ..................
import Store from "./Store/index.js";
import { Provider } from "react-redux";
// React-Router-Dom Module Import...............
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// Local Module...............
// App Module Import.................
import App from "./Routes/App.jsx";
// Icon pages import......................................
import ShoppingBag from "./Pages/ShoppingBag.jsx";
import Wallet from "./Pages/Wallet.jsx";
import Settings from "./Pages/Settings.jsx";
import Profile from "./Pages/Profile.jsx";

// Navigation Drawer Link import.........................
import Home from "./Pages/Home.jsx";
import Notifications from "./Pages/Notifications.jsx";
import Shopping from "./Pages/ShopHome.jsx";
import Game from "./Pages/Game.jsx";
import Job from "./Pages/Job.jsx";
import Education from "./Pages/Education.jsx";
import Exam from "./Pages/Exam.jsx";

import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

// Create a browser Router functions............
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/home", element: <Home /> },
      // Route on icon module....................
      { path: "/shoppingbag", element: <ShoppingBag /> },
      { path: "/wallet", element: <Wallet /> },
      { path: "/settings", element: <Settings /> },
      { path: "/profile", element: <Profile /> },
      // Route on NavigationDrawer Link Module...............
      { path: "/notifications", element: <Notifications /> },
      { path: "/shop", element: <Shopping /> },
      { path: "/game", element: <Game /> },
      { path: "/job", element: <Job /> },
      { path: "/education", element: <Education /> },
      { path: "/exam", element: <Exam /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
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
