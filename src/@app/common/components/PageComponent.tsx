// @app/common
import LayoutComponent from '@app/common/components/LayoutComponent';
// @core
import PageBaseComponent from '@core/components/PageComponent';
import type { IPageProps } from '@core/models/Route.type';
// @ui
import UiElement from '@ui/components/layout/Element/UiElement';

const PageComponent = ({ children }: IPageProps): JSX.Element => (
    <PageBaseComponent>
        <LayoutComponent>
            <UiElement variant="container">
                { children }
            </UiElement>
        </LayoutComponent>
    </PageBaseComponent>
);

export default PageComponent;
