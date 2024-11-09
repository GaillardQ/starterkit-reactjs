// Misc libs
import { useEffect, useMemo } from 'react';
import type { RegisterOptions, Validate } from 'react-hook-form';
import { useForm } from 'react-hook-form';
// @app
import PokemonTypeEnum from '@app/test/models/PokemonTypeEnum';
// @core
import type { TFormDefinition, TFormModel } from '@core/form/models/Form.type';
import { integer, required } from '@core/form/providers/validation';
// @ui
import type { IUiSelectOption } from '@ui/components/input/Select/UiSelect.type';

export type TPokemonFormData = {
	id: number;
	name: string;
	type: PokemonTypeEnum
}

const usePokemonForm = (pokemon?: TPokemonFormData): TFormDefinition<TPokemonFormData> => {

    const methods = useForm<TPokemonFormData>({
        defaultValues: useMemo(() => pokemon, [pokemon])
    });

    // Effects
    useEffect(() => {
        methods.reset(pokemon);
    }, [pokemon]);

    const fieldsDefinition: TFormModel<TPokemonFormData> = [
        {
            label: 'Id',
            name: 'id',
            placeholder: 'Id du Pokémon',
            rules: {
                required,
                validate: {
                    integer: integer as Validate<number, TPokemonFormData>
                }
            } as RegisterOptions<TPokemonFormData>,
            type: 'number',
        },
        {
            label: 'Nom',
            name: 'name',
            placeholder: 'Nom du Pokémon',
            rules: {
                required
            },
            type: 'text',
        },
        {
            label: 'Type',
            name: 'type',
            placeholder: 'Type d\'exercice',
            rules: {
                required,
            },
            selectOptions: {
                options: PokemonTypeEnum.values().reduce((list: IUiSelectOption[], value) => ([
                    ...list,
                    {
                        id: value.value.toString(),
                        value: value.code,
                        children: value.text
                    }
                ]), [])
            },
            type: 'select',
        },
    ];

    return {
        fields: fieldsDefinition,
        methods
    };
};

export default usePokemonForm;
