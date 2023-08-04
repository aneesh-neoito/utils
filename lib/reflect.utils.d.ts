import 'reflect-metadata';
export declare const pushMetadata: (metadataKey: any, ...metadataValues: any[]) => (target: any, key?: any, descriptor?: any) => any;
export declare const setMetadata: (metadataKey: any, metadataValue: any) => (target: any, key?: any, descriptor?: any) => any;
export declare const getMetadata: <T>(metadataKey: any, target: any) => T;
