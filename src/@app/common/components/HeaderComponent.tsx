// Misc libs
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
// @app/common
import { moduleRouter as routesCommon } from '@app/common/resources/misc/Router';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiButton from '@ui/components/input/Button/UiButton';
import UiAppBar from '@ui/components/layout/AppBar/UiAppBar';
import UiElement from '@ui/components/layout/Element/UiElement';

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
        <UiAppBar position="static">
            <UiElement
                variant="container"
				size='medium'
                className="flex items-center"
            >
                <UiElement className="flex-1">
                    <UiTypography
						color="white"
                        weight='bold'
                        size={ 30 }
                    >
                  Starterkit - ReactJS
                    </UiTypography>
                </UiElement>
                <UiElement className='flex items-center gap-x-2'>
                    <UiButton
                        variant='text'
                        size='xlarge'
                        icon="home"
						color="white"
                        onClick={ () => GoToHome() }
                    />
                    <UiButton
                        variant='text'
                        size='xlarge'
                        icon="sign-out-alt"
						color="white"
                        onClick={ () => SignOut() }
                    />
                </UiElement>
            </UiElement>
        </UiAppBar>
    );
};

export default HeaderComponent;
