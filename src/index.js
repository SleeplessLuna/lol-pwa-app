import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ContextProvider from "./components/Context";
import { BrowserRouter as Router } from "react-router";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </Router>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
