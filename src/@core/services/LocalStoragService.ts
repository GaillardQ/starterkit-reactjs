export interface ILocalStorageProviderReturn<TStorageKeys extends string> {
    storageKeys: Record<TStorageKeys, string>;
    storageGet: <T = string>(key: string) => T | null;
    storageSet: <T = unknown>(key: string, value: T) => void;
    storageDelete: (key: string) => void;
}

const useLocalStorage = <T extends string>(keys: Record<T, string>): ILocalStorageProviderReturn<T> => ({
    storageKeys: keys,
    storageGet: <T>(key: string): T | null => {
        const value = localStorage.getItem(key);
        if (value !== null) {
            return JSON.parse(value) as T;
        }
        return value;
    },
    storageSet: <T>(key: string, value: T): void => {
        if (value !== null) {
            localStorage.setItem(key, JSON.stringify(value));
        }
    },
    storageDelete: (key: string): void => {
        localStorage.removeItem(key);
    }
});

export default useLocalStorage;
