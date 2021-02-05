import React, { useState, useEffect, createContext } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const OneSignal = window.OneSignal || [];
    const [OneSignalUserId, setOneSignalUserId] = useState(null);
    const [Result, setResult] = useState(null);

    /*     function GiveMeTheUserID() {
        OneSignal.push(function () {
            OneSignal.getUserId().then(function (userId) {
                console.log("OneSignal User ID:", userId);
                setOneSignalUserId(userId);
            });
        });
    } */

    if (OneSignal !== []) {
        OneSignal.push(function () {
            OneSignal.getUserId().then(function (userId) {
                console.log("OneSignal User ID:", userId);
                setOneSignalUserId(userId);
            });
        });
    }

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://onesignal.com/api/v1/notifications`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                    body: JSON.stringify({
                        app_id: "d7e0ffdf-e3cc-418f-b319-8d70e58ccdeb",
                        include_player_ids: [`${OneSignalUserId}`],
                        data: { foo: "bar" },
                        contents: { en: "English Message" },
                    }),
                }
            );
            const result = await response.json();
            console.log(result);
            setResult(result);
        })();
    }, [OneSignalUserId]);

    return (
        <Context.Provider value={{ Result }}>{props.children}</Context.Provider>
    );
};

export default ContextProvider;
