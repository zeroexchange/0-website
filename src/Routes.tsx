import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import HomePage from "./pages/Home";
import PartnersPage from "./pages/Partners";
import React from "react";
import ScrollToTop from "./shared/components/ScrollToTop";

export enum PublicRoutes {
  Home = "/",
  Partners = "/partners",
}

export default function Routes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-bg"></div>
      <div className="darken-bg"></div>
      <div className="darken-app"></div>
      <Header />
      <Switch>
        <Route exact path={PublicRoutes.Home}>
          <HomePage />
        </Route>
        <Route path={PublicRoutes.Partners}>
          <PartnersPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
