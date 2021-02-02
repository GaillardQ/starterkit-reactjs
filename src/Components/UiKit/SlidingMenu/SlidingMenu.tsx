// React libs
import React, { FC } from 'react';
import CloseIcon from '@material-ui/icons/Close';
// Type
import * as Types from './SlidingMenu.type';

const SlidingMenu: FC<Types.IProps> = ({
  children,
  header,
  isOpen,
  onToggle,
}) => {
  return (
    <div
      className={`absolute bottom-8 flex h-40 max-w-9/10 z-1100 ${
        isOpen ? 'right-0' : ''
      }`}
      style={{
        left: `${isOpen ? 'auto' : 'calc(100% - 1.5rem)'}`,
      }}
    >
      <div
        className={`bg-selection text-selection-inverse cursor-pointer flex items-center justify-center rounded-l w-6`}
        onClick={onToggle}
      >
        {isOpen && <CloseIcon className='absolute top-0' onClick={onToggle} />}
        <div className='font-bold rotate-90 whitespace-no-wrap'>{header}</div>
      </div>
      <div
        className={`bg-main-light overflow-hidden ${isOpen ? '' : 'hidden'}`}
      >
        <div className='h-full mx-3 overflow-x-auto'>{children}</div>
      </div>
    </div>
  );
};

SlidingMenu.defaultProps = {
  isOpen: false,
};

export default SlidingMenu;
