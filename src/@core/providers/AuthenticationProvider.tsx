// Misc libs
import { Fragment }      from 'react';
import {
    Auth0Provider,
    useAuth0
}                        from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import type {
    AppState,
    Auth0ProviderOptions
}                        from '@auth0/auth0-react';
import type { IPageProps } from '@core/models/Route.type';

const Wrapper = ({ children }: IPageProps): JSX.Element => {

    // Hooks
    const { error, isAuthenticated, logout } = useAuth0();

    // Misc
    if (error) {
        if (isAuthenticated) {
            logout({
                logoutParams: {
                    returnTo: window.location.origin
                }
            });
        }
    }

    return <Fragment>{ children }</Fragment>;
};

const Authentication = ({ children }: IPageProps): JSX.Element => {
    // Hooks
    const navigate = useNavigate();

    const settings: Auth0ProviderOptions = {
        domain: import.meta.env.VITE_API_AUTH || '',
        clientId: import.meta.env.VITE_API_AUTH_ID || '',
        useRefreshTokens: true,
        authorizationParams: {
            audience: 'myapp-gate',
            scope: 'openid profile email',
            redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL
        },
        cacheLocation: 'localstorage',
    };

    // Handlers
    const onRedirectCallback = (appState?: AppState): void => {
        navigate((appState && appState.returnTo) || window.location.pathname);
    };

    return (
        <Auth0Provider onRedirectCallback={ onRedirectCallback } { ...settings } >
            <Wrapper>{ children }</Wrapper>
        </Auth0Provider>
    );
};

export default Authentication;
