// @app
import { moduleRoute as routesTest } from '@app/test/resources/misc/Router';
// @core
import RouterComponent from '@core/components/RouteComponent';
import '@core/resources/assets/css/index.css';
// @ui
import UiElement from '@ui/components/layout/Element/UiElement';

const App = (): JSX.Element => (
    <UiElement variant='page'>
        <RouterComponent modules={ { test: routesTest } } />
    </UiElement>
);

export default App;
