import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ContactUs from "./app/Pages/ContactUs";
import Home from "./app/Pages/Home";
import OurClients from "./app/Pages/OurClients";
import Services from "./app/Pages/Services";
import Team from "./app/Pages/Team";
import data from "./app/API/data.json";
import LoginPage from "./app/Pages/LoginPage";
import RegisterPage from "./app/Pages/RegisterPage";
import SignUp from "./app/Pages/SignUp";
import Test from "./Test";
import ManagedPortfolio from "./app/Pages/ManagedPortfolio";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/portfolio">
          <ManagedPortfolio />
        </Route>
        <Route path="/our-clients">
          <OurClients />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/team">
          <Team data={data} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register-page">
          <RegisterPage />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/test">
          <Test />
        </Route>
        <Route path="/">
          <Home data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
