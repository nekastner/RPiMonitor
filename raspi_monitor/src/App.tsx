import React from "react";
import "./App.css";
import {DataFetch, usePolling} from "./Persistence/DataFetch";
import ErrorDisplay from "./Displays/ErrorDisplay";
import DataDisplay from "./Displays/DataDisplay";

const App: React.FC = () => {

    const dataFetch: DataFetch = usePolling("http://raspi:8000");

    return (
        <div className="App">
            <header className="App-header">
                <h1>Raspi Monitor</h1>
                <p>Debug</p>
                <DataDisplay data={ dataFetch.json } />
                <ErrorDisplay error={ dataFetch.error } />
            </header>
        </div>
    );
}

export default App;
