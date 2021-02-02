import { ComponentProps } from 'react';

export interface IProps extends ComponentProps<'div'> {
  children: any;
  header: string;
  isOpen?: boolean;
  onToggle: () => void;
}
