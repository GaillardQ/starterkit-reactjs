// React libs
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormikHelpers } from 'formik';
import moment from 'moment';
import { Typography } from '@material-ui/core';
// Layout
import BaseLayout from '../../Components/Layout/BaseLayout/BaseLayout';
// Components
import LoginForm from '../../Components/Form/FormType/LoginForm/LoginForm';
// Services
import LocalStorage from '../../Network/Services/Storage/LocalStorage';
// Contexts
import UserContext from '../../Data/Contexts/UserContext';
// Common
import Common from '../../Resources/Common';
// Type
import * as Types from './LoginScene.type';
import * as AuthTypes from '../../Data/Model/Auth.type';
import * as FormTypes from '../../Components/Form/FormType/LoginForm/LoginForm.type';

const LoginScene: FC<Types.IProps> = () => {
  // Variables
  const history = useHistory();

  // Renders
  const renderForm = (handlerUser: (u: AuthTypes.IUser) => void) => {
    const defaultValues = {
      email: '',
      password: '',
    };
    const validationSchema = Yup.object({
      email: Yup.string()
        .email('E-mail invalide')
        .required('E-mail requis'),
      password: Yup.string().required('Mot de passe requis'),
    });
    const handleSubmit = (
      values: FormTypes.IFormValues,
      { setSubmitting }: FormikHelpers<FormTypes.IFormValues>
    ) => {
      setSubmitting(true);
      new Promise(resolve => {
        setTimeout(() => resolve(), 1000);
      }).then(() => {
        handlerUser({ email: values.email });
        setSubmitting(false);
        LocalStorage.set(
          LocalStorage.keys.expiration_datetime,
          moment()
            .add(1, 'days')
            .unix()
        );
        history.push(`/${Common.Routes.routeLoggued}`);
      });
    };

    return (
      <div className='mt-6'>
        <LoginForm
          defaultValues={defaultValues}
          onFormSubmit={handleSubmit}
          validationSchema={validationSchema}
        />
      </div>
    );
  };

  return (
    <BaseLayout>
      <Typography variant='h1' component='h1'>
        Connexion
      </Typography>
      <UserContext.Consumer>
        {({ user, updateUser }) => <div>{renderForm(updateUser)}</div>}
      </UserContext.Consumer>
    </BaseLayout>
  );
};

export default LoginScene;
