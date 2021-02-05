import React from "react";
import { useContext } from "react";
import { Context } from "./components/Context";
const OneSignal = window.OneSignal || [];

OneSignal.push(function () {
    OneSignal.init({
        appId: "d7e0ffdf-e3cc-418f-b319-8d70e58ccdeb",
    });
});

function App() {
    const { Result } = useContext(Context);
    console.log(Result);

    return (
        <section>
            <h1>This is a react app</h1>
        </section>
    );
}

export default App;
