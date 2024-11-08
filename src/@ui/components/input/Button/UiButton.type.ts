// Misc libs
import type { ButtonHTMLAttributes } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
// @ui
import type { TColor, TSize, TStatus } from '@ui/resources/type/Common.type';

export interface IUiButton extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'css'|'type'> {
  /** Theme that define color */
  color?: TColor | TStatus;
  /** Define if button is disabled or not */
  isDisabled?: boolean;
  /** Icon to display */
  icon?: IconProp;
  /** Icon size */
  iconSize?: number;
  /** Button alignment */
  alignment?: 'left'|'right';
  /** Displays a loading state */
  isLoading?: boolean;
  /** Label of the button */
  label?: string;
  /** Size of the component */
  size?: TSize;
  /** Variant that define the style of the container */
  variant?: 'text' | 'contained' | 'outlined' | 'square';
  /** Tab index */
  tabIndex?: number;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** is button content center */
  isCenter?: boolean;
}
