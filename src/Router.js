import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import ConfirmPage from "./pages/ConfirmPage";
import HomePage from "./pages/HomePage";
import React from "react";
import UserForm from "./pages/UserForm";

const PageRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/confirm">
          <ConfirmPage />
        </Route>
        <Route path="/add">
          <UserForm />
        </Route>
        <Route path="/*">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default PageRouter;
