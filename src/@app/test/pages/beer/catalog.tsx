// Misc libs
import { useNavigate } from 'react-router-dom';
// @app
import PageComponent from '@app/common/components/PageComponent';
import { moduleRoute as routesTest } from '@app/test/resources/misc/Router';
// @core
import '@core/resources/assets/css/index.css';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiElement from '@ui/components/layout/Element/UiElement';
import useBeerProvider from '@app/test/providers/BeerProvider';
import { useEffect, useState } from 'react';

const Catalog = (): JSX.Element => {
    // States
    const [catalog, setCatalog] = useState<unknown[]>([]);

    // Hooks
    const navigate = useNavigate();
    const beerProvider = useBeerProvider();

    // Handlers
    const GoToHome = (): void => {
        navigate(routesTest.routes.Home.uri());
    };

    const GoToDetails = (): void => {
        navigate(routesTest.routes.Bieres.childs!.Details.uri({ id: '666' }));
    };

    // Effects
    useEffect(() => {
        if (beerProvider.data.catalog.isExecuted && beerProvider.data.catalog.isSuccess) {
            console.log('catalog', beerProvider.data.catalog.data);
            setCatalog(beerProvider.data.catalog.data || []);
        }
    }, [beerProvider.data.catalog]);

    return (
        <PageComponent>
            <UiElement className='flex flex-col gap-y-4'>
                <UiTypography variant="h1">
                  Catalogue Brewdog
                </UiTypography>

                <UiElement className="flex flex-col gap-y-4">
                    <UiTypography variant='p'>{ 'Il me fallait une API pour tester la partie "réseau"' }</UiTypography>
                </UiElement>

                <UiElement className='flex flex-col gap-y-4'>
                    {
                        catalog.map(
                            (b) => (<UiTypography key={ (b as Record<string, string>).id }>{ (b as Record<string, string>).name }</UiTypography>)
                        )
                    }
                </UiElement>

                <UiElement className="flex gap-x-2">
                    <button onClick={ () => GoToHome() }>Horreur, sort moi de là</button>
                    <button onClick={ () => GoToDetails() }>Dis moi en plus stp</button>
                </UiElement>
            </UiElement>
        </PageComponent>
    );
};

export default Catalog;
