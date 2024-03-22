// Misc libs
import { useNavigate } from 'react-router-dom';
// @app/common
import PageComponent from '@app/common/components/PageComponent';
// @app/test
import { moduleRoute as routesTest } from '@app/test/resources/misc/Router';
// @core
import '@core/resources/assets/css/index.css';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiElement from '@ui/components/layout/Element/UiElement';
import UiButton from '@ui/components/input/UiButton';

const Details = (): JSX.Element => {
    // Hooks
    const navigate = useNavigate();

    // Handlers
    const GoToHome = (): void => {
        navigate(routesTest.routes.Home.uri());
    };

    const GoToCatalog = (): void => {
        navigate(routesTest.routes.Pokemon.uri());
    };

    return (
        <PageComponent>
            <UiElement className='flex flex-col gap-y-4'>
                <UiTypography is="h1">
					Details
                </UiTypography>

                <UiElement className="flex flex-col gap-y-4">
                    <UiTypography is='p'>Ceci est la page détail du Pokemon que tu as choisie.</UiTypography>
                </UiElement>

                <UiElement className="flex gap-x-2">
                    <UiButton label="Accueil"
                        onClick={ () => GoToHome() }
                    />
                    <UiButton label="Catalogue"
                        onClick={ () => GoToCatalog() }
                    />
                </UiElement>
            </UiElement>
        </PageComponent>
    );
};

export default Details;
