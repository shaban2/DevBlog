import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import redirectLoggedIn from "../wrappers/redirectLogin";
import { DetailPage } from "./details";
import { Home } from "./home";
import { Login } from "./login";
import { NewBlog } from "./new-blog";
import { NewCategory } from "./new-category";
import { SignUp } from "./signup";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={redirectLoggedIn(SignUp)} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/category/new" component={NewCategory} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/sheet/new" component={NewBlog} />
      <Route exact path="/:userId/sheet/:sheetTitle" component={DetailPage} />
    </Switch>
    </BrowserRouter>
  );
};
