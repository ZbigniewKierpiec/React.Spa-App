import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import ContactPage from "../src/pages/ContactPage";
import ProductPage from "../src/pages/ProductPage";
import ProductListPage from "../src/pages/ProductListPage";
import AdminPage from "../src/pages/AdminPage";
import ErrorPage from "../src/pages/ErrorPage";
import LoginPage from "../src/pages/LoginPage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products" component={ProductListPage} />
        <Route path="/product/:id" component={ProductPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/login" component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;
