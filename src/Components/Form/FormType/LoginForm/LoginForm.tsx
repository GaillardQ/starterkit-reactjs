// React libs
import React, { FC } from 'react';
import { Field, Form, FormikProps, Formik } from 'formik';
import AutorenewIcon from '@material-ui/icons/Autorenew';
// Components
import Button from '../../../UiKit/Button/Button';
import TextField from '../../../UiKit/Form/TextField/TextField';
// Type
import * as Types from './LoginForm.type';

const LoginForm: FC<Types.IProps> = ({
  defaultValues,
  onFormSubmit,
  validationSchema,
}) => (
  <Formik
    initialValues={defaultValues}
    onSubmit={onFormSubmit}
    validationSchema={validationSchema}
  >
    {({ isSubmitting }: FormikProps<any>) => {
      return (
        <Form>
          <Field id='email' name='email' component={TextField} label='E-mail' />
          <Field
            id='password'
            name='password'
            type='password'
            component={TextField}
            label='Mot de passe'
          />
          <Button
            type='submit'
            disabled={isSubmitting}
            startIcon={isSubmitting ? <AutorenewIcon /> : null}
          >
            {isSubmitting ? 'Connexion' : 'Se connecter'}
          </Button>
        </Form>
      );
    }}
  </Formik>
);

LoginForm.propTypes = {};

export default LoginForm;
