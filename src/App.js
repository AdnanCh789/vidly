import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Customers from "./components/customers";
import Rental from "./components/rental";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import MovieForm from "./components/movieForm";
import "./App.css";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rental" component={Rental}></Route>
            <Route path="/notFound" component={NotFound}></Route>
            <Redirect from="/" to="/movies" exact></Redirect>
            <Redirect to="/notFound"></Redirect>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
