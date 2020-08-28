import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import Error from "./components/error/Error";
import Jeopardy from "./components/jeopardy/Jeopardy";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Gretchen" />}
        />
        <Route
          exact
          path="/Welcome/:name"
          render={(props) => (
            <Welcome {...props} name={props.match.params.name} />
          )}
        />
        <Route path="/jeopardy" component={Jeopardy} />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
