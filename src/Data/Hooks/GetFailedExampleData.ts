// React libs
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
// Types
import * as CommonTypes from '../../Data/Model/Common.type';
import * as ExampleTypes from '../../Data/Model/Example.type';
import * as WsExceptionTypes from '../../Data/Model/WsException.type';
// services
import ExampleService from '../../Network/Services/ExampleService';

export interface IGetExampleDataHook
  extends CommonTypes.IHook<ExampleTypes.IExample | undefined> {}

const useFailedExampleData = (): IGetExampleDataHook => {
  // Variables
  const { enqueueSnackbar } = useSnackbar();

  // State
  const [data, setData]: [
    ExampleTypes.IExample | undefined,
    Function
  ] = useState<ExampleTypes.IExample | undefined>(undefined);
  const [isLoading, setIsLoading]: [boolean, Function] = useState(false);

  // Effects
  useEffect(() => {
    setIsLoading(true);
    ExampleService.getFailedExample()
      .then((data: ExampleTypes.IExample) => {
        setData(data);
        enqueueSnackbar(data.result, { variant: 'success' });
        setIsLoading(false);
      })
      .catch((e: WsExceptionTypes.IWsException) => {
        if (e && e.message) {
          e.message.forEach((message: string) =>
            enqueueSnackbar(message, { variant: 'error' })
          );
        }
        setIsLoading(false);
      });

    return () => {};
  }, [enqueueSnackbar]);

  return { data, isLoading };
};

export default useFailedExampleData;
