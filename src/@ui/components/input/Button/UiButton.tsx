// Misc libs
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { isEmpty } from 'lodash';
// @ui
import UiTypography from '@ui/components/dataDisplay/Typography/UiTypography';
import UiElement from '@ui/components/layout/Element/UiElement';
import {
    getBackgroundActiveColor,
    getBackgroundColor,
    getBackgroundFocusColor,
    getBackgroundHoverColor,
    getBorderColor,
    getStatusBackgroundActiveColor,
    getStatusBackgroundColor,
    getStatusBackgroundFocusColor,
    getStatusBackgroundHoverColor,
    getStatusBorderColor,
    getStatusColor
} from '@ui/utils/colorLibrary';
import type { IUiButton } from '@ui/components/input/Button/UiButton.type';
import type { TColors } from '@ui/utils/colorLibrary';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import type { IUiTypography } from '@ui/components/dataDisplay/Typography/UiTypography.type';
// @ui

const UiButton = (props: IUiButton): JSX.Element => {
    // Variables
    const {
        icon,
        label,
        isLoading,
        className,
        alignment,
        isDisabled,
        tabIndex = 0,
        type = 'button',
        size = 'medium',
        isCenter = false,
        color = 'primary',
        variant = 'contained',
        ...rest
    } = props;

    const hasIconContainer = variant === 'square' || (variant === 'text' && !label);

    const isColorStatus = color === 'warning' || color === 'info' || color === 'loading' || color === 'error' || color === 'success';

    const hasTransitionClasses = variant !== 'square';

    const hasLabel = !isEmpty(label);

    // Getters
    const getDynamicClasses = (): string => {
        const containedClasses = [
            `${isColorStatus ? getStatusBackgroundColor(color) : getBackgroundColor(color)} border-transparent`,
            `${isColorStatus ? getStatusBackgroundHoverColor(color) : getBackgroundHoverColor(color)} hover:bg-opacity-80`,
            `${isColorStatus ? getStatusBackgroundFocusColor(color) : getBackgroundFocusColor(color)}`,
            `${isColorStatus ? getStatusBackgroundActiveColor(color) : getBackgroundActiveColor(color)} active:transition-none`
        ].join(' ');

        const outlinedClasses = [
            `${isColorStatus ? getStatusBackgroundColor(color) : getBackgroundColor(color)} bg-opacity-10`,
            `${isColorStatus ? getStatusBorderColor(color) : getBorderColor(color)} border`,
            `${isColorStatus ? getStatusBackgroundHoverColor(color) : getBackgroundHoverColor(color)} hover:bg-opacity-15`,
            `${isColorStatus ? getStatusBackgroundFocusColor(color) : getBackgroundFocusColor(color)} focus:bg-opacity-20`,
            `${isColorStatus
                ? getStatusBackgroundActiveColor(color)
                : getBackgroundActiveColor(color)
            } active:bg-opacity-25 active:transition-none`
        ].join(' ');

        const squareClasses = [
            `${isColorStatus && getStatusBackgroundColor(color)} bg-opacity-10`,
            `${isColorStatus && getStatusBackgroundHoverColor(color)} hover:bg-opacity-20`,
        ].join(' ');

        const colorClasses = {
            text: `bg-transparent
            ${!hasIconContainer ? isColorStatus ? getStatusBackgroundHoverColor(color) : getBackgroundHoverColor(color) : ''}
        hover:bg-opacity-10`,
            contained: containedClasses,
            outlined: outlinedClasses,
            square: `${squareClasses} hover:border-brand-500`
        };

        const borderClasses = {
            text:       'rounded-lg',
            contained:  'rounded-lg',
            outlined:   'rounded-lg',
            square:     'rounded-lg'
        };

        const disabledColorClasses = {
            text:       'bg-transparent',
            contained:  'border-neutral-200 bg-neutral-200',
            outlined:   'border-neutral-300 bg-transparent',
            square:     'border-neutral-300'
        };

        const cursorClasses = isDisabled || isLoading ? 'cursor-not-allowed' : 'cursor-pointer';

        const sizeClasses = {
            xsmall: {
                text: '',
                contained: 'py-1 px-2',
                outlined: 'py-1 px-2',
                square: hasLabel ? 'w-48 h-12' : 'w-8 h-8'
            },
            small: {
                text: !hasIconContainer && 'py-1 px-1',
                contained: 'py-1 px-2',
                outlined: 'py-1 px-2',
                square: hasLabel ? 'w-56 h-14' : 'w-12 h-12'
            },
            medium: {
                text: !hasIconContainer && 'py-1 px-2',
                contained: 'py-2 px-3',
                outlined: 'py-2 px-3',
                square: hasLabel ? 'w-64 h-16' : 'w-14 h-14'
            },
            large: {
                text: '',
                contained: 'py-3 px-6',
                outlined: 'py-3 px-6',
                square: hasLabel ? 'w-72 h-24' : 'w-20 h-20'
            },
            xlarge: {
                text: '',
                contained: 'py-4 px-8',
                outlined: 'py-4 px-8',
                square: hasLabel ? 'w-80 h-32' : 'w-24 h-24'
            },
        };

        const spacingClasses = {
            xsmall: {
                text: '',
                contained: '',
                outlined: '',
                square: ''
            },
            small: {
                text: '',
                contained: '',
                outlined: '',
                square: ''
            },
            medium: {
                text: '',
                contained: '',
                outlined: '',
                square: ''
            },
            large: {
                text: '',
                contained: '',
                outlined: '',
                square: ''
            },
            xlarge: {
                text: '',
                contained: '',
                outlined: '',
                square: ''
            },
        };

        const variantClasses = {
            text: 'font-bold',
            contained: 'border',
            outlined: 'border',
            square: 'border'
        };

        return [
            variantClasses[variant],
            isDisabled ? disabledColorClasses[variant] : colorClasses[variant],
            sizeClasses[size][variant],
            spacingClasses[size][variant],
            borderClasses[variant],
            cursorClasses
        ].join(' ');
    };

    const getTextProps = (): Partial<IUiTypography> => {
        const textProps = {
            text: {
                xsmall: { size: 10, weight: 'medium' },
                small:  { size: 12, weight: 'semibold' },
                medium: { size: 14, weight: 'semibold' },
                large:  { size: 16, weight: 'bold' },
                xlarge:  { size: 18, weight: 'bolder' },
            },
            contained: {
                xsmall: { size: 10, weight: 'medium' },
                small:  { size: 12, weight: 'semibold' },
                medium: { size: 14, weight: 'semibold' },
                large:  { size: 16, weight: 'bold' },
                xlarge:  { size: 18, weight: 'bolder' },
            },
            outlined: {
                xsmall: { size: 10, weight: 'medium' },
                small:  { size: 12, weight: 'semibold' },
                medium: { size: 14, weight: 'semibold' },
                large:  { size: 16, weight: 'bold' },
                xlarge:  { size: 18, weight: 'bolder' },
            },
            square: {
                xsmall: { size: 10, weight: 'medium' },
                small:  { size: 12, weight: 'medium' },
                medium: { size: 12, weight: 'medium' },
                large:  { size: 14, weight: 'medium' },
                xlarge:  { size: 16, weight: 'bolder' },
            }
        };

        const colorProps: Record<typeof variant, TColors> = {
            text: isColorStatus ? getStatusColor(color) : color,
            contained: isColorStatus
                ? getStatusColor(color) || 'white'
                : 'white',
            outlined: isColorStatus ? getStatusColor(color) : color,
            square: 'neutral-950'
        };

        return {
            ...textProps[variant][size],
            color: isDisabled ? 'neutral-400' : colorProps[variant]
        };
    };

    const getTextClasses = (): string => {
        const alignmentClasses = alignment === 'right'
            ? 'flex-row-reverse space-x-reverse'
            : 'flex-row';

        const baseClasses = 'flex items-center';

        const spacingClasses = {
            xsmall: 'space-x-1',
            small:  'space-x-2',
            medium: 'space-x-3',
            large:  'space-x-3',
            xlarge:  'space-x-4'
        };

        const textClasses = {
            text: {
                xsmall: `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                small:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                medium: `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                large:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                xlarge:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
            },
            contained: {
                xsmall: `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                small:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                medium: `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                large:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                xlarge:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
            },
            outlined: {
                xsmall: `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                small:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                medium: `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                large:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
                xlarge:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]}`,
            },
            square: {
                xsmall: `${baseClasses} ${alignmentClasses} ${spacingClasses[size]} ${isCenter ? 'justify-center' : 'ml-3'} whitespace-nowrap`,
                small:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]} ${isCenter ? 'justify-center' : 'ml-3'} whitespace-nowrap`,
                medium: `${baseClasses} ${alignmentClasses} ${spacingClasses[size]} ${isCenter ? 'justify-center' : 'ml-3'} whitespace-nowrap`,
                large:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]} ${isCenter ? 'justify-center' : 'ml-3'} whitespace-nowrap`,
                xlarge:  `${baseClasses} ${alignmentClasses} ${spacingClasses[size]} ${isCenter ? 'justify-center' : 'ml-3'} whitespace-nowrap`,
            },
        };

        return textClasses[variant][size];
    };

    const getIconContainerClasses = (): string => {
        if (hasIconContainer) {
            const backgroundColorClasses =
              isDisabled
                  ? 'bg-neutral-400'
                  : variant === 'square'
                      ? `${isColorStatus
                          ? getStatusBackgroundColor
                          : ''}`
                      : `${isColorStatus
                          ? getStatusBackgroundHoverColor(color)
                          : getBackgroundHoverColor(color)
                      } hover:bg-opacity-20 duration-500 ease-in-out transition`;

            const iconContainerBaseClasses = 'bg-opacity-20 flex items-center justify-center rounded-full';

            const iconContainerSizeClasses = {
                xsmall: 'h-6 w-6',
                small: 'h-7 w-7',
                medium: 'h-8 w-8',
                large: 'h-9 w-9',
                xlarge: 'h-10 w-10'
            };

            return [
                backgroundColorClasses,
                iconContainerBaseClasses,
                iconContainerSizeClasses[size]
            ].join(' ');
        } else {
            return '';
        }
    };

    const getIconClasses = (): string => {
        const iconSizeClasses = {
            xsmall: 'w-3',
            small: 'w-3.5',
            medium: 'w-4',
            large: 'w-5',
            xlarge: 'w-6'
        };

        const loaderClasses = isLoading ? 'fa-spin' : '';

        return hasIconContainer ? `h-auto ${iconSizeClasses[size]} ${loaderClasses}` : `${loaderClasses}`;
    };

    const getButtonClasses = (): string => {
        const defaultClasses = 'focus:outline-0';
        const transitionClasses = hasTransitionClasses ? 'duration-500 ease-in-out transition' : '';

        return `${defaultClasses} ${transitionClasses} ${getDynamicClasses()} ${className}`;
    };

    return (
        <button
            type={ type }
            tabIndex={ tabIndex }
            className={ getButtonClasses() }
            disabled={ isDisabled || isLoading }
            { ...rest }
        >
            <UiTypography
                { ...getTextProps() }
                hasButtonLetterSpacing
                className={ getTextClasses() }
            >
                {
                    (isLoading || icon) &&
                  <UiElement className={ getIconContainerClasses() }>
                      <UiTypography
                          className='flex'
                          color={
                              variant === 'square'
                                  ? isColorStatus
                                      ? getStatusColor(color)
                                      : color
                                  : getTextProps().color
                          }
                      >
                          <FontAwesomeIcon
                              className={ getIconClasses() }
                              icon={ isLoading ? ['fad', 'spinner-third'] : icon as IconProp }
                          />
                      </UiTypography>
                  </UiElement>
                }
                {
                    label && (
                        <UiTypography
                            { ...getTextProps() }
                            hasButtonLetterSpacing
                            className={ getTextClasses() }
                        >
                            { label }
                        </UiTypography>
                    )
                }
            </UiTypography>
        </button>
    );
};

export default UiButton;
