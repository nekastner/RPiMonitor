import React from "react";

import "./MyDataGrid.css";

import type {JSONResponse} from "../Models/JSONResponse.ts";

interface Props {
    data: JSONResponse | null;
}

const MyDataGrid: React.FC<Props> = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Temp</td>
                    <td>Cool</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{ String(data ? data.temp / 1_000 : "_") + "°C" }</td>
                    <td>{ String(data ? data.cool : "_") }</td>
                </tr>
            </tbody>
        </table>
    );
}

export default MyDataGrid;
