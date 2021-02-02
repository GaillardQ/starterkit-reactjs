import { ComponentProps } from 'react';

export interface IProps extends ComponentProps<'div'> {
  className?: string;
  content?: any | null;
  disabled?: boolean;
  footer?: any | null;
  fullSize?: boolean;
  header?: any | null;
  headerConfig?: any | null;
  type?: 'primary' | 'secondary';
}
