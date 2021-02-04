import React from "react";
import OneSignal from "react-onesignal";

function App() {
    let playerID = OneSignal.getPlayerId();

    console.log(playerID);
    return (
        <section>
            <h1>This is a react app</h1>
        </section>
    );
}

export default App;
