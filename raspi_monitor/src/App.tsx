import React from "react";

import {FetchedData, FetchData} from "./Persistence/FetchedData";
import ErrorDisplay from "./Components/ErrorDisplay";
import MyDataGrid from "./Components/MyDataGrid";

const App: React.FC = () => {

    const dataFetch: FetchedData = FetchData("http://raspi:8000");

    return (
        <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <header style={{ margin: "5%", textAlign: "center" }}>
                <h1>Raspi Monitor</h1>
            </header>
            <main>
                <MyDataGrid data={ dataFetch.json } />
                <ErrorDisplay error={ dataFetch.error } />
            </main>
        </div>
    );
}

export default App;
