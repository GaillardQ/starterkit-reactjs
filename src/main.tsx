import React from 'react';
import ReactDOM from 'react-dom/client';
import fontawesome from '@fortawesome/fontawesome';
import faIcons from '@fortawesome/fontawesome-free-solid';
import { BrowserRouter } from 'react-router-dom';
import App from './@app/common/page/app';
import Authentication from '@core/providers/AuthenticationProvider';

fontawesome.library.add(faIcons);

const temp = document.createElement('div');

const render = (): void => {

    // grab the container
    const container = document.getElementById('root');
    // set id
    temp.id = 'root';
    // and replace the child
    container?.replaceWith(temp);
};

ReactDOM
    .createRoot(
        temp
    )
    .render(
        <React.StrictMode>
            <BrowserRouter>
                <Authentication>
                    <App render={ render } />
                </Authentication>
            </BrowserRouter>
        </React.StrictMode>
    );
