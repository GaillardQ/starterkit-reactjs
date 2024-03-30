// Misc libs
import { useNavigate } from 'react-router-dom';
// @app/common
import { moduleRouter as routesCommon } from '@app/common/resources/misc/Router';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiButton from '@ui/components/input/UiButton';
import UiElement from '@ui/components/layout/Element/UiElement';
import { useAuth0 } from '@auth0/auth0-react';

const HeaderComponent = (): JSX.Element => {

    // Hooks
    const navigate = useNavigate();
    const { logout } = useAuth0();

    // Handlers
    const GoToHome = (): void => {
        navigate(routesCommon.routes.Home.uri());
    };
    const SignOut = (): void => {
        logout({
            logoutParams: {
                returnTo: window.location.origin
            }
        });
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
            <UiElement className='flex items-center gap-x-2'>
                <UiButton
                    variant='text'
                    size='xlarge'
                    icon="home"
                    onClick={ () => GoToHome() }
                />
                <UiButton
                    variant='text'
                    size='xlarge'
                    icon="sign-out-alt"
                    onClick={ () => SignOut() }
                />
            </UiElement>
        </UiElement>
    );
};

export default HeaderComponent;
