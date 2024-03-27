// Misc libs
import { useEffect } from 'react';
import { capitalize } from 'lodash';
// @app/test
import type { PokemonDetails } from '@app/test/models/PokemonDetailsModel';
// @core
import type { TCallReturn } from '@core/providers/NetworkProvider';
// @ui
import UiElement from '@ui/components/layout/Element/UiElement';
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IParams {
  details: TCallReturn<PokemonDetails>;
  id: string;
}
const PokemonDetailsComponent = (params: IParams): JSX.Element => {

    // Variables
    const {
        details,
        id
    } = params;
    const controller = new AbortController();
    const { signal } = controller;

    // Effects
    useEffect(() => {
        details.fetch({
            callHeaders: { signal },
            endpointUpdates: [{
                key: '[POKEMON_ID]',
                newValue: id
            }]
        });
        return () => controller.abort();
    }, [id]);

    return (
        <UiElement className='flex flex-col gap-y-4'>
            <UiElement className='flex gap-x-1'>
                <UiTypography is='h1' className='flex gap-x-1'>
                    <UiElement className='flex gap-x-1 items-center'>
                        <FontAwesomeIcon icon='chevron-right' />
                        { capitalize((details?.data?.name ?? '...')) }
                    </UiElement>
                    <UiElement>
                        (#{ details?.data?.id ?? '...' })
                    </UiElement>
                </UiTypography>
            </UiElement>

        </UiElement>
    );
};

export default PokemonDetailsComponent;
