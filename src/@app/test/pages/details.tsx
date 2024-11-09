// Misc libs
import { useNavigate, useParams } from 'react-router-dom';
// @app/common
import PageComponent from '@app/common/components/PageComponent';
// @app/test
import { moduleRouter as routesTest } from '@app/test/resources/misc/Router';
// @core
import '@core/misc/resources/assets/css/index.css';
// @ui
import PokemonDetailsComponent from '@app/test/components/PokemonDetailsComponent';
import usePokemonProvider from '@app/test/providers/PokemonProvider';
import UiButton from '@ui/components/input/Button/UiButton';
import UiElement from '@ui/components/layout/Element/UiElement';

const Details = (): JSX.Element => {
    // Hooks
    const navigate = useNavigate();
    const provider = usePokemonProvider();
    const { id: pokemonId } = useParams();

    // Handlers
    const GoToCatalog = (): void => {
        navigate(routesTest.routes.Catalog.uri());
    };

    return (
        <PageComponent>
            <UiElement className='flex flex-col gap-y-4'>
                <PokemonDetailsComponent details={ provider.data.details } id={ pokemonId ?? '' } />

                <UiElement className="flex gap-x-2">
                    <UiButton label="Catalogue"
                        onClick={ () => GoToCatalog() }
                    />
                </UiElement>
            </UiElement>
        </PageComponent>
    );
};

export default Details;
