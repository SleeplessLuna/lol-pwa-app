import React from "react";
const OneSignal = window.OneSignal || [];

OneSignal.push(function () {
    OneSignal.init({
        appId: "d7e0ffdf-e3cc-418f-b319-8d70e58ccdeb",
    });
    OneSignal.getUserId(function (userId) {
        console.log("OneSignal User ID:", userId);
        // (Output) OneSignal User ID: 270a35cd-4dda-4b3f-b04e-41d7463a2316
    });
});

function App() {
    return (
        <section>
            <h1>This is a react app</h1>
        </section>
    );
}

export default App;
