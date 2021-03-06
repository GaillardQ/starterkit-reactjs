import { ComponentProps } from 'react';

export interface IProps extends ComponentProps<'div'> {
  type: 'horizontal' | 'vertical';
}
