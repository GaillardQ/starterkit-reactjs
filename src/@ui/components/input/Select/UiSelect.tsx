// Misc libs
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { forwardRef, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
// @ui
import type { TUiSelect } from '@ui/components/input/Select/UiSelect.type';

const UiSelect = forwardRef<HTMLSelectElement, TUiSelect>((props, ref): JSX.Element => {
    // Variables
    const {
        defaultValue,
        label,
        options,
        variant = 'standard',
        ...rest
    } = props;

    const inputId = uuidv4();

    // States
    const [fieldDefaultValue, setFieldDefaultValue] = useState<string | undefined>(defaultValue);

    // Effects
    useEffect(() => {
        setFieldDefaultValue(defaultValue);
    }, [defaultValue]);

    return (
        <FormControl variant={ variant }>
            <InputLabel id={ inputId }>{ label }</InputLabel>
            <Select
                { ...(label ? { labelId: inputId }: {}) }
                ref={ ref }
                { ...rest }
                defaultValue={ fieldDefaultValue ?? '' }
            >
                { options.map((o) => (
                    <MenuItem key={ o.id } value={ o.value }>{ o.children }</MenuItem>
                )) }
            </Select>
        </FormControl>
    );
});

export default UiSelect;
