// @app/test
import usePokemonService from '@app/test/services/PokemonService';
import type { PokemonList } from '@app/test/models/PokemonModel';
// @core
import type { IProvider, TCallParams, WsDataModel } from '@core/models/Network.type';
import type { TCallReturn } from '@core/providers/NetworkProvider';

export interface IPokemonProvider extends IProvider {
  data: {
    catalog: TCallReturn<PokemonList>
  }
}

const usePokemonProvider = (): IPokemonProvider => {

    // Services
    const {
        useGetCatalog
    } = usePokemonService();

    // Hooks
    const {
        fetch: fetchList,
        ...pokemonsData
    } = useGetCatalog();

    const fetchCatalog = async (params: TCallParams): Promise<WsDataModel<PokemonList>> => await fetchList(params);

    return ({
        data: {
            catalog: {
                ...pokemonsData,
                fetch: fetchCatalog
            }
        }
    });
};

export default usePokemonProvider;
