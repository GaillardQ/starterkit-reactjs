import { ComponentProps } from 'react';

export interface IProps extends ComponentProps<'div'> {
  content: any;
  title?: string;
}
