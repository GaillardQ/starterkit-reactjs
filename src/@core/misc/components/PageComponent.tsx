// @core
import type { IPageProps } from '@core/misc/models/Route.type';
// @ui
import UiElement from '@ui/components/layout/Element/UiElement';

const PageComponent = ({ children }: IPageProps): JSX.Element => (
    <UiElement variant="page">
        { children }
    </UiElement>
);

export default PageComponent;
