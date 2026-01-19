import React from "react";

export interface FetchedData {
    json: any,
    error: Error | null,
    loading: boolean
}

export function FetchData(
    url: string,
    interval: number = 1_000
): FetchedData {

    const [response, setresponse] = React.useState<any>(null);
    const [error, setError] = React.useState<Error | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    React.useEffect(() => {

        let isMounted = true;

        const runPollingAsync = async () => {
            if (!isMounted) return;
            try {
                const response = await fetch(url);
                const data = await response.json();
                setresponse(data);
                setError(null);
            } catch (err) {
                setresponse(null);
                setError(err instanceof Error ? err : new Error(String(err)));
            } finally {
                setLoading(false);
                timerRef.current = setTimeout(runPollingAsync, interval);
            }
        };

        runPollingAsync().then(() => { });

        return (): void => {
            isMounted = false;
            clearTimeout(timerRef.current);
        };
    }, [ url, interval]);

    return {json: response, error, loading};
}
