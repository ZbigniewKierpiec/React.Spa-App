import React from "react";
import { Route } from "react-router-dom";
import "../src/Footer.css";

const Footer = () => {
  return (
    <div>
      <h2>Footer</h2>
      <Route
        path="/"
        exact
        render={(props) => {
          return (
            <p>
              You are on the <span>Homepage</span>
            </p>
          );
        }}
      />

      <Route
        path="/:page"
        render={(props) => {
          console.log(props);
          return (
            <p>
              You are on <span>{props.match.params.page}  page</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
