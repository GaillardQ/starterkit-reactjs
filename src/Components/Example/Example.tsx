// React libs
import React, { FC } from 'react';
import * as Yup from 'yup';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { FormikHelpers } from 'formik';
import { useSnackbar } from 'notistack';
// Components
import LocalLoader from '../UiKit/Loader/LocalLoader/LocalLoader';
import BaseCard from '../UiKit/Card/BaseCard/BaseCard';
import Typography from '../UiKit/Typography/Typography';
import DataTable from '../UiKit/DataTable/DataTable';
import ExampleForm from '../Form/FormType/ExampleForm/ExampleForm';
// Hooks
import useExampleData from '../../Data/Hooks/GetExampleData';
import useFailedExampleData from '../../Data/Hooks/GetFailedExampleData';
// Common
import Common from '../../Resources/Common';
// Type
import * as Types from './Example.type';
import * as FormTypes from '../Form/FormType/ExampleForm/ExampleForm.type';
import * as TableDataTypes from '../UiKit/DataTable/DataTable.type';

const Example: FC<Types.IProps> = () => {
  // Variables
  const { enqueueSnackbar } = useSnackbar();

  // Data
  const result = useExampleData();
  const failedResult = useFailedExampleData();

  // Renders
  const renderForm = () => {
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
        setTimeout(() => resolve(values), 1000);
      }).then(() => {
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
      <ExampleForm
        defaultValues={defaultValues}
        onFormSubmit={handleSubmit}
        validationSchema={validationSchema}
      />
    );
  };

  const renderTable = () => {
    const columns: TableDataTypes.ITableColumn[] = [
      {
        id: 'id',
        field: 'id',
        name: '#',
        headerAlign: 'center',
        align: 'center',
        orderBy: 'asc',
      },
      {
        id: 'name',
        field: 'name',
        name: 'Nom',
      },
      {
        id: 'singer',
        field: 'singer',
        name: 'Artiste / groupe',
      },
    ];
    const rows: TableDataTypes.ITableRow[] = [
      {
        id: 1,
        name: 'Fear Of The Dark',
        singer: 'Iron Maiden',
      },
      {
        id: 2,
        name: 'Hallowed Be Thy Name',
        singer: 'Iron Maiden',
      },
      {
        id: 3,
        name: 'Flight Of Icarus',
        singer: 'Iron Maiden',
      },
      {
        id: 4,
        name: 'Wait And Bleed',
        singer: 'Slipknot',
      },
    ];
    const getRowDetails = (r: any) => (
      <div className='flex items-center'>
        <img
          src='https://placekitten.com/200/150'
          alt='kitten'
          className='mr-4'
        />
        <div className='flex flex-col justify-center'>
          <div>{r.name}</div>
          <div>({r.singer})</div>
        </div>
      </div>
    );
    return (
      <DataTable
        columns={columns}
        isCollapsible={true}
        getRowDetails={getRowDetails}
        rows={rows}
        onCreate={() => alert('CREATE ITEM')}
      />
    );
  };

  return (
    <div className='h-full w-full'>
      <Typography variant='h2' component='h2'>
        EXAMPLE COMPONENT
      </Typography>
      <div className='-mx-2 my-2'>
        <div className='flex h-full w-full'>
          <BaseCard
            className='flex-1 h-40'
            content={
              result.isLoading || failedResult.isLoading ? (
                <LocalLoader />
              ) : (
                <div>
                  <div>{result?.data?.result}</div>
                  <div>{failedResult?.data?.result}</div>
                </div>
              )
            }
          />
          <BaseCard
            className='flex-1 h-40'
            content={
              <Link to={`/${Common.Routes.routeLogin}`}>Aller au login</Link>
            }
          />
        </div>
        <div className='flex w-full'>
          <BaseCard className='flex-1' content={renderForm()} />
        </div>
        <div className='flex w-full'>
          <BaseCard className='flex-1' content={renderTable()} />
        </div>
      </div>
    </div>
  );
};

Example.propTypes = {};

export default Example;
