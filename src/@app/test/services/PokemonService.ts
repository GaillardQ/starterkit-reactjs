// @app/test
import type { PokemonDetails } from '@app/test/models/PokemonDetailsModel';
import type { PokemonsList } from '@app/test/models/PokemonsListModel';
// @core
import type { TCallReturn } from '@core/misc/providers/NetworkProvider';
import useNetworkProvider from '@core/misc/providers/NetworkProvider';

type TPokemonService = {
    useGetCatalog: () => TCallReturn<PokemonsList>;
    useGetDetails: () => TCallReturn<PokemonDetails>;
}

const rootPath = `${location.origin}/pokemon-api`;

const usePokemonService = (): TPokemonService => {

    // Hooks
    const { useGet } = useNetworkProvider();

    // Variables
    const otherHeaders = {};

    return {
        useGetCatalog:
            () => useGet<PokemonsList>({
                url: `${rootPath}/pokemon`,
                otherHeaders
            }),
        useGetDetails:
            () => useGet<PokemonDetails>({
                url: `${rootPath}/pokemon/[POKEMON_ID]`,
                otherHeaders
            }),
    };
};

export default usePokemonService;
