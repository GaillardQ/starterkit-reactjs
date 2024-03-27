
interface IPokemonDetails {
  abilities: unknown;
  base_experience: unknown;
  cries: unknown;
  forms: unknown;
  game_indices: unknown;
  height: number;
  held_items: unknown;
  id: number;
  is_default: boolean;
  location_area_encounters: unknown;
  moves: unknown;
  name: string;
  order: number;
  past_abilities: unknown;
  past_types: unknown;
  species: unknown;
  sprites: unknown;
  stats: unknown;
  types: unknown;
  weight: number;
}

export class PokemonDetails implements IPokemonDetails{
    public abilities!: unknown;
    public base_experience!: unknown;
    public cries!: unknown;
    public forms!: unknown;
    public game_indices!: unknown;
    public height!: number;
    public held_items!: unknown;
    public id!: number;
    public is_default!: boolean;
    public location_area_encounters!: unknown;
    public moves!: unknown;
    public name!: string;
    public order!: number;
    public past_abilities!: unknown;
    public past_types!: unknown;
    public species!: unknown;
    public sprites!: unknown;
    public stats!: unknown;
    public types!: unknown;
    public weight!: number;

    static Empty(): PokemonDetails {
        return new PokemonDetails({
            abilities: '',
            base_experience: '',
            cries: '',
            forms: '',
            game_indices: '',
            height: 0,
            held_items: '',
            id: 0,
            is_default: false,
            location_area_encounters: '',
            moves: '',
            name: '',
            order: 0,
            past_abilities: '',
            past_types: '',
            species: '',
            sprites: '',
            stats: '',
            types: '',
            weight: 0
        });
    }

    public constructor(init?: Partial<PokemonDetails>) {
        Object.assign(this, init);
    }
}
