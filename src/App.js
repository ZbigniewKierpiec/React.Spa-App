import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import "./index.css";
import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <header>{<Header />}</header>
        <main>
          <aside>{<Navigation />}</aside>

          <section className="page">{<Page />}</section>
        </main>
        <footer>{<Footer />}</footer>
      </div>
    </Router>
  );
}

export default App;
