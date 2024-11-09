// Misc libs
import { useNavigate } from 'react-router-dom';
// @app/common
import PageComponent from '@app/common/components/PageComponent';
// @app/test
import { moduleRouter as routesTest } from '@app/test/resources/misc/Router';
// @core
import '@core/misc/resources/assets/css/index.css';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiButton from '@ui/components/input/Button/UiButton';
import UiElement from '@ui/components/layout/Element/UiElement';

const Home = (): JSX.Element => {
    // Hooks
    const navigate = useNavigate();

    // Handlers
    const GoToPokemonPart = (): void => {
        navigate(routesTest.routes.Catalog.uri());
    };

    return (
        <PageComponent>
            <UiTypography is="h1">
							Accueil
            </UiTypography>

            <UiElement className="flex flex-col gap-y-4">
                <UiTypography is='p'>
                    { 'Vous êtes sur la page d\'accueil du module de test du StaterKit.' }
                </UiTypography>
            </UiElement>

            <UiElement className="flex gap-x-2">
                <UiButton
                    label="Catalogue Pokemon"
                    onClick={ () => GoToPokemonPart() }
                />
            </UiElement>
        </PageComponent>
    );
};

export default Home;
