import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
<<<<<<< HEAD
=======
import Books from "./pages/Books";
>>>>>>> 62b749493abe88398e58b3abb8c8da60e28b1cae
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
<<<<<<< HEAD
=======
        <Route exact path="/" component={Books} />
        <Route exact path="/books" component={Books} />
>>>>>>> 62b749493abe88398e58b3abb8c8da60e28b1cae
        <Route exact path="/books/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
