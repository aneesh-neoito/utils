import { FactoryProvider, Type } from '@nestjs/common';
export declare type TokenMapperFn<T> = (param: T) => string;
export declare type TokenFactory<T> = (param: T) => string;
export declare type ProviderFactory<T, U = any> = (param: T) => FactoryProvider<U>;
export declare type InjectorFactory<T> = (param: T) => ParameterDecorator;
export declare type CreateProviderOptions<T> = {
    namespace: string;
    mapper?: TokenMapperFn<T>;
    provider: (param: T) => Omit<FactoryProvider, 'provide'>;
};
export declare namespace ProviderUtils {
    function createDynamicProvider<T = string>(options: CreateProviderOptions<T>): {
        getToken: TokenFactory<T>;
        getProvider: ProviderFactory<T>;
        getInjector: InjectorFactory<T>;
    };
    function createTokenFactory<T>(namespace: string, mapper: TokenMapperFn<T>): TokenFactory<T>;
    function createInjectorFactory<T>(namespace: string, mapper: TokenMapperFn<T>): InjectorFactory<T>;
    function createDynamicInjector(namespace: Type<any> | string): (param?: any) => (target: object, key: string | symbol, index?: number | undefined) => void;
    function createToken(namespace: Type<any> | string, param?: any): string;
    function getTokenParamValue(param?: any): string;
    function serviceArrayProvider(options: {
        provide: string | symbol;
        services: Type<any>[];
    }): FactoryProvider;
}
