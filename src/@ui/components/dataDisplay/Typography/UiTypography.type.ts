// @core
import type { TColors } from '@ui/utils/colorLibrary';
import type { HTMLProps } from 'react';

export type TTextWeight =
  'hairline' | 'thin' | 'light' | 'normal'| 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';

type TTextAppearance =
  'italic' | 'underline' | 'lowercase' | 'uppercase' | 'capitalize';
export interface IUiTypography extends HTMLProps<HTMLDivElement> {
  /** Text appearance */
  appearance?: TTextAppearance[] | string[];
  /** Other classes */
  className?: string;
  /** Text color */
  color?: TColors;
  /** Text font */
  font?: 'text' | 'number';
  /** Letter spacing */
  hasButtonLetterSpacing?: boolean;
  /** Component of the typography container */
  is?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span' | 'p';
  /** Text size */
  size?: number;
  /** Text weight */
  weight?: TTextWeight | string;
}
