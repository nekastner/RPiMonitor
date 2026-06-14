import React from "react";
import type {JSONResponse} from "../Models/JSONResponse.ts";

export function FetchData(url: string, interval: number): JSONResponse | null {

    const [response, setResponse] = React.useState<JSONResponse | null>(null);

    const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    React.useEffect(() => {
        let isMounted = true; // lock
        const runPollingAsync = async () => {
            if (!isMounted) return; // check lock
            const response = await fetch(url); // fetch
            const data = await response.json(); // extract json
            setResponse(data); // save data
            timerRef.current = setTimeout(runPollingAsync, interval); // prepare for next fetch
        };

        runPollingAsync().then(() => { });

        return (): void => {
            isMounted = false; // unlock
            clearTimeout(timerRef.current);
        };
    }, [ url, interval]);

    return response;
}
