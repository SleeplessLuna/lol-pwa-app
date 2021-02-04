import React from "react";
import logo from "./logo.svg";
import "./App.css";
import OneSignal from "react-onesignal";

OneSignal.initialize("8da4fc0d-700a-49bb-9d1f-63169284f317");

OneSignal.push(() => {
    OneSignal.isPushNotificationsEnabled((isEnabled) => {
        if (isEnabled) {
            // user has subscribed
            OneSignal.getUserId(function (userId) {
                console.log("player_id of the subscribed user is : " + userId);
                // Make a POST call to your server with the user ID
            });
        } else {
            console.log("user is not subscribed");
        }
    });
});

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
