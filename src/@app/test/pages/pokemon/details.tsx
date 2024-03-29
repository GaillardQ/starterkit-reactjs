// Misc libs
import { useNavigate, useParams } from 'react-router-dom';
// @app/common
import PageComponent from '@app/common/components/PageComponent';
// @app/test
import { moduleRouter as routesTest } from '@app/test/resources/misc/Router';
// @core
import '@core/resources/assets/css/index.css';
// @ui
import UiElement from '@ui/components/layout/Element/UiElement';
import UiButton from '@ui/components/input/UiButton';
import PokemonDetailsComponent from '@app/test/components/PokemonDetailsComponent';
import usePokemonProvider from '@app/test/providers/PokemonProvider';

const Details = (): JSX.Element => {
    // Hooks
    const navigate = useNavigate();
    const provider = usePokemonProvider();
    const { id: pokemonId } = useParams();

    // Handlers
    const GoToCatalog = (): void => {
        navigate(routesTest.routes.Pokemon.uri());
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
