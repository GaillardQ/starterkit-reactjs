
export interface TWsException {
  property: string;
  code: string;
  message: string;
  exception: string;
  isNotFound?: boolean;
}
export interface TWsExceptionList {
  erreurs: TWsException[]
}