// Misc libs
import { useNavigate } from 'react-router-dom';
// @app/common
import PageComponent from '@app/common/components/PageComponent';
// @app/test
import PokemonCatalogComponent from '@app/test/components/PokemonCatalogComponent';
import usePokemonProvider from '@app/test/providers/PokemonProvider';
import { moduleRoute as routesTest } from '@app/test/resources/misc/Router';
// @core
import '@core/resources/assets/css/index.css';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiElement from '@ui/components/layout/Element/UiElement';

const Catalog = (): JSX.Element => {

    // Hooks
    const navigate = useNavigate();
    const pokemonProvider = usePokemonProvider();

    // Handlers
    const GoToHome = (): void => {
        navigate(routesTest.routes.Home.uri());
    };

    return (
        <PageComponent>
            <UiElement
                variant='container'
                className='flex flex-col gap-y-4'
            >
                <UiTypography variant="h1">
                  Catalogue Pokemon
                </UiTypography>

                <UiElement className="flex flex-col gap-y-4">
                    <UiTypography variant='p'>{ 'Il me fallait une API pour tester la partie "réseau"' }</UiTypography>
                </UiElement>

                <UiElement className="flex gap-x-2">
                    <button onClick={ () => GoToHome() }>Accueil</button>
                </UiElement>

                <PokemonCatalogComponent provider={ pokemonProvider } />
            </UiElement>
        </PageComponent>
    );
};

export default Catalog;
