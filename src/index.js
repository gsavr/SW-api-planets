import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/SfDistantGalaxy-0l3d.ttf";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routers from "./routers";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <Routers />
  </Provider>,

  document.getElementById("root")
);
