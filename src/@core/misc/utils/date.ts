// Misc
import {
    parse,
    format,
    isValid,
    startOfMonth,
    lastDayOfMonth,
    differenceInYears
}                       from 'date-fns';
import { map }          from 'lodash';
// Utils
import { conjugate } from '@core/misc/utils/text';

export type TDateFormatKey =
'default'
| 'user'
| 'server'
| 'user+time'
| 'server+time'
| 'default-naked'
| 'server+date-time'
| 'user+formatedtime'

export type TDateFormatValue =
'dd/MM/yyyy'
| 'ddMMyyyy'
| 'dd/MM/yyyy'
| 'yyyy-MM-dd'
| 'dd/MM/yy à HH:mm'
| 'dd/MM/yyyy HH:mm:ss'
| 'yyyy-MM-dd\'T\'HH:mm:ss'
| 'yyyy-MM-dd\'T\'HH:mm:ss.SSSSSSSx'

export const dateFormats: Record<TDateFormatKey, TDateFormatValue> = {
    'user': 'dd/MM/yyyy',
    'server': 'yyyy-MM-dd',
    'default': 'dd/MM/yyyy',
    'default-naked': 'ddMMyyyy',
    'user+time': 'dd/MM/yyyy HH:mm:ss',
    'user+formatedtime': 'dd/MM/yy à HH:mm',
    'server+time': 'yyyy-MM-dd\'T\'HH:mm:ss',
    'server+date-time': 'yyyy-MM-dd\'T\'HH:mm:ss.SSSSSSSx'
};

export const datePattern = /\d{2}\/\d{2}\/\d{4}/g;

export const parseMultiple = (date: string): Date | number => {
    let result;

    for (let i = 0; i < map(dateFormats).length; i++) {
        result = parse(date, map(dateFormats)[i], new Date());
        if (isValid(result)) {
            return result;
        }
    }

    return 0;
};

export const getDateFormat = (date: string, formatType?: TDateFormatKey): string => {
    if (parseMultiple(date)) {
        const newDateFormat = format(parseMultiple(date), dateFormats[formatType||'default']);
        return newDateFormat.replace(datePattern, (match: string): string => {
            const year = parseInt(match.substring(6));
            if(formatType && formatType === ('user+time' || 'user+formatedtime' || 'server+time')) {
                return year === 9999 || year === 1 ? '-' : newDateFormat.split(' ')[0];
            }
            return year === 9999 || year === 1 ? '-' : newDateFormat;
        });
    } else {
        return '';
    }
};

export const getPeriodFormat = (start: string, end: string): string => {
    if (start === '' && end === '') {
        return 'NC';
    } else if (start === '') {
        return `Jusqu'au ${end}`;
    } else if (end === '') {
        return `À partir du ${start}`;
    } else {
        return `Du ${start} au ${end}`;
    }
};

export const getDifferenceInYear = (date: string, diffDate: string): string => {
    const difference = differenceInYears(new Date(diffDate), new Date(date));
    return `${difference} ${conjugate('an', difference, false)}`;
};

export const convertToMonthsAndYears = (monthNumberStr: string): string => {
    const monthNumber = parseFloat(monthNumberStr);
    const years = Math.floor(monthNumber / 12);
    const months = monthNumber % 12;

    if (years === 0 && months === 0) {
        return 'ND';
    }

    const hasYears = years > 0;
    const hasMonths = months > 0;

    const yearsLabel = hasYears ? `${conjugate('an', years)}` : '';
    const monthsLabel = hasMonths ? `${months} mois` : '';

    return `${yearsLabel}${hasYears && hasMonths ? ', ' : ''}${monthsLabel}`;
};

export const getStartOfMonth = (date: string): Date => startOfMonth(parse(getDateFormat(date, 'user'), 'dd/MM/yyyy', new Date()));

export const getEndOfMonth = (date: string): Date => lastDayOfMonth(parse(getDateFormat(date, 'user'), 'dd/MM/yyyy', new Date()));

export const isStringDate = (date: string, format: TDateFormatKey): boolean =>
    !isNaN(parse(date, dateFormats[format], new Date()).valueOf());
