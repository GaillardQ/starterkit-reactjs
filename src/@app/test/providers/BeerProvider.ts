import type { IProvider, WsDataModel } from '@core/models/Network.type';
import type { TCallReturn } from '@core/providers/NetworkProvider';
import useBeerService from '@app/test/services/BeerService';
import { useEffect } from 'react';

export interface IBeerProvider extends IProvider {
  data: {
    catalog: TCallReturn<unknown[]>
  }
}

const useBeerProvider = (): IBeerProvider => {
    // Variables
    const controller = new AbortController();
    const { signal } = controller;

    // Services
    const {
        useGetCatalog
    } = useBeerService();

    // Hooks
    const {
        fetch: fetchList,
        ...beersData
    } = useGetCatalog();

    // Effects
    useEffect(() => {
        fetchCatalog();
        return () => controller.abort();
    }, []);

    const fetchCatalog = async (): Promise<WsDataModel<unknown[]>> => await fetchList({
        callHeaders: { signal }
    });

    return ({
        data: {
            catalog: {
                ...beersData,
                fetch: fetchCatalog
            }
        }
    });
};

export default useBeerProvider;
