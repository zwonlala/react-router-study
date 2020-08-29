import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  /*<MemoryRouter>*/
  /*<HashRouter>*/
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  /*</HashRouter> */
  /*</MemoryRouter> */ document.getElementById("root")
);
