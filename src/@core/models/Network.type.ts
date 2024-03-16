import { TWsException } from "./Error.type";

export type TPostResponse = undefined;
export type TPutResponse = undefined;
export type TDeleteResponse = undefined;
export type TPatchResponse = undefined;

export interface TUrlUpdate {
	key: string;
	newValue?: string | number | boolean | null;
  }
  
  export interface TCallParams {
	data?: unknown;
	origin?: unknown;
	forcedURL?: string;
	throwIfError?: boolean;
	urlParams?: TUrlUpdate[];
	isFakeDataCalled?: boolean;
	callResponseDelay?: number;
	endpointUpdates?: TUrlUpdate[];
	isFormData?: boolean | undefined;
	callHeaders?: Record<string, unknown>;
  }

  export class WsDataModel<T = undefined> {
	errors: TWsException[] | undefined;
	data: T | undefined;
	blob?: Blob;
	headers!: Headers;
	isExecuted?: boolean;
	isLoading!: boolean;
	isSuccess!: boolean;
  
	static Empty<T = undefined>(defaultData?: T): WsDataModel<T> {
		return new WsDataModel<T>({
			errors: undefined,
			data: defaultData,
			headers: new Headers(),
			isExecuted: false,
			isLoading: false,
			isSuccess: false
		});
	}
  
	public constructor(init?: Partial<WsDataModel<T>>) {
		Object.assign(this, init);
	}
  }