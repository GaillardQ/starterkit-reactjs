// @app/common
import PageComponent from '@app/common/components/PageComponent';
// @app/test
import PokemonCatalogComponent from '@app/test/components/PokemonCatalogComponent';
import usePokemonProvider from '@app/test/providers/PokemonProvider';
// @core
import '@core/resources/assets/css/index.css';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiElement from '@ui/components/layout/Element/UiElement';

const Catalog = (): JSX.Element => {

    // Hooks
    const pokemonProvider = usePokemonProvider();

    return (
        <PageComponent>
            <UiElement
                className='flex flex-col gap-y-4 h-full overflow-hidden'
            >
                <UiTypography is="h1">
                  Catalogue Pokemon
                </UiTypography>

                <UiElement className="flex flex-col gap-y-4">
                    <UiTypography is='p'>{ 'Il me fallait une API pour tester la partie "réseau"' }</UiTypography>
                </UiElement>

                <PokemonCatalogComponent catalog={ pokemonProvider.data.catalog } />
            </UiElement>
        </PageComponent>
    );
};

export default Catalog;
