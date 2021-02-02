// React libs
import { ElementType } from 'react';
import { TypographyProps } from '@material-ui/core/Typography';

export interface IProps extends TypographyProps {
  component?: ElementType;
}
