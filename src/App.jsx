import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import First from "./components/First";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/AboutUs";
import SignUp from "./pages/SignUp";
import Login from "./pages/LogIn";
import Wedquestionair from "./components/wedquestionair";
import Corpquestionair from "./components/Corpquestionair";

const App = () => {
  const routers = createBrowserRouter([
    {
      path: "home",
      element: <First />,
      children: [
        { path: "services", element: <Services /> },
        { path: "contact", element: <Contact /> },
        { path: "about-us", element: <About /> },
        { path: "blog", element: <h1>Blog</h1> },
      ],
    },
    { path: "", element: <Home /> },
    { path: "signup", element: <SignUp /> },
    { path: "login", element: <Login /> },
    { path: "wedquestionair", element: <Wedquestionair /> },
    { path: "corpquestionair", element: <Corpquestionair /> },
  ]);
  return (
    <>
      <main className="container">
        <RouterProvider router={routers} />
      </main>
    </>
  );
};

export default App;
