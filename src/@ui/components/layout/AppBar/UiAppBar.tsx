// Misc libs
import AppBar from '@mui/material/AppBar';
// @ui
import type { IUiAppBar } from '@ui/components/layout/AppBar/UiAppBar.type';

const UiAppBar = (props: IUiAppBar): JSX.Element => {
    // Variables
    const { position, children } = props;

    return (
        <AppBar position={ position }>
            { children }
        </AppBar>
    );
};

export default UiAppBar;
