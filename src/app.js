import React, { useState } from "react";
import Home from "./component/Home";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AllInfo from "./component/allInfo";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/all-stats" component={AllInfo} exact></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
