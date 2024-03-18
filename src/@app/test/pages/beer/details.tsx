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

const Details = (): JSX.Element => {
    // Hooks
    const navigate = useNavigate();

    // Handlers
    const GoToHome = (): void => {
        navigate(routesTest.routes.Home.uri());
    };

    const GoToCatalog = (): void => {
        navigate(routesTest.routes.Bieres.uri());
    };

    return (
        <PageComponent>
            <UiElement className='flex flex-col gap-y-4'>
                <UiTypography variant="h1">
					Details
                </UiTypography>

                <UiElement className="flex flex-col gap-y-4">
                    <UiTypography variant='p'>Ceci est la page détail de la bière que tu as choisie.</UiTypography>
                </UiElement>

                <UiElement className="flex gap-x-2">
                    <button onClick={ () => GoToHome() }>Horreur, sort moi de là</button>
                    <button onClick={ () => GoToCatalog() }>Ramène moi au catalogue stp</button>
                </UiElement>
            </UiElement>
        </PageComponent>
    );
};

export default Details;
