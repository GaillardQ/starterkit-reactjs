// @core
import useNetworkProvider   from '@core/providers/NetworkProvider';
import type { TCallReturn } from '@core/providers/NetworkProvider';

type TBiereService = {
    useGetCatalog: () => TCallReturn<unknown[]>;
}

const rootPath = '';

const useBiereService = (): TBiereService => {

    // Hooks
    const { useGet } = useNetworkProvider();

    // Variables
    const otherHeaders = {};

    return {
        useGetCatalog:
            () => useGet<unknown[]>({
                url: `${rootPath}/beers`,
                otherHeaders
            }),
    };
};

export default useBiereService;
