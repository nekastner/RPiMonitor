import React from "react";

export interface RaspiJSONData {
    temp: string,
    cool: string
}

export interface DataFetch {
    raw: Response | null,
    json: RaspiJSONData | null,
    error: Error | null,
    loading: boolean
}

export function usePolling(
    url: string,
    interval: number = 1_000
): DataFetch {

    const [raw, setRaw] = React.useState<Response | null>(null);
    const [json, setJson] = React.useState<RaspiJSONData | null>(null);
    const [error, setError] = React.useState<Error | null>(null);
    const [loading, setLoading] = React.useState<boolean>(true);

    const timerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    React.useEffect(() => {

        let isMounted = true;

        const runPolling = async () => {
            if (!isMounted) return;
            try {
                const response = await fetch(url);
                console.log(response);
                setRaw(response);
                setJson(await response.json());
                setError(null);
            }
            catch (err) {
                setError(err instanceof Error ? err : new Error(String(err)));
            }
            finally {
                setLoading(false);
                timerRef.current = setTimeout(runPolling, interval);
            }
        };

        runPolling();

        return () => {
            isMounted = false;
            clearTimeout(timerRef.current);
        };
    }, [url, interval]);

    return { raw, json, error, loading };
}
