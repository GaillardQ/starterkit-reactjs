// @app
import { moduleRouter as routesTest } from '@app/test/resources/misc/Router';
import { useAuth0 } from '@auth0/auth0-react';
// @core
import RouterComponent from '@core/components/RouteComponent';
import '@core/resources/assets/css/index.css';
// @ui
import UiElement from '@ui/components/layout/Element/UiElement';
import { useCallback, useEffect, useState } from 'react';
import type { User } from '@core/models/User.type';
import useLocalStorage from '@core/services/LocalStoragService';

interface IProps {
  render: () => void
}

const App = ({ render }: IProps): JSX.Element => {
    // States
    const [, setUser]        = useState<User>();
    const [, setAccessToken] = useState<string>();
    // Hooks
    const {
        isLoading: isAuth0Loading,
        getAccessTokenSilently,
        getIdTokenClaims,
        isAuthenticated
    } = useAuth0();
    const localStorageProvider = useLocalStorage({ access_token: 'access_token' });

    // Callbacks
    const loadAuth = useCallback(
        async () => {
            try {
                console.log('isAuthenticated', isAuthenticated);
                if (isAuthenticated) {
                    const token = await getAccessTokenSilently();
                    console.log('token', token);
                    const user = await getIdTokenClaims() as User;
                    const enhancedUser = {
                        ...user
                    };
                    console.log('user', user);

                    if(token) {
                        localStorageProvider.storageSet('access_token', token);
                    }
                    setUser(enhancedUser);

                    if(token) {
                        setAccessToken(token);
                    }
                }
            } finally {
                render();
            }
        }, [
            render,
            isAuthenticated,
            getIdTokenClaims,
            getAccessTokenSilently
        ]);

    // Effects
    useEffect(() => {
        loadAuth();
    }, [
        loadAuth,
        isAuth0Loading
    ]);

    return (
        <UiElement variant='page'>
            <RouterComponent
                modules={ { test: routesTest } }
                defaultRoute={ routesTest.routes.Home.uri() }
            />
        </UiElement>
    );
};

export default App;
