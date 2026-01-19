import React from "react";

interface Props {
    error: Error | null;
}

const ErrorDisplay: React.FC<Props> = ({ error }) => {
    return (
        <div>
            <p>{ error?.name }</p>
            <p>{ error?.message }</p>
        </div>
    );
}

export default ErrorDisplay;
