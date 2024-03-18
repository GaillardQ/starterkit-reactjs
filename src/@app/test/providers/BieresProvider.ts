import type { IProvider } from '@core/models/Network.type';
import type { TCallReturn } from '@core/providers/NetworkProvider';

export interface IBieresProvider extends IProvider {
  data: {
    catalog: TCallReturn<string[]>
  }
}
const useBieres = (): IBieresProvider =>
// Variables
//   const controller = new AbortController();
// const { signal } = controller;

    ({
        data: {
            catalog: {
                data: [],
                errors: undefined,
                headers: new Headers(),
                isLoading: false,
                isSuccess: true,
                isExecuted: false,
                fetch: () => new Promise(()=> null)
            }
        }
    });

export default useBieres;
