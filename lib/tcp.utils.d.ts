export declare namespace TcpUtils {
    function probe(url: URL): Promise<boolean>;
    function waitProbe(url: URL, maxAttempts?: number): Promise<void>;
}
