// React libs
import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Modal } from '@material-ui/core';
// Components
import BaseModale from '../BaseModale/BaseModale';
import Button from '../../Button/Button';
import Typography from '../../Typography/Typography';
// Type
import * as Types from './ConfirmModale.type';

const ConfirmModale: FC<Types.IProps> = ({
  handleClose,
  id,
  isOpened,
  message,
}) => {
  // Variables
  const { t } = useTranslation(['common']);

  // Renders
  const getContent = () => (
    <div>
      <Typography variant='h4' className='text-center mb-4'>
        {message}
      </Typography>
      <div className='flex itmes-center justify-center'>
        <Button
          variant='text'
          size='large'
          onClick={() => handleClose(id, false)}
        >
          {t('common:modales.confirm.cancel')}
        </Button>
        <Button
          variant='text'
          size='large'
          onClick={() => handleClose(id, true)}
        >
          {t('common:modales.confirm.confirm')}
        </Button>
      </div>
    </div>
  );
  return (
    <Modal open={isOpened} onClose={() => handleClose(id, false)}>
      <div>
        <BaseModale
          content={getContent()}
          title={t('common:modales.confirm.title')}
          size='small'
        />
      </div>
    </Modal>
  );
};

ConfirmModale.propTypes = {
  handleClose: PropTypes.func.isRequired,
  id: PropTypes.string,
  isOpened: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
};

export default ConfirmModale;
