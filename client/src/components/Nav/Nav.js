import React from "react";

const Nav = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand">
      Clicky Game
    </a>
    <ul>
      <li id="cur-sco">Current Score: {props.score}</li>
      <li id="top-sco">Top Score: {props.topScore}</li>
    </ul>
  </nav>
);

export default Nav;
