import React from "react";
import "./tailwind.css";

import {FetchData } from "./Persistence/FetchData.ts";
import MyDataGrid from "./Components/MyDataGrid";
import type {JSONResponse} from "./Models/JSONResponse.ts";

const App: React.FC = () => {

    // TODO: fix cors
    const dataFetch: JSONResponse | null = FetchData("http://raspi/monitor/api", 1_000); // http://raspi:5173
    // TODO: escalate to error screen if fetch failed

    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <header style={{ margin: "5%", textAlign: "center" }}>
                <h1>Raspi Monitor</h1>
            </header>
            <main style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ width: "33%", margin: "auto" }}>
                    <MyDataGrid data={ dataFetch } />
                </div>
            </main>
        </div>
    );
}

export default App;
