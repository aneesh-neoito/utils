export declare type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
};
export declare type Nullable<T> = T | null | undefined;
