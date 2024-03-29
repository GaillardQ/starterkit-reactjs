// Misc libs
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { capitalize } from 'lodash';
// @app/test
import { moduleRouter as routesTest } from '@app/test/resources/misc/Router';
import type { PokemonsList, TPokemon } from '@app/test/models/PokemonsListModel';
// @core
import type { TCallReturn } from '@core/providers/NetworkProvider';
// @ui
import UiElement from '@ui/components/layout/Element/UiElement';
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiButton from '@ui/components/input/UiButton';

interface IParams {
  catalog: TCallReturn<PokemonsList>;
}
const PokemonCatalogComponent = (params: IParams): JSX.Element => {

    // Variables
    const { catalog } = params;
    const controller = new AbortController();
    const { signal } = controller;

    // Hooks
    const navigate = useNavigate();

    // Effects
    useEffect(() => {
        catalog.fetch({ callHeaders: { signal } });
        return () => controller.abort();
    }, []);

    // Actions
    const GoToDetails = (id: string): void => {
        navigate(routesTest.routes.Pokemon.childs!.Details.uri({ id }));
    };

    // Getters
    const GetPokemonId = (url: string): string => {
        const elements = url.split('/pokemon/');
        return elements[1];
    };

    return (
        <UiElement
            variant="container"
            hasShadow={ false }
            size='xsmall'
            className='flex flex-1 flex-wrap gap-8 items-center justify-center overflow-auto'
        >
            {
                catalog.data?.results?.map(
                    (b: TPokemon, index: number) => (
                        <UiElement
                            key={ index }
                            variant='container'
                            color='secondary'
                            className='flex flex-col h-fit gap-y-8 items-center w-1/12'
                        >
                            <UiTypography>
                                { capitalize(b.name) }
                            </UiTypography>
                            <UiButton
                                variant='outlined'
                                size="xsmall"
                                label="Détails"
                                onClick={ () => GoToDetails(GetPokemonId(b.url)) }
                            />
                        </UiElement>)
                )
            }
        </UiElement>
    );
};

export default PokemonCatalogComponent;
