import { ComponentProps } from 'react';

export interface IProps extends ComponentProps<'div'> {
  handleClose: (id: string | undefined, result: boolean) => void;
  id: string | undefined;
  isOpened: boolean;
  message: string;
}
