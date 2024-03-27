// @core
import type { IPageProps } from '@core/models/Route.type';
// @ui
import UiElement from '@ui/components/layout/Element/UiElement';
import HeaderComponent from './HeaderComponent';

const LayoutComponent = ({ children }: IPageProps): JSX.Element => (
    <UiElement className='flex flex-col h-full overflow-hidden'>
        <HeaderComponent />
        <UiElement className='flex-col flex-1 overflow-auto'>
            { children }
        </UiElement>
    </UiElement>
);

export default LayoutComponent;
