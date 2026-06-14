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
                    {
                        // TODO: set err in fetch data
                    }
                    <td>{ String(data ? data.temp / 1_000 : "err") + "°C" }</td>
                    <td>{ String(data ? data.cool : "err") }</td>
                </tr>
            </tbody>
        </table>
    );
}

export default MyDataGrid;
