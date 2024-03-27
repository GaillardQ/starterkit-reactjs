export type TPokemon = {
  name: string;
  url: string;
}

interface IPokemonsList {
	count: number;
  next: string;
  previous: string;
  results: TPokemon[];
}

export class PokemonsList implements IPokemonsList{
    public count!: number;
    public next!: string;
    public previous!: string;
    public results!: TPokemon[];

    static Empty(): PokemonsList {
        return new PokemonsList({
            count: 0,
            next: '',
            previous: '',
            results: []
        });
    }

    public constructor(init?: Partial<PokemonsList>) {
        Object.assign(this, init);
    }
}
