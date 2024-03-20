export type TPokemon = {
  name: string;
  url: string;
}

interface IPokemonList {
	count: number;
  next: string;
  previous: string;
  results: TPokemon[];
}

export class PokemonList implements IPokemonList{
    public count!: number;
    public next!: string;
    public previous!: string;
    public results!: TPokemon[];

    static Empty(): PokemonList {
        return new PokemonList({
            count: 0,
            next: '',
            previous: '',
            results: []
        });
    }

    public constructor(init?: Partial<PokemonList>) {
        Object.assign(this, init);
    }
}
