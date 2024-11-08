// Misc libs
import { Fragment } from 'react';
// @ui
import type { IUiElement } from '@ui/components/layout/Element/UiElement.type';

const UiElement = (props: IUiElement): JSX.Element => {
    // Variables
    const {
        className = '',
        children,
        color = 'default',
        onClick,
        size = 'medium',
        variant = 'default',
        hasShadow = true,
        isRounded = true,
        style = {}
    } = props;

    // Getters
    const getColorClasses = (): string => {
        const colorClasses = {
            default: {
                default:    '',
                primary:    '',
                secondary:  '',
                white: ''
            },
            container: {
                default:    '',
                primary:    'bg-white dark:bg-slate-800',
                secondary:  'bg-neutral-950 bg-opacity-5 dark:bg-gray-700',
                white: '',
            },
            page: {
                default:    '',
                primary:    'bg-white dark:bg-slate-800',
                secondary:  'bg-neutral-950 bg-opacity-5 dark:bg-gray-700',
                white: '',
            },
        };
        return colorClasses[variant][color];
    };

    const getPaddingClasses = (): string => {
        const paddingClasses = {
            default: {
                xsmall: '',
                small: '',
                medium: '',
                large: '',
                xlarge: ''
            },
            container: {
                xsmall: 'p-1',
                small: 'p-2',
                medium: 'p-4',
                large: 'p-6',
                xlarge: 'p-8'
            },
            page: {
                xsmall: '',
                small: '',
                medium: '',
                large: '',
                xlarge: ''
            },
        };
        return paddingClasses[variant][size];
    };

    const getVariantClasses = (): string => {
        const variantClasses = {
            container: {
                xsmall: isRounded ? 'rounded-sm' : '',
                small: isRounded ? 'rounded' : '',
                medium: isRounded ? 'rounded-md' : '',
                large: isRounded ? 'rounded-lg' : '',
                xlarge: isRounded ? 'rounded-xl' : ''
            },
            page: {
                xsmall: '',
                small: '',
                medium: '',
                large: '',
                xlarge: ''
            },
            default: {
                xsmall: '',
                small: '',
                medium: '',
                large: '',
                xlarge: ''
            },
        };
        return variantClasses[variant][size];
    };

    const getOtherClasses = (): string => {
        const otherClasses = {
            default: '',
            container: hasShadow ? 'shadow-md' : '',
            page: 'h-screen overflow-auto w-screen',
        };
        return otherClasses[variant];
    };

    const getClassNames = (): string => [
        className,
        onClick ? 'cursor-pointer' : '',
        getVariantClasses(),
        getColorClasses(),
        getPaddingClasses(),
        getOtherClasses()
    ].join(' ');

    return (
        <div
            className={ getClassNames() }
            style={ style }
            onClick={ (e: React.MouseEvent<HTMLElement>) => onClick ? onClick(e) : null }
        >
            { children && <Fragment>{ children }</Fragment> }
        </div>
    );
};

export default UiElement;
