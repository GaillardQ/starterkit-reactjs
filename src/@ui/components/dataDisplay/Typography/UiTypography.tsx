// @ui
import { getTextColor } from '@ui/utils/colorLibrary';
import type { IUiTypography } from '@ui/components/dataDisplay/Typography/UiTypography.type';

const UiTypography = (props: IUiTypography): JSX.Element => {
    const {
        appearance = [],
        children,
        className,
        hasButtonLetterSpacing,
        color = 'neutral-950',
        font = 'text',
        is = 'div',
        size = 14,
        weight = 'regular',
        ...others
    } = props;

    const sizeMap: Record<number, string> = {
        8: 'text-8',
        10: 'text-10',
        12: 'text-12',
        14: 'text-14',
        16: 'text-16',
        18: 'text-18',
        20: 'text-20',
        24: 'text-24',
        30: 'text-30',
        32: 'text-32',
        36: 'text-36'
    };

    const fontMap = {
        text: 'font-text',
        number: 'font-number'
    };

    const weightMap: Record<string, string> = {
        light: 'font-light',
        regular: 'font-regular',
        medium: 'font-medium',
        semibold: 'font-semibold',
        bold: 'font-bold'
    };

    // Getters
    const getHtmlComponentClasses = (): string => {
        switch (is) {
        case 'h1': return [sizeMap[32], weightMap['semibold']].join(' ');
        case 'h2': return [sizeMap[30], weightMap['medium']].join(' ');
        case 'h3': return [sizeMap[24], weightMap['medium']].join(' ');
        case 'h4': return [sizeMap[20], weightMap['medium']].join(' ');
        case 'h5': return [sizeMap[18], weightMap['medium']].join(' ');
        case 'h6': return [sizeMap[16], weightMap['medium']].join(' ');
        case 'div':
        case 'p':
        case 'span':
        default:
            return [ sizeMap[size], weightMap[weight]].join(' ');
        }
    };

    const getComponentClasses = (): string => {
        const textColor = getTextColor(color);
        const letterSpacing = getLetterSpacing();
        const htmlClasses = getHtmlComponentClasses();
        return [
            'yp-typography',
            className,
            letterSpacing,
            textColor,
            htmlClasses,
            fontMap[font],
            appearance.join(' ')
        ].join(' ');
    };

    const getLetterSpacing = (): string => {
        if (!hasButtonLetterSpacing) {
            if (size >= 32) {
                return 'tracking-headline-1';
            } else if (size >= 24) {
                return 'tracking-headline-2';
            } else if (size >= 16) {
                return 'tracking-headline-3';
            } else if (size === 14) {
                return 'tracking-letter-spacing-l';
            } else if (size === 12) {
                return 'tracking-letter-spacing-m';
            } else {
                return 'tracking-letter-spacing-s';
            }
        } else {
            if (size >= 16) {
                return 'tracking-button-l';
            } else if (size >= 14) {
                return 'tracking-button-m';
            } else {
                return 'tracking-button-s';
            }
        }
    };

    // Misc
    const Component = is;

    return (
        <Component
            className={ getComponentClasses() }
            { ...others }
        >
            { children }
        </Component>
    );
};

export default UiTypography;
