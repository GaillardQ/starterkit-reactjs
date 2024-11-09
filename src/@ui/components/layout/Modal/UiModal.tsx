// Misc libs
import { Fragment } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// @ui
import type { IUiModal } from '@ui/components/layout/Modal/UiModal.type';
import UiButton from '@ui/components/input/Button/UiButton';

const UiModal = (props: IUiModal): JSX.Element => {
    // Variables
    const {
        actions,
        children,
        handleClose,
        isOpen,
        title
    } = props;

    return (
        <Dialog
            onClose={ handleClose }
            open={ isOpen }
            PaperProps={ {
                className: 'dark:!bg-gray-700'
            } }
        >
            { title && (
                <Fragment>
                    <DialogTitle sx={ { m: 0, p: 2 } }>
                        { title }
                    </DialogTitle>
                    <UiButton
                        variant="text"
                        icon={ 'times' }
                        onClick={ handleClose }
                        className='absolute right-2 top-2'
                    />
                </Fragment>
            ) }
            <DialogContent dividers>
                { children }
            </DialogContent>

            { actions && (
                <DialogActions>
                    { actions.map((action, index) => <Fragment key={ index }>{ action }</Fragment>) }
                </DialogActions>
            ) }
        </Dialog>
    );
};

export default UiModal;
