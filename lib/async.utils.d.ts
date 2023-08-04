export declare namespace AsyncUtils {
    function map<T, U>(arr: T[] | undefined, fn: (item: T, index: number, arr: T[]) => Promise<U>): Promise<U[]>;
    function each<T>(arr: T[] | undefined, fn: (item: T, index: number, arr: T[]) => void): Promise<void>;
    function serialMap<T, U>(arr: T[] | undefined, fn: (item: T, index: number, arr: T[]) => Promise<U>): Promise<U[]>;
    function sleep(ms: number): Promise<void>;
    function times<U>(n: number, fn: (n: number) => Promise<U>): Promise<U[]>;
}
