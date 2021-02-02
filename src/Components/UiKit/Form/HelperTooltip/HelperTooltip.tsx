// React libs
import React, { FC } from 'react';
import { Tooltip } from '@material-ui/core';
import HelpIcon from '@material-ui/icons/Help';
// Type
import * as Types from './HelperTooltip.type';

const HelperTooltip: FC<Types.IProps> = ({ message }) => {
  return (
    <Tooltip
      title={<div dangerouslySetInnerHTML={{ __html: message }} />}
      classes={{ popper: 'whitespace-pre-line' }}
      data-i18n='[html]content.body'
    >
      <div>
        <HelpIcon className='cursor-pointer ml-2 text-lg' />
      </div>
    </Tooltip>
  );
};

HelperTooltip.propTypes = {};

export default HelperTooltip;
