// React libs
import React, { FC } from 'react';
import * as Yup from 'yup';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FormikHelpers } from 'formik';
import { useSnackbar } from 'notistack';
import { Card, Typography } from '@material-ui/core';
// Components
import Loader from '../UiKit/Loader/Loader';
import ExampleForm from '../Form/FormType/ExampleForm/ExampleForm';
// Type
import * as Types from './Example.type';
import * as FormTypes from '../Form/FormType/ExampleForm/ExampleForm.type';
// Hooks
import useExampleData from '../../Hooks/Example';
import useFailedExampleData from '../../Hooks/FailedExample';
// Common
import Common from '../../Resources/Common';

const Example: FC<Types.IProps> = () => {
  const { enqueueSnackbar } = useSnackbar();

  const result = useExampleData();
  const failedResult = useFailedExampleData();

  const cardClasses = 'bg-gray-800 m-2 p-4 text-white';

  const defaultValues = {
    arrivalDateTime: moment()
      .add(2, 'months')
      .add(3, 'days')
      .add(1, 'hour')
      .add(10, 'minutes'),
    attachment: false,
    birthdate: moment()
      .subtract(20, 'years')
      .subtract(3, 'months')
      .subtract(4, 'days'),
    city: 'LYON',
    departureTime: moment()
      .add(2, 'months')
      .add(5, 'days')
      .add(8, 'hours')
      .add(25, 'minutes'),
    diet: 'GLUTEN_FREE',
    email: 'test@test.fr',
    food: '',
    here: true,
    name: 'Odile',
    password: 'Yolo2015+',
  };
  const handleSubmit = (
    values: FormTypes.IFormValues,
    { setSubmitting }: FormikHelpers<FormTypes.IFormValues>
  ) => {
    setSubmitting(true);
    new Promise((resolve, reject) => {
      setTimeout(() => resolve({}), 1000);
    }).then((data: any) => {
      console.log('FORM', values);
      enqueueSnackbar('Soumission du formulaire ok :)', {
        variant: 'success',
      });
      setSubmitting(false);
    });
  };

  const validationSchema = Yup.object({
    arrivalDateTime: Yup.date()
      .nullable()
      .required("Date / Heure d'arrivée requises"),
    birthdate: Yup.date()
      .nullable()
      .required('Date de naissance requise'),
    city: Yup.string().required('Ville requise'),
    departureTime: Yup.date()
      .nullable()
      .required('Heure de départ requise'),
    diet: Yup.string().required('Régime alimentaire obligatoire'),
    email: Yup.string()
      .email('E-mail invalide')
      .required('E-mail requis'),
    food: Yup.string().required('Il faut amener un truc'),
    here: Yup.boolean().oneOf([true], 'Oh, présence obligatoire'),
    name: Yup.string().required('Nom requis'),
    password: Yup.string().required('Mot de passe requis'),
  });

  return (
    <div className='h-full w-full'>
      <Typography variant='h2' component='h2'>
        EXAMPLE COMPONENT
      </Typography>
      <div className='flex h-full w-full'>
        <Card className={`${cardClasses} flex-1 h-24`}>
          <div>
            {!result ? (
              <Loader />
            ) : (
              <div>
                {result.error
                  ? result.error.join('<br />')
                  : result.data && result.data.result}
              </div>
            )}
            {!failedResult || !failedResult.error ? (
              <Loader />
            ) : (
              <div>
                {failedResult.error
                  ? failedResult.error.map((e: string, index: number) => (
                      <div key={index}>{e}</div>
                    ))
                  : failedResult.data && failedResult.data.result}
              </div>
            )}
          </div>
        </Card>
        <Card className={`${cardClasses} flex-1 h-24`}>
          <Link to={`/${Common.Routes.routeLogin}`}>Aller au login</Link>
        </Card>
      </div>
      <div className='flex h-full w-full'>
        <Card className={`${cardClasses} flex-1`}>
          <ExampleForm
            defaultValues={defaultValues}
            onFormSubmit={handleSubmit}
            validationSchema={validationSchema}
          />
        </Card>
      </div>
    </div>
  );
};

export default Example;
