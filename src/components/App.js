import React, { Component } from "react";
import Main from "./Main";
import Profile from "./Profile";
import Fortune from "./Fortune";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import NotFound from "./Notfound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="/main" id="main-link">
          MAIN
        </Link>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/fortune/:name&:birthday" component={Fortune} />
          <Route path="*" component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
