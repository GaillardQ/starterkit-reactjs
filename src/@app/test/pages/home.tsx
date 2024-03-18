// Misc libs
import { useNavigate } from 'react-router-dom';
// @app
import PageComponent from '@app/common/components/PageComponent';
import { moduleRoute as routesTest } from '@app/test/resources/misc/Router';
// @core
import '@core/resources/assets/css/index.css';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiElement from '@ui/components/layout/Element/UiElement';

const Home = (): JSX.Element => {
    // Hooks
    const navigate = useNavigate();

    // Handlers
    const GoToBeerPart = (): void => {
        navigate(routesTest.routes.Bieres.uri());
    };

    return (
        <PageComponent>
            <UiTypography variant="h1">
							Accueil
            </UiTypography>

            <UiElement className="flex flex-col gap-y-4">
                <UiTypography variant='p'>
                    { 'Vous êtes sur la page d\'accueil du module de test du StaterKit.' }
                </UiTypography>
            </UiElement>

            <UiElement className="flex gap-x-2">
                <button onClick={ () => GoToBeerPart() }>Une bière ?</button>
            </UiElement>
        </PageComponent>
    );
};

export default Home;
