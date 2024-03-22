import type { TColor, TStatus } from '@ui/resources/type/Common.type';

// Types
export type TColorStyles = {
    background: string,
    border: string;
    text: string;
    color?: TTailwindColor;
    hover: string;
    focus: string;
    active: string;
    reverse: string;
    shadow: string;
}

export type TTailwindColorPalette =
    'neutral'
    | 'brand'
    | 'yellow'
    | 'orange'
    | 'red'
    | 'pink'
    | 'purple'
    | 'indigo'
    | 'blue'
    | 'teal'
    | 'green'
    | 'black'

export type TTailwindColorShade =
    '50'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | '950';

export type TYpAllStatus = TStatus | 'misc' | 'default';
export type TTailwindColor = `${TTailwindColorPalette}-${TTailwindColorShade}`;
export type TColors = TTailwindColor | TColor | 'black' | 'white' | 'transparent';
export type TStatusColors = Extract<TTailwindColorPalette, 'red' | 'orange' | 'green' | 'blue' | 'neutral'>;
export type TStatusColor = `${TStatusColors}-${TTailwindColorShade}`

export const getColorStyles = (color: TColors): TColorStyles => {
    switch (color) {
    case 'neutral-50':
        return {
            background: 'bg-neutral-50',
            border: 'border-neutral-50',
            text: 'text-neutral-50',
            hover: 'hover:bg-neutral-50',
            focus: 'focus:bg-neutral-50',
            active: 'active:bg-neutral-50',
            reverse: 'text-white',
            shadow: 'shadow-neutral-50'
        };
    case 'neutral-100':
        return {
            background: 'bg-neutral-100',
            border: 'border-neutral-100',
            text: 'text-neutral-100',
            hover: 'hover:bg-neutral-100',
            focus: 'focus:bg-neutral-100',
            active: 'active:bg-neutral-100',
            reverse: 'text-white',
            shadow: 'shadow-neutral-100'
        };
    case 'neutral-200':
        return {
            background: 'bg-neutral-200',
            border: 'border-neutral-200',
            text: 'text-neutral-200',
            hover: 'hover:bg-neutral-200',
            focus: 'focus:bg-neutral-200',
            active: 'active:bg-neutral-200',
            reverse: 'text-white',
            shadow: 'shadow-neutral-200'
        };
    case 'neutral-300':
        return {
            background: 'bg-neutral-300',
            border: 'border-neutral-300',
            text: 'text-neutral-300',
            hover: 'hover:bg-neutral-300',
            focus: 'focus:bg-neutral-300',
            active: 'active:bg-neutral-300',
            reverse: 'text-white',
            shadow: 'shadow-neutral-300'
        };
    case 'neutral-400':
        return {
            background: 'bg-neutral-400',
            border: 'border-neutral-400',
            text: 'text-neutral-400',
            hover: 'hover:bg-neutral-400',
            focus: 'focus:bg-neutral-400',
            active: 'active:bg-neutral-400',
            reverse: 'text-white',
            shadow: 'shadow-neutral-400'
        };
    case 'neutral-500':
        return {
            background: 'bg-neutral-500',
            border: 'border-neutral-500',
            text: 'text-neutral-500',
            hover: 'hover:bg-neutral-500',
            focus: 'focus:bg-neutral-500',
            active: 'active:bg-neutral-500',
            reverse: 'text-white',
            shadow: 'shadow-neutral-500'
        };
    case 'neutral-600':
        return {
            background: 'bg-neutral-600',
            border: 'border-neutral-600',
            text: 'text-neutral-600',
            hover: 'hover:bg-neutral-600',
            focus: 'focus:bg-neutral-600',
            active: 'active:bg-neutral-600',
            reverse: 'text-white',
            shadow: 'shadow-neutral-600'
        };
    case 'neutral-700':
        return {
            background: 'bg-neutral-700',
            border: 'border-neutral-700',
            text: 'text-neutral-700',
            hover: 'hover:bg-neutral-700',
            focus: 'focus:bg-neutral-700',
            active: 'active:bg-neutral-700',
            reverse: 'text-white',
            shadow: 'shadow-neutral-700'
        };
    case 'neutral-800':
        return {
            background: 'bg-neutral-800',
            border: 'border-neutral-800',
            text: 'text-neutral-800',
            hover: 'hover:bg-neutral-800',
            focus: 'focus:bg-neutral-800',
            active: 'active:bg-neutral-800',
            reverse: 'text-white',
            shadow: 'shadow-neutral-800'
        };
    case 'neutral-900':
        return {
            background: 'bg-neutral-900',
            border: 'border-neutral-900',
            text: 'text-neutral-900',
            hover: 'hover:bg-neutral-900',
            focus: 'focus:bg-neutral-900',
            active: 'active:bg-neutral-900',
            reverse: 'text-white',
            shadow: 'shadow-neutral-900'
        };
    case 'neutral-950':
    case 'secondary':
        return {
            background: 'bg-neutral-950',
            border: 'border-neutral-950',
            text: 'text-neutral-950',
            hover: 'hover:bg-neutral-950',
            focus: 'focus:bg-neutral-950',
            active: 'active:bg-neutral-950',
            reverse: 'text-white',
            shadow: 'shadow-neutral-950'
        };
    case 'brand-50':
        return {
            background: 'bg-brand-50',
            border: 'border-brand-50',
            text: 'text-brand-50',
            hover: 'hover:bg-brand-50',
            focus: 'focus:bg-brand-50',
            active: 'active:bg-brand-50',
            reverse: 'text-white',
            shadow: 'shadow-brand-50'
        };
    case 'brand-100':
        return {
            background: 'bg-brand-100',
            border: 'border-brand-100',
            text: 'text-brand-100',
            hover: 'hover:bg-brand-100',
            focus: 'focus:bg-brand-100',
            active: 'active:bg-brand-100',
            reverse: 'text-white',
            shadow: 'shadow-brand-100'
        };
    case 'brand-200':
        return {
            background: 'bg-brand-200',
            border: 'border-brand-200',
            text: 'text-brand-200',
            hover: 'hover:bg-brand-200',
            focus: 'focus:bg-brand-200',
            active: 'active:bg-brand-200',
            reverse: 'text-white',
            shadow: 'shadow-brand-200'
        };
    case 'brand-300':
        return {
            background: 'bg-brand-300',
            border: 'border-brand-300',
            text: 'text-brand-300',
            hover: 'hover:bg-brand-300',
            focus: 'focus:bg-brand-300',
            active: 'active:bg-brand-300',
            reverse: 'text-white',
            shadow: 'shadow-brand-300'
        };
    case 'brand-400':
        return {
            background: 'bg-brand-400',
            border: 'border-brand-400',
            text: 'text-brand-400',
            hover: 'hover:bg-brand-400',
            focus: 'focus:bg-brand-400',
            active: 'active:bg-brand-400',
            reverse: 'text-white',
            shadow: 'shadow-brand-400'
        };
    case 'brand-500':
    case 'primary':
    case 'default':
        return {
            background: 'bg-brand-500',
            border: 'border-brand-500',
            text: 'text-brand-500',
            hover: 'hover:bg-brand-500',
            focus: 'focus:bg-brand-500',
            active: 'active:bg-brand-500',
            reverse: 'text-white',
            shadow: 'shadow-brand-500'
        };
    case 'brand-600':
        return {
            background: 'bg-brand-600',
            border: 'border-brand-600',
            text: 'text-brand-600',
            hover: 'hover:bg-brand-600',
            focus: 'focus:bg-brand-600',
            active: 'active:bg-brand-600',
            reverse: 'text-white',
            shadow: 'shadow-brand-600'
        };
    case 'brand-700':
        return {
            background: 'bg-brand-700',
            border: 'border-brand-700',
            text: 'text-brand-700',
            hover: 'hover:bg-brand-700',
            focus: 'focus:bg-brand-700',
            active: 'active:bg-brand-700',
            reverse: 'text-white',
            shadow: 'shadow-brand-700'
        };
    case 'brand-800':
        return {
            background: 'bg-brand-800',
            border: 'border-brand-800',
            text: 'text-brand-800',
            hover: 'hover:bg-brand-800',
            focus: 'focus:bg-brand-800',
            active: 'active:bg-brand-800',
            reverse: 'text-white',
            shadow: 'shadow-brand-800'
        };
    case 'brand-900':
        return {
            background: 'bg-brand-900',
            border: 'border-brand-900',
            text: 'text-brand-900',
            hover: 'hover:bg-brand-900',
            focus: 'focus:bg-brand-900',
            active: 'active:bg-brand-900',
            reverse: 'text-white',
            shadow: 'shadow-brand-900'
        };
    case 'brand-950':
        return {
            background: 'bg-brand-950',
            border: 'border-brand-950',
            text: 'text-brand-950',
            hover: 'hover:bg-brand-950',
            focus: 'focus:bg-brand-950',
            active: 'active:bg-brand-950',
            reverse: 'text-white',
            shadow: 'shadow-brand-950'
        };
    case 'yellow-50':
        return {
            background: 'bg-yellow-50',
            border: 'border-yellow-50',
            text: 'text-yellow-50',
            hover: 'hover:bg-yellow-50',
            focus: 'focus:bg-yellow-50',
            active: 'active:bg-yellow-50',
            reverse: 'text-white',
            shadow: 'shadow-yellow-50'
        };
    case 'yellow-100':
        return {
            background: 'bg-yellow-100',
            border: 'border-yellow-100',
            text: 'text-yellow-100',
            hover: 'hover:bg-yellow-100',
            focus: 'focus:bg-yellow-100',
            active: 'active:bg-yellow-100',
            reverse: 'text-white',
            shadow: 'shadow-yellow-100'
        };
    case 'yellow-200':
        return {
            background: 'bg-yellow-200',
            border: 'border-yellow-200',
            text: 'text-yellow-200',
            hover: 'hover:bg-yellow-200',
            focus: 'focus:bg-yellow-200',
            active: 'active:bg-yellow-200',
            reverse: 'text-white',
            shadow: 'shadow-yellow-200'
        };
    case 'yellow-300':
        return {
            background: 'bg-yellow-300',
            border: 'border-yellow-300',
            text: 'text-yellow-300',
            hover: 'hover:bg-yellow-300',
            focus: 'focus:bg-yellow-300',
            active: 'active:bg-yellow-300',
            reverse: 'text-white',
            shadow: 'shadow-yellow-300'
        };
    case 'yellow-400':
        return {
            background: 'bg-yellow-400',
            border: 'border-yellow-400',
            text: 'text-yellow-400',
            hover: 'hover:bg-yellow-400',
            focus: 'focus:bg-yellow-400',
            active: 'active:bg-yellow-400',
            reverse: 'text-white',
            shadow: 'shadow-yellow-400'
        };
    case 'yellow-500':
        return {
            background: 'bg-yellow-500',
            border: 'border-yellow-500',
            text: 'text-yellow-500',
            hover: 'hover:bg-yellow-500',
            focus: 'focus:bg-yellow-500',
            active: 'active:bg-yellow-500',
            reverse: 'text-white',
            shadow: 'shadow-yellow-500'
        };
    case 'yellow-600':
        return {
            background: 'bg-yellow-600',
            border: 'border-yellow-600',
            text: 'text-yellow-600',
            hover: 'hover:bg-yellow-600',
            focus: 'focus:bg-yellow-600',
            active: 'active:bg-yellow-600',
            reverse: 'text-white',
            shadow: 'shadow-yellow-600'
        };
    case 'yellow-700':
        return {
            background: 'bg-yellow-700',
            border: 'border-yellow-700',
            text: 'text-yellow-700',
            hover: 'hover:bg-yellow-700',
            focus: 'focus:bg-yellow-700',
            active: 'active:bg-yellow-700',
            reverse: 'text-white',
            shadow: 'shadow-yellow-700'
        };
    case 'yellow-800':
        return {
            background: 'bg-yellow-800',
            border: 'border-yellow-800',
            text: 'text-yellow-800',
            hover: 'hover:bg-yellow-800',
            focus: 'focus:bg-yellow-800',
            active: 'active:bg-yellow-800',
            reverse: 'text-white',
            shadow: 'shadow-yellow-800'
        };
    case 'yellow-900':
        return {
            background: 'bg-yellow-900',
            border: 'border-yellow-900',
            text: 'text-yellow-900',
            hover: 'hover:bg-yellow-900',
            focus: 'focus:bg-yellow-900',
            active: 'active:bg-yellow-900',
            reverse: 'text-white',
            shadow: 'shadow-yellow-900'
        };
    case 'yellow-950':
        return {
            background: 'bg-yellow-950',
            border: 'border-yellow-950',
            text: 'text-yellow-950',
            hover: 'hover:bg-yellow-950',
            focus: 'focus:bg-yellow-950',
            active: 'active:bg-yellow-950',
            reverse: 'text-white',
            shadow: 'shadow-yellow-950'
        };
    case 'orange-50':
        return {
            background: 'bg-orange-50',
            border: 'border-orange-50',
            text: 'text-orange-50',
            hover: 'hover:bg-orange-50',
            focus: 'focus:bg-orange-50',
            active: 'active:bg-orange-50',
            reverse: 'text-white',
            shadow: 'shadow-orange-50'
        };
    case 'orange-100':
        return {
            background: 'bg-orange-100',
            border: 'border-orange-100',
            text: 'text-orange-100',
            hover: 'hover:bg-orange-100',
            focus: 'focus:bg-orange-100',
            active: 'active:bg-orange-100',
            reverse: 'text-white',
            shadow: 'shadow-orange-100'
        };
    case 'orange-200':
        return {
            background: 'bg-orange-200',
            border: 'border-orange-200',
            text: 'text-orange-200',
            hover: 'hover:bg-orange-200',
            focus: 'focus:bg-orange-200',
            active: 'active:bg-orange-200',
            reverse: 'text-white',
            shadow: 'shadow-orange-200'
        };
    case 'orange-300':
        return {
            background: 'bg-orange-300',
            border: 'border-orange-300',
            text: 'text-orange-300',
            hover: 'hover:bg-orange-300',
            focus: 'focus:bg-orange-300',
            active: 'active:bg-orange-300',
            reverse: 'text-white',
            shadow: 'shadow-orange-300'
        };
    case 'orange-400':
        return {
            background: 'bg-orange-400',
            border: 'border-orange-400',
            text: 'text-orange-400',
            hover: 'hover:bg-orange-400',
            focus: 'focus:bg-orange-400',
            active: 'active:bg-orange-400',
            reverse: 'text-white',
            shadow: 'shadow-orange-400'
        };
    case 'orange-500':
        return {
            background: 'bg-orange-500',
            border: 'border-orange-500',
            text: 'text-orange-500',
            hover: 'hover:bg-orange-500',
            focus: 'focus:bg-orange-500',
            active: 'active:bg-orange-500',
            reverse: 'text-white',
            shadow: 'shadow-orange-500'
        };
    case 'orange-600':
        return {
            background: 'bg-orange-600',
            border: 'border-orange-600',
            text: 'text-orange-600',
            hover: 'hover:bg-orange-600',
            focus: 'focus:bg-orange-600',
            active: 'active:bg-orange-600',
            reverse: 'text-white',
            shadow: 'shadow-orange-600'
        };
    case 'orange-700':
        return {
            background: 'bg-orange-700',
            border: 'border-orange-700',
            text: 'text-orange-700',
            hover: 'hover:bg-orange-700',
            focus: 'focus:bg-orange-700',
            active: 'active:bg-orange-700',
            reverse: 'text-white',
            shadow: 'shadow-orange-700'
        };
    case 'orange-800':
        return {
            background: 'bg-orange-800',
            border: 'border-orange-800',
            text: 'text-orange-800',
            hover: 'hover:bg-orange-800',
            focus: 'focus:bg-orange-800',
            active: 'active:bg-orange-800',
            reverse: 'text-white',
            shadow: 'shadow-orange-800'
        };
    case 'orange-900':
        return {
            background: 'bg-orange-900',
            border: 'border-orange-900',
            text: 'text-orange-900',
            hover: 'hover:bg-orange-900',
            focus: 'focus:bg-orange-900',
            active: 'active:bg-orange-900',
            reverse: 'text-white',
            shadow: 'shadow-orange-900'
        };
    case 'orange-950':
        return {
            background: 'bg-orange-950',
            border: 'border-orange-950',
            text: 'text-orange-950',
            hover: 'hover:bg-orange-950',
            focus: 'focus:bg-orange-950',
            active: 'active:bg-orange-950',
            reverse: 'text-white',
            shadow: 'shadow-orange-950'
        };
    case 'red-50':
        return {
            background: 'bg-red-50',
            border: 'border-red-50',
            text: 'text-red-50',
            hover: 'hover:bg-red-50',
            focus: 'focus:bg-red-50',
            active: 'active:bg-red-50',
            reverse: 'text-white',
            shadow: 'shadow-red-50'
        };
    case 'red-100':
        return {
            background: 'bg-red-100',
            border: 'border-red-100',
            text: 'text-red-100',
            hover: 'hover:bg-red-100',
            focus: 'focus:bg-red-100',
            active: 'active:bg-red-100',
            reverse: 'text-white',
            shadow: 'shadow-red-100'
        };
    case 'red-200':
        return {
            background: 'bg-red-200',
            border: 'border-red-200',
            text: 'text-red-200',
            hover: 'hover:bg-red-200',
            focus: 'focus:bg-red-200',
            active: 'active:bg-red-200',
            reverse: 'text-white',
            shadow: 'shadow-red-200'
        };
    case 'red-300':
        return {
            background: 'bg-red-300',
            border: 'border-red-300',
            text: 'text-red-300',
            hover: 'hover:bg-red-300',
            focus: 'focus:bg-red-300',
            active: 'active:bg-red-300',
            reverse: 'text-white',
            shadow: 'shadow-red-300'
        };
    case 'red-400':
        return {
            background: 'bg-red-400',
            border: 'border-red-400',
            text: 'text-red-400',
            hover: 'hover:bg-red-400',
            focus: 'focus:bg-red-400',
            active: 'active:bg-red-400',
            reverse: 'text-white',
            shadow: 'shadow-red-400'
        };
    case 'red-500':
        return {
            background: 'bg-red-500',
            border: 'border-red-500',
            text: 'text-red-500',
            hover: 'hover:bg-red-500',
            focus: 'focus:bg-red-500',
            active: 'active:bg-red-500',
            reverse: 'text-white',
            shadow: 'shadow-red-500'
        };
    case 'red-600':
        return {
            background: 'bg-red-600',
            border: 'border-red-600',
            text: 'text-red-600',
            hover: 'hover:bg-red-600',
            focus: 'focus:bg-red-600',
            active: 'active:bg-red-600',
            reverse: 'text-white',
            shadow: 'shadow-red-600'
        };
    case 'red-700':
        return {
            background: 'bg-red-700',
            border: 'border-red-700',
            text: 'text-red-700',
            hover: 'hover:bg-red-700',
            focus: 'focus:bg-red-700',
            active: 'active:bg-red-700',
            reverse: 'text-white',
            shadow: 'shadow-red-700'
        };
    case 'red-800':
        return {
            background: 'bg-red-800',
            border: 'border-red-800',
            text: 'text-red-800',
            hover: 'hover:bg-red-800',
            focus: 'focus:bg-red-800',
            active: 'active:bg-red-800',
            reverse: 'text-white',
            shadow: 'shadow-red-800'
        };
    case 'red-900':
        return {
            background: 'bg-red-900',
            border: 'border-red-900',
            text: 'text-red-900',
            hover: 'hover:bg-red-900',
            focus: 'focus:bg-red-900',
            active: 'active:bg-red-900',
            reverse: 'text-white',
            shadow: 'shadow-red-900'
        };
    case 'red-950':
        return {
            background: 'bg-red-950',
            border: 'border-red-950',
            text: 'text-red-950',
            hover: 'hover:bg-red-950',
            focus: 'focus:bg-red-950',
            active: 'active:bg-red-950',
            reverse: 'text-white',
            shadow: 'shadow-red-950'
        };
    case 'pink-50':
        return {
            background: 'bg-pink-50',
            border: 'border-pink-50',
            text: 'text-pink-50',
            hover: 'hover:bg-pink-50',
            focus: 'focus:bg-pink-50',
            active: 'active:bg-pink-50',
            reverse: 'text-white',
            shadow: 'shadow-pink-50'
        };
    case 'pink-100':
        return {
            background: 'bg-pink-100',
            border: 'border-pink-100',
            text: 'text-pink-100',
            hover: 'hover:bg-pink-100',
            focus: 'focus:bg-pink-100',
            active: 'active:bg-pink-100',
            reverse: 'text-white',
            shadow: 'shadow-pink-100'
        };
    case 'pink-200':
        return {
            background: 'bg-pink-200',
            border: 'border-pink-200',
            text: 'text-pink-200',
            hover: 'hover:bg-pink-200',
            focus: 'focus:bg-pink-200',
            active: 'active:bg-pink-200',
            reverse: 'text-white',
            shadow: 'shadow-pink-200'
        };
    case 'pink-300':
        return {
            background: 'bg-pink-300',
            border: 'border-pink-300',
            text: 'text-pink-300',
            hover: 'hover:bg-pink-300',
            focus: 'focus:bg-pink-300',
            active: 'active:bg-pink-300',
            reverse: 'text-white',
            shadow: 'shadow-pink-300'
        };
    case 'pink-400':
        return {
            background: 'bg-pink-400',
            border: 'border-pink-400',
            text: 'text-pink-400',
            hover: 'hover:bg-pink-400',
            focus: 'focus:bg-pink-400',
            active: 'active:bg-pink-400',
            reverse: 'text-white',
            shadow: 'shadow-pink-400'
        };
    case 'pink-500':
        return {
            background: 'bg-pink-500',
            border: 'border-pink-500',
            text: 'text-pink-500',
            hover: 'hover:bg-pink-500',
            focus: 'focus:bg-pink-500',
            active: 'active:bg-pink-500',
            reverse: 'text-white',
            shadow: 'shadow-pink-500'
        };
    case 'pink-600':
        return {
            background: 'bg-pink-600',
            border: 'border-pink-600',
            text: 'text-pink-600',
            hover: 'hover:bg-pink-600',
            focus: 'focus:bg-pink-600',
            active: 'active:bg-pink-600',
            reverse: 'text-white',
            shadow: 'shadow-pink-600'
        };
    case 'pink-700':
        return {
            background: 'bg-pink-700',
            border: 'border-pink-700',
            text: 'text-pink-700',
            hover: 'hover:bg-pink-700',
            focus: 'focus:bg-pink-700',
            active: 'active:bg-pink-700',
            reverse: 'text-white',
            shadow: 'shadow-pink-700'
        };
    case 'pink-800':
        return {
            background: 'bg-pink-800',
            border: 'border-pink-800',
            text: 'text-pink-800',
            hover: 'hover:bg-pink-800',
            focus: 'focus:bg-pink-800',
            active: 'active:bg-pink-800',
            reverse: 'text-white',
            shadow: 'shadow-pink-800'
        };
    case 'pink-900':
        return {
            background: 'bg-pink-900',
            border: 'border-pink-900',
            text: 'text-pink-900',
            hover: 'hover:bg-pink-900',
            focus: 'focus:bg-pink-900',
            active: 'active:bg-pink-900',
            reverse: 'text-white',
            shadow: 'shadow-pink-900'
        };
    case 'pink-950':
        return {
            background: 'bg-pink-950',
            border: 'border-pink-950',
            text: 'text-pink-950',
            hover: 'hover:bg-pink-950',
            focus: 'focus:bg-pink-950',
            active: 'active:bg-pink-950',
            reverse: 'text-white',
            shadow: 'shadow-pink-950'
        };
    case 'purple-50':
        return {
            background: 'bg-purple-50',
            border: 'border-purple-50',
            text: 'text-purple-50',
            hover: 'hover:bg-purple-50',
            focus: 'focus:bg-purple-50',
            active: 'active:bg-purple-50',
            reverse: 'text-white',
            shadow: 'shadow-purple-50'
        };
    case 'purple-100':
        return {
            background: 'bg-purple-100',
            border: 'border-purple-100',
            text: 'text-purple-100',
            hover: 'hover:bg-purple-100',
            focus: 'focus:bg-purple-100',
            active: 'active:bg-purple-100',
            reverse: 'text-white',
            shadow: 'shadow-purple-100'
        };
    case 'purple-200':
        return {
            background: 'bg-purple-200',
            border: 'border-purple-200',
            text: 'text-purple-200',
            hover: 'hover:bg-purple-200',
            focus: 'focus:bg-purple-200',
            active: 'active:bg-purple-200',
            reverse: 'text-white',
            shadow: 'shadow-purple-200'
        };
    case 'purple-300':
        return {
            background: 'bg-purple-300',
            border: 'border-purple-300',
            text: 'text-purple-300',
            hover: 'hover:bg-purple-300',
            focus: 'focus:bg-purple-300',
            active: 'active:bg-purple-300',
            reverse: 'text-white',
            shadow: 'shadow-purple-300'
        };
    case 'purple-400':
        return {
            background: 'bg-purple-400',
            border: 'border-purple-400',
            text: 'text-purple-400',
            hover: 'hover:bg-purple-400',
            focus: 'focus:bg-purple-400',
            active: 'active:bg-purple-400',
            reverse: 'text-white',
            shadow: 'shadow-purple-400'
        };
    case 'purple-500':
        return {
            background: 'bg-purple-500',
            border: 'border-purple-500',
            text: 'text-purple-500',
            hover: 'hover:bg-purple-500',
            focus: 'focus:bg-purple-500',
            active: 'active:bg-purple-500',
            reverse: 'text-white',
            shadow: 'shadow-purple-500'
        };
    case 'purple-600':
        return {
            background: 'bg-purple-600',
            border: 'border-purple-600',
            text: 'text-purple-600',
            hover: 'hover:bg-purple-600',
            focus: 'focus:bg-purple-600',
            active: 'active:bg-purple-600',
            reverse: 'text-white',
            shadow: 'shadow-purple-600'
        };
    case 'purple-700':
        return {
            background: 'bg-purple-700',
            border: 'border-purple-700',
            text: 'text-purple-700',
            hover: 'hover:bg-purple-700',
            focus: 'focus:bg-purple-700',
            active: 'active:bg-purple-700',
            reverse: 'text-white',
            shadow: 'shadow-purple-700'
        };
    case 'purple-800':
        return {
            background: 'bg-purple-800',
            border: 'border-purple-800',
            text: 'text-purple-800',
            hover: 'hover:bg-purple-800',
            focus: 'focus:bg-purple-800',
            active: 'active:bg-purple-800',
            reverse: 'text-white',
            shadow: 'shadow-purple-800'
        };
    case 'purple-900':
        return {
            background: 'bg-purple-900',
            border: 'border-purple-900',
            text: 'text-purple-900',
            hover: 'hover:bg-purple-900',
            focus: 'focus:bg-purple-900',
            active: 'active:bg-purple-900',
            reverse: 'text-white',
            shadow: 'shadow-purple-900'
        };
    case 'purple-950':
        return {
            background: 'bg-purple-950',
            border: 'border-purple-950',
            text: 'text-purple-950',
            hover: 'hover:bg-purple-950',
            focus: 'focus:bg-purple-950',
            active: 'active:bg-purple-950',
            reverse: 'text-white',
            shadow: 'shadow-purple-950'
        };
    case 'indigo-50':
        return {
            background: 'bg-indigo-50',
            border: 'border-indigo-50',
            text: 'text-indigo-50',
            hover: 'hover:bg-indigo-50',
            focus: 'focus:bg-indigo-50',
            active: 'active:bg-indigo-50',
            reverse: 'text-white',
            shadow: 'shadow-indigo-50'
        };
    case 'indigo-100':
        return {
            background: 'bg-indigo-100',
            border: 'border-indigo-100',
            text: 'text-indigo-100',
            hover: 'hover:bg-indigo-100',
            focus: 'focus:bg-indigo-100',
            active: 'active:bg-indigo-100',
            reverse: 'text-white',
            shadow: 'shadow-indigo-100'
        };
    case 'indigo-200':
        return {
            background: 'bg-indigo-200',
            border: 'border-indigo-200',
            text: 'text-indigo-200',
            hover: 'hover:bg-indigo-200',
            focus: 'focus:bg-indigo-200',
            active: 'active:bg-indigo-200',
            reverse: 'text-white',
            shadow: 'shadow-indigo-200'
        };
    case 'indigo-300':
        return {
            background: 'bg-indigo-300',
            border: 'border-indigo-300',
            text: 'text-indigo-300',
            hover: 'hover:bg-indigo-300',
            focus: 'focus:bg-indigo-300',
            active: 'active:bg-indigo-300',
            reverse: 'text-white',
            shadow: 'shadow-indigo-300'
        };
    case 'indigo-400':
        return {
            background: 'bg-indigo-400',
            border: 'border-indigo-400',
            text: 'text-indigo-400',
            hover: 'hover:bg-indigo-400',
            focus: 'focus:bg-indigo-400',
            active: 'active:bg-indigo-400',
            reverse: 'text-white',
            shadow: 'shadow-indigo-400'
        };
    case 'indigo-500':
        return {
            background: 'bg-indigo-500',
            border: 'border-indigo-500',
            text: 'text-indigo-500',
            hover: 'hover:bg-indigo-500',
            focus: 'focus:bg-indigo-500',
            active: 'active:bg-indigo-500',
            reverse: 'text-white',
            shadow: 'shadow-indigo-500'
        };
    case 'indigo-600':
        return {
            background: 'bg-indigo-600',
            border: 'border-indigo-600',
            text: 'text-indigo-600',
            hover: 'hover:bg-indigo-600',
            focus: 'focus:bg-indigo-600',
            active: 'active:bg-indigo-600',
            reverse: 'text-white',
            shadow: 'shadow-indigo-600'
        };
    case 'indigo-700':
        return {
            background: 'bg-indigo-700',
            border: 'border-indigo-700',
            text: 'text-indigo-700',
            hover: 'hover:bg-indigo-700',
            focus: 'focus:bg-indigo-700',
            active: 'active:bg-indigo-700',
            reverse: 'text-white',
            shadow: 'shadow-indigo-700'
        };
    case 'indigo-800':
        return {
            background: 'bg-indigo-800',
            border: 'border-indigo-800',
            text: 'text-indigo-800',
            hover: 'hover:bg-indigo-800',
            focus: 'focus:bg-indigo-800',
            active: 'active:bg-indigo-800',
            reverse: 'text-white',
            shadow: 'shadow-indigo-800'
        };
    case 'indigo-900':
        return {
            background: 'bg-indigo-900',
            border: 'border-indigo-900',
            text: 'text-indigo-900',
            hover: 'hover:bg-indigo-900',
            focus: 'focus:bg-indigo-900',
            active: 'active:bg-indigo-900',
            reverse: 'text-white',
            shadow: 'shadow-indigo-900'
        };
    case 'indigo-950':
        return {
            background: 'bg-indigo-950',
            border: 'border-indigo-950',
            text: 'text-indigo-950',
            hover: 'hover:bg-indigo-950',
            focus: 'focus:bg-indigo-950',
            active: 'active:bg-indigo-950',
            reverse: 'text-white',
            shadow: 'shadow-indigo-950'
        };
    case 'blue-50':
        return {
            background: 'bg-blue-50',
            border: 'border-blue-50',
            text: 'text-blue-50',
            hover: 'hover:bg-blue-50',
            focus: 'focus:bg-blue-50',
            active: 'active:bg-blue-50',
            reverse: 'text-white',
            shadow: 'shadow-blue-50'
        };
    case 'blue-100':
        return {
            background: 'bg-blue-100',
            border: 'border-blue-100',
            text: 'text-blue-100',
            hover: 'hover:bg-blue-100',
            focus: 'focus:bg-blue-100',
            active: 'active:bg-blue-100',
            reverse: 'text-white',
            shadow: 'shadow-blue-100'
        };
    case 'blue-200':
        return {
            background: 'bg-blue-200',
            border: 'border-blue-200',
            text: 'text-blue-200',
            hover: 'hover:bg-blue-200',
            focus: 'focus:bg-blue-200',
            active: 'active:bg-blue-200',
            reverse: 'text-white',
            shadow: 'shadow-blue-200'
        };
    case 'blue-300':
        return {
            background: 'bg-blue-300',
            border: 'border-blue-300',
            text: 'text-blue-300',
            hover: 'hover:bg-blue-300',
            focus: 'focus:bg-blue-300',
            active: 'active:bg-blue-300',
            reverse: 'text-white',
            shadow: 'shadow-blue-300'
        };
    case 'blue-400':
        return {
            background: 'bg-blue-400',
            border: 'border-blue-400',
            text: 'text-blue-400',
            hover: 'hover:bg-blue-400',
            focus: 'focus:bg-blue-400',
            active: 'active:bg-blue-400',
            reverse: 'text-white',
            shadow: 'shadow-blue-400'
        };
    case 'blue-500':
        return {
            background: 'bg-blue-500',
            border: 'border-blue-500',
            text: 'text-blue-500',
            hover: 'hover:bg-blue-500',
            focus: 'focus:bg-blue-500',
            active: 'active:bg-blue-500',
            reverse: 'text-white',
            shadow: 'shadow-blue-500'
        };
    case 'blue-600':
        return {
            background: 'bg-blue-600',
            border: 'border-blue-600',
            text: 'text-blue-600',
            hover: 'hover:bg-blue-600',
            focus: 'focus:bg-blue-600',
            active: 'active:bg-blue-600',
            reverse: 'text-white',
            shadow: 'shadow-blue-600'
        };
    case 'blue-700':
        return {
            background: 'bg-blue-700',
            border: 'border-blue-700',
            text: 'text-blue-700',
            hover: 'hover:bg-blue-700',
            focus: 'focus:bg-blue-700',
            active: 'active:bg-blue-700',
            reverse: 'text-white',
            shadow: 'shadow-blue-700'
        };
    case 'blue-800':
        return {
            background: 'bg-blue-800',
            border: 'border-blue-800',
            text: 'text-blue-800',
            hover: 'hover:bg-blue-800',
            focus: 'focus:bg-blue-800',
            active: 'active:bg-blue-800',
            reverse: 'text-white',
            shadow: 'shadow-blue-800'
        };
    case 'blue-900':
        return {
            background: 'bg-blue-900',
            border: 'border-blue-900',
            text: 'text-blue-900',
            hover: 'hover:bg-blue-900',
            focus: 'focus:bg-blue-900',
            active: 'active:bg-blue-900',
            reverse: 'text-white',
            shadow: 'shadow-blue-900'
        };
    case 'blue-950':
        return {
            background: 'bg-blue-950',
            border: 'border-blue-950',
            text: 'text-blue-950',
            hover: 'hover:bg-blue-950',
            focus: 'focus:bg-blue-950',
            active: 'active:bg-blue-950',
            reverse: 'text-white',
            shadow: 'shadow-blue-950'
        };
    case 'teal-50':
        return {
            background: 'bg-teal-50',
            border: 'border-teal-50',
            text: 'text-teal-50',
            hover: 'hover:bg-teal-50',
            focus: 'focus:bg-teal-50',
            active: 'active:bg-teal-50',
            reverse: 'text-white',
            shadow: 'shadow-teal-50'
        };
    case 'teal-100':
        return {
            background: 'bg-teal-100',
            border: 'border-teal-100',
            text: 'text-teal-100',
            hover: 'hover:bg-teal-100',
            focus: 'focus:bg-teal-100',
            active: 'active:bg-teal-100',
            reverse: 'text-white',
            shadow: 'shadow-teal-100'
        };
    case 'teal-200':
        return {
            background: 'bg-teal-200',
            border: 'border-teal-200',
            text: 'text-teal-200',
            hover: 'hover:bg-teal-200',
            focus: 'focus:bg-teal-200',
            active: 'active:bg-teal-200',
            reverse: 'text-white',
            shadow: 'shadow-teal-200'
        };
    case 'teal-300':
        return {
            background: 'bg-teal-300',
            border: 'border-teal-300',
            text: 'text-teal-300',
            hover: 'hover:bg-teal-300',
            focus: 'focus:bg-teal-300',
            active: 'active:bg-teal-300',
            reverse: 'text-white',
            shadow: 'shadow-teal-300'
        };
    case 'teal-400':
        return {
            background: 'bg-teal-400',
            border: 'border-teal-400',
            text: 'text-teal-400',
            hover: 'hover:bg-teal-400',
            focus: 'focus:bg-teal-400',
            active: 'active:bg-teal-400',
            reverse: 'text-white',
            shadow: 'shadow-teal-400'
        };
    case 'teal-500':
        return {
            background: 'bg-teal-500',
            border: 'border-teal-500',
            text: 'text-teal-500',
            hover: 'hover:bg-teal-500',
            focus: 'focus:bg-teal-500',
            active: 'active:bg-teal-500',
            reverse: 'text-white',
            shadow: 'shadow-teal-500'
        };
    case 'teal-600':
        return {
            background: 'bg-teal-600',
            border: 'border-teal-600',
            text: 'text-teal-600',
            hover: 'hover:bg-teal-600',
            focus: 'focus:bg-teal-600',
            active: 'active:bg-teal-600',
            reverse: 'text-white',
            shadow: 'shadow-teal-600'
        };
    case 'teal-700':
        return {
            background: 'bg-teal-700',
            border: 'border-teal-700',
            text: 'text-teal-700',
            hover: 'hover:bg-teal-700',
            focus: 'focus:bg-teal-700',
            active: 'active:bg-teal-700',
            reverse: 'text-white',
            shadow: 'shadow-teal-700'
        };
    case 'teal-800':
        return {
            background: 'bg-teal-800',
            border: 'border-teal-800',
            text: 'text-teal-800',
            hover: 'hover:bg-teal-800',
            focus: 'focus:bg-teal-800',
            active: 'active:bg-teal-800',
            reverse: 'text-white',
            shadow: 'shadow-teal-800'
        };
    case 'teal-900':
        return {
            background: 'bg-teal-900',
            border: 'border-teal-900',
            text: 'text-teal-900',
            hover: 'hover:bg-teal-900',
            focus: 'focus:bg-teal-900',
            active: 'active:bg-teal-900',
            reverse: 'text-white',
            shadow: 'shadow-teal-900'
        };
    case 'teal-950':
        return {
            background: 'bg-teal-950',
            border: 'border-teal-950',
            text: 'text-teal-950',
            hover: 'hover:bg-teal-950',
            focus: 'focus:bg-teal-950',
            active: 'active:bg-teal-950',
            reverse: 'text-white',
            shadow: 'shadow-teal-950'
        };
    case 'green-50':
        return {
            background: 'bg-green-50',
            border: 'border-green-50',
            text: 'text-green-50',
            hover: 'hover:bg-green-50',
            focus: 'focus:bg-green-50',
            active: 'active:bg-green-50',
            reverse: 'text-white',
            shadow: 'shadow-green-50'
        };
    case 'green-100':
        return {
            background: 'bg-green-100',
            border: 'border-green-100',
            text: 'text-green-100',
            hover: 'hover:bg-green-100',
            focus: 'focus:bg-green-100',
            active: 'active:bg-green-100',
            reverse: 'text-white',
            shadow: 'shadow-green-100'
        };
    case 'green-200':
        return {
            background: 'bg-green-200',
            border: 'border-green-200',
            text: 'text-green-200',
            hover: 'hover:bg-green-200',
            focus: 'focus:bg-green-200',
            active: 'active:bg-green-200',
            reverse: 'text-white',
            shadow: 'shadow-green-200'
        };
    case 'green-300':
        return {
            background: 'bg-green-300',
            border: 'border-green-300',
            text: 'text-green-300',
            hover: 'hover:bg-green-300',
            focus: 'focus:bg-green-300',
            active: 'active:bg-green-300',
            reverse: 'text-white',
            shadow: 'shadow-green-300'
        };
    case 'green-400':
        return {
            background: 'bg-green-400',
            border: 'border-green-400',
            text: 'text-green-400',
            hover: 'hover:bg-green-400',
            focus: 'focus:bg-green-400',
            active: 'active:bg-green-400',
            reverse: 'text-white',
            shadow: 'shadow-green-400'
        };
    case 'green-500':
        return {
            background: 'bg-green-500',
            border: 'border-green-500',
            text: 'text-green-500',
            hover: 'hover:bg-green-500',
            focus: 'focus:bg-green-500',
            active: 'active:bg-green-500',
            reverse: 'text-white',
            shadow: 'shadow-green-500'
        };
    case 'green-600':
        return {
            background: 'bg-green-600',
            border: 'border-green-600',
            text: 'text-green-600',
            hover: 'hover:bg-green-600',
            focus: 'focus:bg-green-600',
            active: 'active:bg-green-600',
            reverse: 'text-white',
            shadow: 'shadow-green-600'
        };
    case 'green-700':
        return {
            background: 'bg-green-700',
            border: 'border-green-700',
            text: 'text-green-700',
            hover: 'hover:bg-green-700',
            focus: 'focus:bg-green-700',
            active: 'active:bg-green-700',
            reverse: 'text-white',
            shadow: 'shadow-green-700'
        };
    case 'green-800':
        return {
            background: 'bg-green-800',
            border: 'border-green-800',
            text: 'text-green-800',
            hover: 'hover:bg-green-800',
            focus: 'focus:bg-green-800',
            active: 'active:bg-green-800',
            reverse: 'text-white',
            shadow: 'shadow-green-800'
        };
    case 'green-900':
        return {
            background: 'bg-green-900',
            border: 'border-green-900',
            text: 'text-green-900',
            hover: 'hover:bg-green-900',
            focus: 'focus:bg-green-900',
            active: 'active:bg-green-900',
            reverse: 'text-white',
            shadow: 'shadow-green-900'
        };
    case 'green-950':
        return {
            background: 'bg-green-950',
            border: 'border-green-950',
            text: 'text-green-950',
            hover: 'hover:bg-green-950',
            focus: 'focus:bg-green-950',
            active: 'active:bg-green-950',
            reverse: 'text-white',
            shadow: 'shadow-green-950'
        };
    case 'black':
        return {
            background: 'bg-black',
            border: 'border-black',
            text: 'text-black',
            hover: 'hover:bg-black',
            focus: 'focus:bg-black',
            active: 'active:bg-black',
            reverse: 'text-white',
            shadow: 'shadow-black'
        };
    case 'white':
        return {
            background: 'bg-white',
            border: 'border-white',
            text: 'text-white',
            hover: 'hover:bg-white',
            focus: 'focus:bg-white',
            active: 'active:bg-white',
            reverse: 'text-black',
            shadow: 'shadow-white'
        };
    case 'transparent':
        return {
            background: 'bg-transparent',
            border: 'border-transparent',
            text: 'text-transparent',
            hover: 'hover:bg-transparent',
            focus: 'focus:bg-transparent',
            active: 'active:bg-transparent',
            reverse: 'text-transparent',
            shadow: 'shadow-transparent'
        };
    default:
        return {
            background: 'bg-black',
            border: 'border-black',
            text: 'text-black',
            hover: 'hover:bg-black',
            focus: 'focus:bg-black',
            active: 'active:bg-black',
            reverse: 'text-white',
            shadow: 'shadow-black'
        };
    }
};

export const getStatusColorStyles = (status: TYpAllStatus): TColorStyles => {
    switch (status) {
    case 'success':
        return {
            background: 'bg-green-50',
            border: 'border-green-200',
            text: 'text-green-600',
            color: 'green-600',
            hover: 'hover:bg-green-100',
            focus: 'focus:bg-green-150',
            active: 'active:bg-green-200',
            reverse: 'text-black',
            shadow: 'shadow-green-500'
        };
    case 'warning':
        return {
            background: 'bg-orange-50',
            border: 'border-orange-200',
            text: 'text-orange-600',
            color: 'orange-600',
            hover: 'hover:bg-orange-400',
            focus: 'focus:bg-orange-150',
            active: 'active:bg-orange-200',
            reverse: 'text-black',
            shadow: 'shadow-orange-500'
        };
    case 'error':
        return {
            background: 'bg-red-50',
            border: 'border-red-200',
            text: 'text-red-600',
            color: 'red-600',
            hover: 'hover:bg-red-400',
            focus: 'focus:bg-red-150',
            active: 'active:bg-red-200',
            reverse: 'text-black',
            shadow: 'shadow-red-500'
        };
    case 'info':
        return {
            background: 'bg-blue-50',
            border: 'border-blue-200',
            text: 'text-blue-800',
            color: 'blue-800',
            hover: 'hover:bg-blue-100',
            focus: 'focus:bg-blue-150',
            active: 'active:bg-blue-200',
            reverse: 'text-black',
            shadow: 'shadow-blue-500'
        };
    case 'loading':
        return {
            background: 'bg-neutral-50',
            border: 'border-neutral-200',
            text: 'text-neutral-600',
            color: 'neutral-600',
            hover: 'hover:bg-neutral-100',
            focus: 'focus:bg-neutral-150',
            active: 'active:bg-neutral-200',
            reverse: 'text-black',
            shadow: 'shadow-neutral-500'
        };
    case 'misc':
        return {
            background: 'bg-blue-600',
            border: 'border-neutral-600',
            text: 'text-neutral-600',
            color: 'neutral-600',
            hover: 'hover:bg-neutral-600',
            focus: 'focus:bg-neutral-600',
            active: 'active:bg-neutral-600',
            reverse: 'text-black',
            shadow: 'shadow-neutral-600'
        };
    case 'default':
        return {
            background: 'bg-neutral-50',
            border: 'border-neutral-200',
            text: 'text-neutral-600',
            color: 'neutral-950',
            hover: 'hover:bg-neutral-100',
            focus: 'focus:bg-neutral-150',
            active: 'active:bg-neutral-200',
            reverse: 'text-black',
            shadow: 'shadow-neutral-500'
        };
    }
};

export const getBackgroundColor = (color: TColors): string => getColorStyles(color).background;
export const getBorderColor = (color: TColors): string => getColorStyles(color).border;
export const getTextColor = (color: TColors): string => getColorStyles(color).text;
export const getBackgroundHoverColor = (color: TColors): string => getColorStyles(color).hover;
export const getBackgroundActiveColor = (color: TColors): string => getColorStyles(color).active;
export const getBackgroundFocusColor = (color: TColors): string => getColorStyles(color).focus;
export const getReverseColor = (color: TColors): string => getColorStyles(color).reverse;
export const getShadowColor = (color: TColors): string => getColorStyles(color).shadow;

export const getStatusBackgroundColor = (status: TYpAllStatus): string => getStatusColorStyles(status).background;
export const getStatusBorderColor = (status: TYpAllStatus): string => getStatusColorStyles(status).border;
export const getStatusTextColor = (status: TYpAllStatus): string => getStatusColorStyles(status).text;
export const getStatusBackgroundHoverColor = (status: TYpAllStatus): string => getStatusColorStyles(status).hover;
export const getStatusBackgroundActiveColor = (status: TYpAllStatus): string => getStatusColorStyles(status).active;
export const getStatusBackgroundFocusColor = (status: TYpAllStatus): string => getStatusColorStyles(status).focus;
export const getStatusReverseColor = (status: TYpAllStatus): string => getStatusColorStyles(status).reverse;
export const getStatusShadowColor = (status: TYpAllStatus): string => getStatusColorStyles(status).shadow;

export const getStatusColor = (status: TYpAllStatus): TTailwindColor => getStatusColorStyles(status)?.color ?? 'neutral-950';
