"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProviderUtils = void 0;
const common_1 = require("@nestjs/common");
const _ = require("lodash");
var ProviderUtils;
(function (ProviderUtils) {
    function createDynamicProvider(options) {
        options.mapper = options.mapper || _.toString;
        const { namespace, mapper, provider } = options;
        const getToken = createTokenFactory(namespace, mapper);
        const getInjector = createInjectorFactory(namespace, mapper);
        const getProvider = (param) => {
            return Object.assign({ provide: getToken(param) }, provider(param));
        };
        return { getToken, getProvider, getInjector };
    }
    ProviderUtils.createDynamicProvider = createDynamicProvider;
    function createTokenFactory(namespace, mapper) {
        return (param) => `${namespace}(${mapper(param)})`;
    }
    ProviderUtils.createTokenFactory = createTokenFactory;
    function createInjectorFactory(namespace, mapper) {
        const getToken = createTokenFactory(namespace, mapper);
        return (param) => {
            const token = getToken(param);
            return common_1.Inject(token);
        };
    }
    ProviderUtils.createInjectorFactory = createInjectorFactory;
    function createDynamicInjector(namespace) {
        return (param) => {
            const token = ProviderUtils.createToken(namespace, param);
            return common_1.Inject(token);
        };
    }
    ProviderUtils.createDynamicInjector = createDynamicInjector;
    function createToken(namespace, param) {
        if (typeof namespace !== 'string') {
            namespace = namespace.name;
        }
        return `${namespace}(${ProviderUtils.getTokenParamValue(param)})`;
    }
    ProviderUtils.createToken = createToken;
    function getTokenParamValue(param) {
        switch (typeof param) {
            case 'symbol':
            case 'string':
            case 'boolean':
            case 'number':
            case 'bigint':
                return param.toString();
            case 'function':
                return param.name;
            case 'undefined':
                return '';
        }
        throw new Error('Invalid token param type: ' + typeof param);
    }
    ProviderUtils.getTokenParamValue = getTokenParamValue;
    function serviceArrayProvider(options) {
        return {
            provide: options.provide,
            inject: options.services,
            useFactory: (...services) => services,
        };
    }
    ProviderUtils.serviceArrayProvider = serviceArrayProvider;
})(ProviderUtils = exports.ProviderUtils || (exports.ProviderUtils = {}));
