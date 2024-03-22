// Misc libs
import type { LogoutOptions } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';
import type { TWsException, TWsExceptionList } from '@core/models/Error.type';
import type { TCallParams, TUrlUpdate } from '@core/models/Network.type';
import { WsDataModel } from '@core/models/Network.type';
import type { ILocalStorageProviderReturn } from '@core/services/LocalStoragService';
import useLocalStorage from '@core/services/LocalStoragService';
import type { ReplaceOperation } from 'fast-json-patch';
import { compare } from 'fast-json-patch';
import {
    useEffect,
    useState
} from 'react';

export type TStorageKeys = 'access_token';

export type TCallData = Record<string, unknown>;

export type THeadersObject = Record<string, string | null>;
export interface ICallParams {
    url: string;
    needAuth?: boolean;
    otherHeaders?: THeadersObject;
}

export type TCall = <T>(params: ICallParams) => TCallReturn<T>;
export interface INetworkProviderReturn {
    useGet: TCall;
    usePut: TCall;
    usePost: TCall;
    usePatch: TCall;
    useDelete: TCall;
}

export interface ICallUrlParams {
    method: string,
    params: ICallParams,
    other: {
        notLoggedCb: TNotLoggedCb,
        localStorageProvider: ILocalStorageProviderReturn<TStorageKeys>;
        isPatch?: boolean;
    }
}

export type TCallReturn<T = undefined> = WsDataModel<T> & {
    fetch: (
        params: TCallParams,
        formatter?: (inputs: unknown) => unknown
    ) => Promise<WsDataModel<T>>
    reset?: () => void;
}

type TNotLoggedCb = (options?: LogoutOptions | undefined) => void;

const getFormData =
    (data: TCallData): FormData =>
        Object.keys(data).reduce((fd: FormData, key: string) => {
            if (data[key] instanceof FileList) {
                const files = data[key] as FileList;
                if (files) {
                    for (let i = 0; i < files.length; i++) {
                        const file = files.item(i);
                        if (file) {
                            fd.append(key, file, file.name);
                        }
                    }
                }
            } else {
                if (data[key]) {
                    fd.append(key, data[key] as (string | Blob));
                }
            }
            return fd;
        }, new FormData());

const getHeaders =
    (
        needAuth: boolean,
        localStorageProvider: ILocalStorageProviderReturn<TStorageKeys>,
        isFormData = false,
        otherHeaders?: THeadersObject,
    ): Headers => {
        const { storageGet, storageKeys: { access_token } } = localStorageProvider;
        const headers = new Headers({});

        if (!isFormData) {
            headers.append('Content-Type', 'application/json');
        }

        if (needAuth) {
            const token = storageGet(access_token);
            const bearer = `Bearer ${token}`;
            headers.append('Authorization', bearer);
        }

        if (otherHeaders) {
            Object.keys(otherHeaders).map((k: string) => {
                if (otherHeaders[k]) {
                    headers.append(k, otherHeaders[k]!);
                }
            });
        }
        return headers;
    };

const getUrl = (url: string, endpointUpdates: TUrlUpdate[] = [], urlParams: TUrlUpdate[] = []): string => {

    const params = url.split(/[&?]/)
        .filter((element) =>
            endpointUpdates
                .find((param) => (element.replace(/.*=/, '') === param.key) && param.newValue?.toString())
        );

    const cleanedURL    = `${url.replace(/\?.*/, '')}${params.length ? `?${params.join('&')}` : ''}`;
    const URLParams     = `${urlParams.length ? `?${urlParams.map((params) => `${params.key}=${params.newValue}`).join('&')}` : ''}`;
    const URL           = [ cleanedURL, URLParams ].join('');

    return endpointUpdates
        .reduce((newUrl: string, update: TUrlUpdate) => newUrl.replace(update.key, update.newValue?.toString() ?? ''), URL)
        .replace('[GATEWAY]', (import.meta.env.VITE_API_URI as string));
};

const useCallUrl = <T>(params: ICallUrlParams): TCallReturn<T> => {

    // Variables
    const {
        method,
        params: { needAuth, url, otherHeaders },
        other: { notLoggedCb, localStorageProvider, isPatch }
    } = params;

    // States
    const [wsData, setWsData] = useState<WsDataModel<T>>(WsDataModel.Empty());

    // Effects
    useEffect(() => {
        if(wsData?.isExecuted){
            setWsData({ ...wsData, isExecuted: false });
        }
    }, [wsData]);

    // Actions
    const fetchData =
        async (params: TCallParams): Promise<WsDataModel<T>> => {
            const newWsData: WsDataModel<T> = WsDataModel.Empty();
            setWsData({ ...newWsData, isLoading: true });

            const {
                data,
                origin,
                urlParams,
                forcedURL,
                isFormData,
                callHeaders,
                throwIfError,
                endpointUpdates,
                isFakeDataCalled,
                callResponseDelay
            } = params;

            const defaultError = {
                property: '',
                code: '500',
                message: 'Une erreur est survenue...',
                exception: ''
            };

            try {

                if(isFakeDataCalled){
                    const fakeResponseObj = {
                        ...WsDataModel.Empty(),
                        isExecuted: true,
                        isSuccess: true
                    };
                    setWsData(fakeResponseObj);
                    return fakeResponseObj;
                }

                const headers = getHeaders(needAuth !== false, localStorageProvider, isFormData, otherHeaders);

                if (!isFormData) {
                    headers.append('Content-Type', 'application/json; charset=utf-8');
                }

                if (callHeaders) {
                    Object.keys(callHeaders).forEach((k: string) => {
                        if (headers.has(k)) {
                            headers.set(k, callHeaders[k] as string);
                        } else {
                            headers.append(k, callHeaders[k] as string);
                        }
                    });
                }

                const init: RequestInit = {
                    headers,
                    method,
                    mode: 'cors',
                    cache: 'default',
                };

                const getBodyPatch = (): string => {
                    const inputs = compare(origin as Record<string, unknown>, data as Record<string, unknown>);
                    const patcher = inputs.filter((input) => input.op === 'replace') as ReplaceOperation<string>[];
                    return JSON.stringify(patcher);
                };

                const body = data ?
                    isFormData
                        ? getFormData(data as TCallData) :
                        isPatch
                            ? getBodyPatch()
                            : JSON.stringify(data)
                    : null;

                const delay = (time: number): Promise<void> => new Promise((res) => {
                    setTimeout(res, time);
                });

                const wsResponse = await fetch(
                    forcedURL ?? getUrl(url, endpointUpdates, urlParams),
                    {
                        ...init,
                        body
                    }
                );

                if (callResponseDelay) {
                    await delay(callResponseDelay);
                }

                newWsData.isExecuted = true;
                newWsData.headers = wsResponse.headers;

                const statusCode: number | boolean = handleErrors(
                    wsResponse,
                    notLoggedCb,
                    localStorageProvider
                );

                if (statusCode !== false) {
                    let errors: TWsException[] = [defaultError];
                    const contentType = wsResponse.headers.get('content-type');
                    if (contentType && contentType.indexOf('application/json') !== -1) {
                        const wsError = await wsResponse.json() as TWsException | TWsExceptionList;
                        if (Object.prototype.hasOwnProperty.call(wsError, 'message')) {
                            errors = [wsError as TWsException];
                        } else if (Object.prototype.hasOwnProperty.call(wsError, 'erreurs')) {
                            errors = (wsError as TWsExceptionList).erreurs;
                        }
                    }

                    newWsData.isSuccess = false;
                    newWsData.isLoading = false;
                    newWsData.errors = errors.map((error) => ({
                        isNotFound: statusCode === 404,
                        ...error
                    }));

                    if (throwIfError) {
                        throw errors;
                    }

                } else {
                    newWsData.isSuccess = true;
                    newWsData.isLoading = false;

                    const contentType = wsResponse.headers.get('content-type');
                    if (contentType && (contentType == 'application/pdf' || contentType == 'application/zip')) {
                        const blob = await wsResponse.blob();
                        if(blob) {
                            newWsData.blob = blob;
                        }
                    }
                    else if (contentType && contentType.indexOf('application/json') !== -1) {
                        const wsData = await wsResponse.json() as T;
                        if (wsData) {
                            newWsData.data = wsData;
                        }
                    }
                }
            } catch (e) {
                if (!newWsData.errors) {
                    newWsData.errors = [defaultError];
                }
                newWsData.isLoading = false;
                setWsData(wsData);
                if (throwIfError) {
                    throw newWsData.errors.length > 0 ? newWsData.errors[0] : defaultError;
                }
            }

            setWsData(newWsData);
            return newWsData;
        };

    const reset = (): void => {
        setWsData(WsDataModel.Empty());
    };

    return { fetch: fetchData, reset, ...wsData };
};

const handleErrors =
    (
        response: { status?: number },
        notLoggedCb: TNotLoggedCb,
        localStorageProvider: ILocalStorageProviderReturn<TStorageKeys>
    ): number | boolean => {
        const { storageDelete, storageKeys: { access_token } } = localStorageProvider;
        if (!response?.status || response.status > 299) {
            if (response && response.status === 401) {
                storageDelete(access_token);
                notLoggedCb({
                    logoutParams: {
                        returnTo: window.location.origin
                    }
                });
            }
            return response.status ?? 1;
        }
        return false;
    };

const useNetworkProvider =
    (): INetworkProviderReturn => {
        // Hooks
        const { logout } = useAuth0();
        const localStorageProvider = useLocalStorage({ access_token: 'access_token' });

        return {
            useDelete: <T>(params: ICallParams): TCallReturn<T> =>
                useCallUrl<T>({
                    method: 'DELETE',
                    params,
                    other: {
                        notLoggedCb: logout,
                        localStorageProvider
                    }
                }),
            useGet: <T>(params: ICallParams): TCallReturn<T> =>
                useCallUrl<T>({
                    params,
                    method: 'GET',
                    other: {
                        notLoggedCb: logout,
                        localStorageProvider
                    }
                }),
            usePost: <T>(params: ICallParams): TCallReturn<T> =>
                useCallUrl<T>({
                    params,
                    method: 'POST',
                    other: {
                        notLoggedCb: logout,
                        localStorageProvider
                    }
                }),
            usePut: <T>(params: ICallParams): TCallReturn<T> =>
                useCallUrl<T>({
                    params,
                    method: 'PUT',
                    other: {
                        notLoggedCb: logout,
                        localStorageProvider
                    }
                }),
            usePatch: <T>(params: ICallParams): TCallReturn<T> =>
                useCallUrl<T>({
                    params,
                    method: 'PATCH',
                    other: {
                        isPatch: true,
                        notLoggedCb: logout,
                        localStorageProvider
                    }
                })
        };
    };

export default useNetworkProvider;
