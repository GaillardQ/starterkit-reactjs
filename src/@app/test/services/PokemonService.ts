// @app/test
import type { PokemonList } from '@app/test/models/PokemonModel';
// @core
import useNetworkProvider   from '@core/providers/NetworkProvider';
import type { TCallReturn } from '@core/providers/NetworkProvider';

type TPokemonService = {
    useGetCatalog: () => TCallReturn<PokemonList>;
}

const rootPath = `${location.origin}/pokemon-api`;

const usePokemonService = (): TPokemonService => {

    // Hooks
    const { useGet } = useNetworkProvider();

    // Variables
    const otherHeaders = {};

    return {
        useGetCatalog:
            () => useGet<PokemonList>({
                url: `${rootPath}/pokemon`,
                otherHeaders
            }),
    };
};

export default usePokemonService;
