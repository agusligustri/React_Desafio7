import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import NavBar from "../components/NavBar";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import ItemListContainer from "../containers/ItemListContainer";

function RouterApp() {
  return (
    <Router>
        <div>
            <NavBar />
            <Switch>
                <Route path="/item/:id">
                    <ItemDetailContainer/>
                </Route>
                <Route path="/category/:section">
                    <ItemListContainer />
                </Route>
                <Route path="/">
                    <ItemListContainer />
                </Route>
            </Switch>
            <Redirect to="/" />
      </div>
    </Router>
  );
}

export default RouterApp;
