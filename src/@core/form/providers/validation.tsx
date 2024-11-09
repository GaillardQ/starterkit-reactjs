// Misc libs
import {
    isEmpty,
    isNaN,
    isNumber,
    sum
} from 'lodash';

export type TValidationReturn = boolean | string;

export type TBeginsEndsProps = {
    regExValue?: string,
    defaultMessage?: string,
    valueType?: TValueType,
    charsNb?: number
};

export type TValueType = 'numerical' | 'text' | 'alphanumerical' | 'uppercase-alphanumerical' | 'uppercase-alpha';

type TBeginsEndsMessageProps = {
    beginsOrEnds: 'begins' | 'ends',
    charsNb?: number,
    regExValue?: string,
    valueType?: TValueType,
}

/***** Handlers *****/
const handleValueType = (valueType: TValueType): string => {
    switch (valueType) {
    case 'numerical':
        return '[0-9]';
    case 'text':
        return '[a-zA-Z]';
    case 'alphanumerical':
        return '[a-zA-Z0-9]';
    case 'uppercase-alphanumerical':
        return '[0-9A-Z]';
    case 'uppercase-alpha':
        return '[A-Z]';
    default:
        return '';
    }
};

const handleBeginsEndsRegex = (regExValue?: string, valueType?: TValueType, charsNb?: number): string => {
    const regExType = valueType ? handleValueType(valueType) : '';

    const charsNbRegEx = charsNb ? `{${charsNb}}` : '';

    const updatedRegExValue = regExValue ? `[${regExValue}]` : '';

    return `${updatedRegExValue}${regExType}${charsNbRegEx}`;
};

const getBeginsEndsMessage = (props: TBeginsEndsMessageProps): string => {
    const { beginsOrEnds, regExValue, valueType, charsNb } = props;

    const positionMessage = beginsOrEnds === 'begins' ? 'Doit commencer par' : 'Doit terminer par';

    const getTypeMessage = (): string => {
        switch (valueType) {
        case 'numerical':
            return charsNb ? 'caractères numériques' : 'un caractère numérique';
        case 'text':
            return charsNb ? 'lettres' : 'une lettre';
        case 'alphanumerical':
            return charsNb ? 'caractères alphanumériques' : 'un caractère alphanumérique';
        case 'uppercase-alphanumerical':
            return charsNb ? 'caractères alphanumériques en majuscule' : 'un caractère alphanumérique en majuscule';
        case 'uppercase-alpha':
            return charsNb ? 'caractères en majuscule' : 'un caractère en majuscule';
        default:
            return '';
        }
    };

    const getValueMessage = (): string => regExValue
        ? regExValue
        : charsNb
            ? `${charsNb} ${getTypeMessage()}`
            : `${getTypeMessage()}`;

    return `${positionMessage} ${getValueMessage()}`;
};

/***** REQUIRED *****/
export const required = 'Une valeur doit être renseignée';
export const arrayValueRequired = (value: string[]): boolean | string => !isEmpty(value) || required;
export const booleanValueRequired = (value: boolean): boolean | string => value === false || value === true || required;

/***** TYPING *****/
export const alphaNumerical = (value: string): TValidationReturn => {
    const message = 'Doit être une valeur alphanumérique';

    return new RegExp(/^[a-zA-Z0-9]+$/).test(value) || message;
};

export const beginningWith = (props: TBeginsEndsProps) =>
    (value: string): TValidationReturn => {
        const { regExValue, defaultMessage, valueType, charsNb } = props;

        const message = defaultMessage
            || getBeginsEndsMessage({ beginsOrEnds: 'begins', charsNb, regExValue, valueType });

        const regEx = `^${handleBeginsEndsRegex(regExValue, valueType, charsNb)}`;

        return new RegExp(regEx).test(value) || message;
    };

export const endingWith = (props: TBeginsEndsProps) =>
    (value: string): TValidationReturn => {
        const { regExValue, defaultMessage, valueType, charsNb } = props;

        const message = defaultMessage
        || getBeginsEndsMessage({ beginsOrEnds: 'ends', charsNb, regExValue, valueType });

        const regEx = `${handleBeginsEndsRegex(regExValue, valueType, charsNb)}$`;

        return new RegExp(regEx).test(value) || message;
    };

export const exactSize = (size: number, defaultMessage?: string) =>
    (value: string): TValidationReturn => {
        const message = defaultMessage || `Doit être composé de ${size} caractères`;

        return (value || '').length === size || value === '' || message;
    };

export const exactSizeAndNumerical = (size: number, defaultMessage?: string) =>
    (value: string): TValidationReturn => {
        const message = defaultMessage || `Doit être composé de ${size} chiffres`;

        return new RegExp(`^[0-9]{${size}}$`).test(value) || message;
    };

export const float = (value: string): TValidationReturn => {
    const message = 'Doit être numérique';

    return new RegExp(/^-?\d*(\.\d+)?$/).test(value) || message;
};

export const integer = (value: number): TValidationReturn => {
    const message = 'Doit être un nombre entier';

    return Number.isInteger(value) || !isNaN(parseInt(value.toString())) || message;
};

export const floatOrPercentage = (value: string): TValidationReturn => {
    const message = 'Doit être numérique ou un pourcentage';

    return new RegExp(/^-?\d*(\.\d+)?(%)?$/).test(value) || message;
};

export const floatOrPercentageBetween = (value: string, min: number, max: number): TValidationReturn => {
    const message = `Doit être numérique (entre ${min} et ${max}) ou un pourcentage (entre ${min * 100}% et ${max * 100}%)`;

    const isFloatOrPercentage = new RegExp(/^-?\d*(\.\d+)?(%)?$/).test(value);

    if (isFloatOrPercentage) {
        if (value.includes('%')) {
            const valueAsNumber = Number(value.replace('%', ''));
            return valueAsNumber >= (min * 100) && valueAsNumber <= (max * 100) || message;
        } else {
            const valueAsFloat = parseFloat(value);
            return valueAsFloat >= min && valueAsFloat <= max || message;
        }
    } else {
        return message;
    }

};

export const minLength = (size: number, defaultMessage?: string) =>
    (value: string): TValidationReturn => {
        const message = defaultMessage || `Doit être composé de ${size} caractères minimum`;
        return (value || '').length >= size || message;
    };

export const between = (value: number, min: number, max: number): boolean | string => {
    const message = `La valeur doit être supérieure ou égale à ${min} et inférieure ou égale à ${max}.`;
    return value >= min && value <= max || message;
};

export const maxLength = (size: number, defaultMessage?: string) =>
    (value: string): TValidationReturn => {
        const message = defaultMessage || `Doit être composé de ${size} caractères maximum`;
        return (value || '').length <= size || message;
    };

export const moreThanOrEqualTo = (value: string, max: number, decimals?: number, suffix?: string): boolean | string => {
    if(!isNaN(value) && isNumber(value)){
        const message = `Supérieur ou égale à ${
            !decimals
                ? max
                : new Intl
                    .NumberFormat('fr-FR', {
                        minimumFractionDigits: decimals,
                        maximumFractionDigits: decimals
                    })
                    .format(max)
                    .replace(',', '.')
        }${suffix || ''}.`;
        return value >= max || message;
    }else{
        return true;
    }
};

export const lessThanOrEqualTo = (value: string, max: number, decimals?: number, suffix?: string): boolean | string => {
    if(!isNaN(value) && isNumber(value)){
        const message = `Inférieur ou égale à ${
            !decimals
                ? max
                : new Intl
                    .NumberFormat('fr-FR', {
                        minimumFractionDigits: decimals,
                        maximumFractionDigits: decimals
                    })
                    .format(max)
                    .replace(',', '.')
        }${suffix || ''}.`;
        return value <= max || message;
    }else{
        return true;
    }
};

/***** MATHS *****/
export const sumEquals = (numArray: number[], expectedResult: number, decimals?: number): TValidationReturn => {
    const message = `La somme doit être égale à ${expectedResult}.`;
    const value = decimals
        ? new Intl
            .NumberFormat('fr-FR', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            })
            .format(sum(numArray))
        : sum(numArray);

    const origin = decimals
        ? new Intl
            .NumberFormat('fr-FR', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals
            })
            .format(expectedResult)
        : expectedResult;

    return value === origin || message;
};

export const email = (value: string): TValidationReturn|undefined => {
    if(value){
        const message = 'Doit être une adresse mail valide';
        return new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/).test(value) && (value || '').length <= 100 || message;
    }
};

export const phone = (value: string): TValidationReturn|undefined => {
    if(value){
        const message = 'Doit être un numéro de téléphone valide';
        return new RegExp(/^(?:0|\+33\s?)[1-9](?:[\s.-]*\d{2}){4}$/).test(value) || message;
    }
};
