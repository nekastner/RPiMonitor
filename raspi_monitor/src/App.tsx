import React from "react";
import "./App.css";
import {DataFetch, usePolling} from "./DataFetch";

const App: React.FC = () => {

    const dataFetch: DataFetch = usePolling("http://raspi:8000");

    return (
        <div className="App">
            <header className="App-header">
                <h1>Raspi Monitor</h1>
                <p>Temperature: { dataFetch.json?.temp }</p>
                <p>Cooling state: { dataFetch.json?.cool }</p>
            </header>
        </div>
    );
}

export default App;
