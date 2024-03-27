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
        size = 'medium',
        variant = 'default',
        hasShadow = true,
    } = props;

    // Getters
    const getColorClasses = (): string => {
        const colorClasses = {
            default: {
                default:    '',
                primary:    '',
                secondary:  '',
            },
            container: {
                default:    '',
                primary:    'bg-white',
                secondary:  'bg-neutral-950 bg-opacity-5',
            },
            page: {
                default:    '',
                primary:    'bg-white',
                secondary:  'bg-neutral-950 bg-opacity-5',
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
                xsmall: 'rounded-sm',
                small: 'rounded',
                medium: 'rounded-md',
                large: 'rounded-lg',
                xlarge: 'rounded-xl'
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
        getVariantClasses(),
        getColorClasses(),
        getPaddingClasses(),
        getOtherClasses()
    ].join(' ');

    return (
        <div className={ getClassNames() }>
            { children && <Fragment>{ children }</Fragment> }
        </div>
    );
};

export default UiElement;
