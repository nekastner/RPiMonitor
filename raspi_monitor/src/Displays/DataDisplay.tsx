import React from "react";
import {RaspiJSONData} from "../Persistence/DataFetch";

interface Props {
    data: RaspiJSONData | null
}

const DataDisplay: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <p>Temperature: { data?.temp }</p>
            <p>Cooling state: { data?.cool }</p>
        </div>
    );
}

export default DataDisplay;
