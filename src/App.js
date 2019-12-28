import React from "react";
import { Route, Switch } from "react-router";

import Header from "./pages/Header";
import PageNotFound from "./pages/PageNotFound";

import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import UsersPage from "./pages/users/UsersPage";
import ManageUserPage from "./pages/users/ManageUserPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/users" component={UsersPage} />
        <Route exact path='/users/add' component={ManageUserPage} />
        <Route path='/users/:id' component={ManageUserPage} />        
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
