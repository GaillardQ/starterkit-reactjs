// @core
import type { TEnum } from '@core/misc/models/Enum.type';

export type TPokemonType = 'fire' | 'grass' | 'water' | undefined;

export default class PokemonTypeEnum {

    static code = (value: number): TPokemonType =>
        PokemonTypeEnum.values().find((p) => p.value === value)?.code || undefined;

    static value = (code: TPokemonType): number =>
        PokemonTypeEnum.values().find((p) => p.code === code)?.value || 0;

    static text = (value: number): string | '' =>
        PokemonTypeEnum.values().find((p) => p.value === value)?.text || '';

    static values = (): Array<TEnum<number, TPokemonType>> => [
        { value: 1, code: 'fire',	text: 'Feu' },
        { value: 2, code: 'grass', 	text: 'Plante' },
        { value: 3, code: 'water',  text: 'Eau' }
    ];
}
