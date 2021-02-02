import { ComponentProps } from 'react';

export interface IProps extends ComponentProps<'div'> {
  message?: any;
  type?: 'text' | 'contained';
  color?: 'primary' | 'secondary';
}
