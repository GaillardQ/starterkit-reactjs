import React from 'react';
import ReactDOM from 'react-dom/client';
import fontawesome from '@fortawesome/fontawesome';
import faIcons from '@fortawesome/fontawesome-free-solid';
import { BrowserRouter } from 'react-router-dom';
import App from './@core/pages/App';

fontawesome.library.add(faIcons);

ReactDOM
    .createRoot(
      document.getElementById('root')!
    )
    .render(
        <React.StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </React.StrictMode>,
    );
