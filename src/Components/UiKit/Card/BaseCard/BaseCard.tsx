// React libs
import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// Components
import Typography from '../../Typography/Typography';
// Type
import * as Types from './BaseCard.type';

function BaseCard(props: Types.IProps) {
  const {
    className,
    content,
    disabled,
    footer,
    fullSize,
    header,
    headerConfig,
    type,
  } = props;

  const getColorClasses = () => {
    switch (type) {
      case 'primary': {
        return 'bg-main-light text-gray-700';
      }
      case 'secondary': {
        return 'bg-main-light text-gray-700';
      }
      default:
        return '';
    }
  };

  const getHeaderClassName = () => {
    const bg = headerConfig.bg ? '' : 'bg-main-light';
    const text = headerConfig.text ? '' : 'text-gray-700';

    return `mb-8 ${bg} ${text}`;
  };

  const getHeaderStyle = () => {
    const bg = headerConfig.bg ? headerConfig.bg : '';
    const text = headerConfig.text ? headerConfig.text : '';

    return {
      backgroundColor: bg,
      color: text,
    };
  };
  return (
    <Card
      className={`flex flex-col max-h-full m-2 overflow-hidden p-5 rounded-xl w-full ${getColorClasses()} ${className}`}
    >
      {header && (
        <Typography
          variant='h1'
          className={`${getHeaderClassName()}`}
          style={getHeaderStyle()}
        >
          {header}
        </Typography>
      )}
      <CardContent className='flex flex-1 flex-col max-h-full overflow-auto p-1'>
        {content}
      </CardContent>
      {footer && <CardActions>{footer}</CardActions>}
      <Backdrop
        open={disabled || false}
        className={`absolute rounded w-full z-0 ${!fullSize ? 'mt-8' : 'mt-0'}`}
      />
    </Card>
  );
}

BaseCard.defaultProps = {
  className: '',
  content: null,
  disabled: false,
  footer: null,
  fullSize: false,
  header: null,
  type: 'primary',
  headerConfig: {},
};

export default BaseCard;
