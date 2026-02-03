import React from "react";

import {type FetchedData, FetchData } from "./Persistence/FetchedData";
import MyDataGrid from "./Components/MyDataGrid";

const App: React.FC = () => {

    const dataFetch: FetchedData = FetchData("http://raspi/monitor/api");

    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <header style={{ margin: "5%", textAlign: "center" }}>
                <h1>Raspi Monitor</h1>
            </header>
            <main style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ width: "33%", margin: "auto" }}>
                    <MyDataGrid data={ dataFetch.json } />
                </div>
            </main>
        </div>
    );
}

export default App;
