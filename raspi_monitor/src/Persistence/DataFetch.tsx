import React from "react";

export interface DataFetch {
    json: any,
    error: Error | null,
    loading: boolean
}

export function usePolling(
    url: string,
    interval: number = 1_000
): DataFetch {

    const [json, setJson] = React.useState<any>(null);
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
                setJson(data);
                setError(null);
            }
            catch (err) {
                setJson(null);
                setError(err instanceof Error ? err : new Error(String(err)));
            }
            finally {
                setLoading(false);
                timerRef.current = setTimeout(runPollingAsync, interval);
            }
        };

        let pollingPromise = runPollingAsync();

        return (): void => {
            isMounted = false;
            clearTimeout(timerRef.current);
        };
    }, [url, interval]);

    return { json, error, loading };
}
