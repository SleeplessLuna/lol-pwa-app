import React from "react";
import OneSignal from "react-onesignal";

OneSignal.initialize("d7e0ffdf-e3cc-418f-b319-8d70e58ccdeb");

async function didMount() {
    const playerId = await OneSignal.getPlayerId();
    console.log(playerId);
}

didMount();

function App() {
    return (
        <section>
            <h1>This is a react app</h1>
        </section>
    );
}

export default App;
