import React from "react";

interface Props {
    data: any
}

const DataDisplay: React.FC<Props> = ({ data }) => {
    return (
        <div>
            <p>Temperature: { data ? data.temp / 1_000 : "_" }°C</p>
            <p>Cooling state: { data ? data.cool : "_" }</p>
        </div>
    );
}

export default DataDisplay;
