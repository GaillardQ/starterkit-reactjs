// React libs
import { FormikHelpers } from 'formik';

export interface IBaseFormType<T> {
  defaultValues: T;
  miscData?: { [key: string]: any };
  miscFunctions?: { [key: string]: (...args: any) => any };
  onFormSubmit: (values: T, helpers: FormikHelpers<T>) => void;
  validationSchema: any;
}
