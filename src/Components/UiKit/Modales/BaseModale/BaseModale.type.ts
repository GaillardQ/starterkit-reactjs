import { ComponentProps } from 'react';

export interface IProps extends ComponentProps<'div'> {
  content: any;
  title: any;
  size?: 'small' | 'medium' | 'large';
}
