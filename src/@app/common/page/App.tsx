// Misc libs
import { useCallback, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
// @app/common
import { moduleRouter as routesCommon } from '@app/common/resources/misc/Router';
// @app/test
import { moduleRouter as routesTest } from '@app/test/resources/misc/Router';
// @core
import RouterComponent from '@core/components/RouteComponent';
import type { User } from '@core/models/User.type';
import useLocalStorage from '@core/services/LocalStoragService';
import '@core/resources/assets/css/index.css';
// @ui
import UiElement from '@ui/components/layout/Element/UiElement';

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
                if (isAuthenticated) {
                    const token = await getAccessTokenSilently();
                    const user = await getIdTokenClaims() as User;
                    const enhancedUser = {
                        ...user
                    };

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
                modules={ {
                    common: routesCommon,
                    test: routesTest
                } }

            />
        </UiElement>
    );
};

export default App;
