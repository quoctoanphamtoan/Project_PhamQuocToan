import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./redux";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Home from "./containers/home";
import { routes } from "./routers";
import Home from "./containers/home";
import HomeInput from "./containers/homeInput";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/home" component={Home} />;
          <Route exact={true} path="/add" component={HomeInput} />;
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
