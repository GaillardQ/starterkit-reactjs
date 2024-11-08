// Misc libs
import { forwardRef } from 'react';
import TextField from '@mui/material/TextField';
// @ui
import type { IUiTextfield } from '@ui/components/input/Textfield/UiTextfield.type';
import UiElement from '@ui/components/layout/Element/UiElement';

const UiTextfield = forwardRef<HTMLInputElement, IUiTextfield>((props, ref): JSX.Element => {
    // Variables
    const {
        variant = 'standard',
        ...rest
    } = props;

    return (
        <UiElement>
            <TextField
                variant={ variant }
                ref={ ref }
                { ...rest }
            />
        </UiElement>
    );
});

export default UiTextfield;
