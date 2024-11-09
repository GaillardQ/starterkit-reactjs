// @app/test
import type { PokemonDetails } from '@app/test/models/PokemonDetailsModel';
import type { PokemonsList } from '@app/test/models/PokemonsListModel';
import usePokemonService from '@app/test/services/PokemonService';
// @core
import type { IProvider, TCallParams, WsDataModel } from '@core/misc/models/Network.type';
import type { TCallReturn } from '@core/misc/providers/NetworkProvider';

export interface IPokemonProvider extends IProvider {
  data: {
    catalog: TCallReturn<PokemonsList>;
    details: TCallReturn<PokemonDetails>;
  }
}

const usePokemonProvider = (): IPokemonProvider => {

    // Services
    const {
        useGetCatalog,
        useGetDetails
    } = usePokemonService();

    // Hooks
    const {
        fetch: fetchList,
        ...pokemonsListData
    } = useGetCatalog();
    const {
        fetch: fetchElement,
        ...pokemonDetailsData
    } = useGetDetails();

    // Actions
    const fetchCatalog = async (params: TCallParams): Promise<WsDataModel<PokemonsList>> => await fetchList(params);
    const fetchDetails = async (params: TCallParams): Promise<WsDataModel<PokemonDetails>> => await fetchElement(params);

    return ({
        data: {
            catalog: {
                ...pokemonsListData,
                fetch: fetchCatalog
            },
            details: {
                ...pokemonDetailsData,
                fetch: fetchDetails
            }
        }
    });
};

export default usePokemonProvider;
