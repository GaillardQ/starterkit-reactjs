// Misc libs
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// @app/test
import type { IPokemonProvider } from '@app/test/providers/PokemonProvider';
import { moduleRoute as routesTest } from '@app/test/resources/misc/Router';
// @ui
import UiElement from '@ui/components/layout/Element/UiElement';
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiButton from '@ui/components/input/UiButton';

interface IParams {
  provider: IPokemonProvider;
}
const PokemonCatalogComponent = (params: IParams): JSX.Element => {

    // Variables
    const { provider } = params;
    const controller = new AbortController();
    const { signal } = controller;

    // Hooks
    const navigate = useNavigate();

    // Effects
    useEffect(() => {
        provider.data.catalog.fetch({ callHeaders: { signal } });
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
        <UiElement className='flex flex-col gap-y-4'>
            <UiElement className='flex flex-wrap gap-2'>
                {
                    provider.data.catalog.data?.results?.map(
                        (b, index) => (
                            <UiElement
                                key={ index }
                                variant='container'
                                color='secondary'
                                className='flex flex-col gap-y-2 items-center w-1/12'
                            >
                                <UiTypography>
                                    { b.name }
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
        </UiElement>
    );
};

export default PokemonCatalogComponent;
