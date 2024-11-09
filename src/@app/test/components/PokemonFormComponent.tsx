// Misc libs
// @app
import type { PokemonDetails } from '@app/test/models/PokemonDetailsModel';
import type { TPokemonFormData } from '@app/test/providers/PokemonFormProvider';
import usePokemonForm from '@app/test/providers/PokemonFormProvider';
// @core
import FormFieldComponent from '@core/form/components/FormFieldComponent';
// @ui
import UiButton from '@ui/components/input/Button/UiButton';
import UiElement from '@ui/components/layout/Element/UiElement';
import { useEffect, useState } from 'react';

type TPokemonFormProps = {
	pokemon?: PokemonDetails
}
const PokemonFormComponent = (props: TPokemonFormProps): JSX.Element => {
    // Variables
    const { pokemon } = props;

    // States
    const [defaultValues, setDefaultValues] = useState<TPokemonFormData | undefined>();

    // Effects
    useEffect(() => {
        setDefaultValues({
            id: pokemon?.id ?? 0,
            name: pokemon?.name ?? '',
            type: pokemon?.types && (pokemon.types as unknown[]).length > 0
                ? ((pokemon.types as unknown[])[0] as {type: {name: string}}).type.name
                : ''
        });
    }, [pokemon]);

    // Hooks
    const { fields, methods } = usePokemonForm(defaultValues);

    // Handlers
    const handleFormSubmit = (data: unknown): void => {
        console.info('Form data submitted: ', data);
    };

    return (
        <form onSubmit={ methods.handleSubmit(handleFormSubmit) }>
            <UiElement className='flex flex-col gap-y-4'>
                <FormFieldComponent
                    field={ { ...fields.find((f) => f.name == 'id') } }
                    methods={ methods }
                />
                <FormFieldComponent
                    field={ { ...fields.find((f) => f.name == 'name') } }
                    methods={ methods }
                />
                <FormFieldComponent
                    field={ { ...fields.find((f) => f.name == 'type') } }
                    methods={ methods }
                />
                <UiButton type="submit" label="Ajouter" />
            </UiElement>
        </form>

    );

};

export default PokemonFormComponent;
