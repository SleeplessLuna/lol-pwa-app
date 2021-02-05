import React from "react";
import { useContext } from "react";
import { Context } from "./components/Context";

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
