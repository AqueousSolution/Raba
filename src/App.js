import React from "react";
import "./App.css";
import SignUp from "./Components/Auth/SignUp";
import Dashboard from "./Components/Layers/Dashboard";
import Login from "./Components/Auth/Login";
import LandingPage from "./Components/Layers/LandingPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/dashboard" component={Dashboard}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/landingpage" component={LandingPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
