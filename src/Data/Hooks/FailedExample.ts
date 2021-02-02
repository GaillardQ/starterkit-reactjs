// React libs
import { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
// Types
import * as ExampleTypes from '../Network/Model/Example.type';
import * as WsExceptionTypes from '../Network/Model/WsException.type';
// services
import ExampleService from '../Network/Service/ExampleService';

export interface IHookResult {
  data: ExampleTypes.IExample | null;
  error: string[] | null;
}

const useFailedExampleData = (): IHookResult | null => {
  const { enqueueSnackbar } = useSnackbar();
  const [example, setExample]: [IHookResult | null, Function] = useState(null);

  useEffect(() => {
    function handleExampleChange(data: ExampleTypes.IExample) {
      setExample({ data, error: null });
    }

    ExampleService.getFailedExample()
      .then(handleExampleChange)
      .catch((e: WsExceptionTypes.IWsException) => {
        setExample({ data: null, error: e && e.message ? e.message : [] });
        if (e && e.message) {
          e.message.forEach((message: string) =>
            enqueueSnackbar(message, { variant: 'error' })
          );
        }
      });

    return () => {};
  }, [enqueueSnackbar]);

  return example;
};

export default useFailedExampleData;
