import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/css/now-ui-kit.css";
import "assets/demo/demo.css?v=1.4.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.4.0";
// pages for this kit
import Principal from "views/Principal.js";
import Fotos from "views/Fotos.js";
import Servico from "views/Servico.js";
import Fale from "views/FaleConosco.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route
          path="/index"
          render={(props) => <Principal {...props} />}
        />
		<Route
          path="/fotos"
          render={(props) => <Fotos {...props} />}
        />
		<Route
          path="/servico"
          render={(props) => <Servico {...props} />}
        />
		<Route
          path="/fale"
          render={(props) => <Fale {...props} />}
        />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
