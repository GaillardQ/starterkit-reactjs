// Misc libs
import { isNumber } from 'lodash';

export const getTextPreview = (text: string | number | undefined): string =>
    isNumber(text)
        ? text.toString()
        : (text || 'n/a')
            .split(' ')
            .slice(0, 3)
            .map((word) => word.charAt(0).toUpperCase())
            .filter((word) => word?.match(/\w/g)) // Match des lettres et des nombres
            .join('');

export const conjugate = (text: string, length = 0, displayNumber = true, replace?: {string: string, replaceValue: string}): string => {
    if(length > 1){
        if(replace){
            return `${displayNumber ? `${length} ` : ''}${text.replace(replace.string, replace.replaceValue)}`;
        }
        return `${displayNumber ? `${length} ` : ''}${text}s`;
    }
    return `${displayNumber ? `${length} ` : ''}${text}`;
};

export const capitalizeFirstLetter = (text: string): string =>
    text.charAt(0).toUpperCase() + text.slice(1);

export const truncateText = (title: string, limit: number): string =>
    title.length > limit ? `${title.substring(0, limit)}...` : title;

export const formattedSiren = (input: string): string => {
    const regex = /(.{3})(?=.)/g;
    return input.replace(regex, '$1 ');
};

export const formatSiretNumber = (value: string): string =>
    value.replace(/(\d{3})(?=\d{5})/g, '$1 ');

export const formattedIban = (text: string): string =>
    text ? text.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 38) : '';
