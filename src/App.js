import React from "react";
import axios from "axios";
import { SideBar } from "./components/sidebar";
import { Home } from "./pages/home";
import { DetailPage } from "./pages/details";
import { NewBlog } from "./pages/new-blog";
import { NewCategory } from "./pages/new-category";
import { SignUp } from "./pages/signup";
import { Login } from "./pages/login";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./pages/routes";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {

  return (
    <>
      {/* <Home /> */}
      {/* <DetailPage /> */}
      {/* <NewBlog /> */}
      {/* <NewCategory /> */}
      {/* <SignUp /> */}
      {/* <Login /> */}
      <AppRoutes />
    </>
  );
}

export default App;
