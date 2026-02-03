import React from "react";
import ReactDOM from "react-dom/client";
import { FluentProvider, webDarkTheme } from "@fluentui/react-components";

import App from "./App";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <FluentProvider theme={webDarkTheme} style={{ minHeight: "100vh" }}>
            <App />
        </FluentProvider>
    </React.StrictMode>
);
