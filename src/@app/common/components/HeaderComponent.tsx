// Misc libs
import { useNavigate } from 'react-router-dom';
// @app/test
import { moduleRouter as routesTest } from '@app/test/resources/misc/Router';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiButton from '@ui/components/input/UiButton';
import UiElement from '@ui/components/layout/Element/UiElement';

const HeaderComponent = (): JSX.Element => {

    // Hooks
    const navigate = useNavigate();

    // Handlers
    const GoToHome = (): void => {
        navigate(routesTest.routes.Home.uri());
    };

    return (
        <UiElement
            variant="container"
            color='secondary'
            className="flex items-center"
        >
            <UiElement className="flex-1">
                <UiTypography
                    weight='bold'
                    size={ 36 }
                >
                  Starterkit - ReactJS
                </UiTypography>
            </UiElement>
            <UiElement>
                <UiButton
                    variant='text'
                    size='xlarge'
                    icon="home"
                    onClick={ () => GoToHome() }
                />
            </UiElement>
        </UiElement>
    );
};

export default HeaderComponent;
