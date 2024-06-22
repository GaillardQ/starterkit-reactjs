// Misc libs
import { useAuth0 } from '@auth0/auth0-react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useCallback, useEffect, useState } from 'react';
// @app/common
import { moduleRouter as routesCommon } from '@app/common/resources/misc/Router';
// @app/test
import { moduleRouter as routesTest } from '@app/test/resources/misc/Router';
// @core
import RouterComponent from '@core/components/RouteComponent';
import type { User } from '@core/models/User.type';
import '@core/resources/assets/css/index.css';
import useLocalStorage from '@core/services/LocalStoragService';
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
	const defaultTheme = createTheme();

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
		<ThemeProvider theme={defaultTheme}>
			<CssBaseline />
			<UiElement variant='page'>
				<RouterComponent
					modules={ {
						common: routesCommon,
						test: routesTest
					} }

				/>
			</UiElement>
		</ThemeProvider>
    );
};

export default App;
