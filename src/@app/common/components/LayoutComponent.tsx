// @core
import type { IPageProps } from '@core/models/Route.type';
// @ui
import UiElement from '@ui/components/layout/Element/UiElement';
import HeaderComponent from './HeaderComponent';

const LayoutComponent = ({ children }: IPageProps): JSX.Element => (
    <UiElement>
        <HeaderComponent />
        { children }
    </UiElement>
);

export default LayoutComponent;
