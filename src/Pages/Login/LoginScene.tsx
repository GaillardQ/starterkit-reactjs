// React libs
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import moment from 'moment';
import { Typography } from '@material-ui/core';
// Layout
import BaseLayout from '../../Components/Layout/BaseLayout/BaseLayout';
// Components
import LoginForm from '../../Components/Form/FormType/LoginForm/LoginForm';
// Services
import LocalStorage from '../../Network/Service/Storage/LocalStorage';
// Common
import Common from '../../Resources/Common';
// Type
import * as Types from './LoginScene.type';
import * as FormTypes from '../../Components/Form/FormType/LoginForm/LoginForm.type';

const LoginScene: FC<Types.IProps> = () => {
  const history = useHistory();

  const renderForm = () => {
    const Form = withFormik<FormTypes.IProps, FormTypes.IFormValues>({
      mapPropsToValues: () => {
        return {
          email: '',
          password: '',
        };
      },
      validationSchema: Yup.object({
        email: Yup.string()
          .email('E-mail invalide')
          .required('E-mail requis'),
        password: Yup.string().required('Mot de passe requis'),
      }),

      handleSubmit: (values: FormTypes.IFormValues, { setSubmitting }) => {
        setSubmitting(true);
        new Promise((resolve, reject) => {
          setTimeout(() => resolve({}), 1000);
        }).then((data: any) => {
          setSubmitting(false);
          LocalStorage.set(
            LocalStorage.keys.expiration_datetime,
            moment()
              .add(1, 'days')
              .unix()
          );
          LocalStorage.set(LocalStorage.keys.login, values);
          history.push(`/${Common.Routes.routeLoggued}`);
        });
      },
    })(LoginForm);
    return (
      <div className='mt-6'>
        <Form />
      </div>
    );
  };

  return (
    <BaseLayout>
      <Typography variant='h1' component='h1' data-testid='title'>
        Connexion
      </Typography>
      <div>{renderForm()}</div>
    </BaseLayout>
  );
};

export default LoginScene;
