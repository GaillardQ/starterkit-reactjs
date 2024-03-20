// @app/common
import LayoutComponent from '@app/common/components/LayoutComponent';
// @core
import PageBaseComponent from '@core/components/PageComponent';
import type { IPageProps } from '@core/models/Route.type';

const PageComponent = ({ children }: IPageProps): JSX.Element => (
    <PageBaseComponent>
        <LayoutComponent>
            { children }
        </LayoutComponent>
    </PageBaseComponent>
);

export default PageComponent;
