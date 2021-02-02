// React libs
import React, { FC } from 'react';
import { Field, Form, Formik, FormikProps } from 'formik';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
// Components
import Autocomplete from '../../../UiKit/Form/Autocomplete/Autocomplete';
import Button from '../../../UiKit/Button/Button';
import Checkbox from '../../../UiKit/Form/Checkbox/Checkbox';
import DatePicker from '../../../UiKit/Form/DatePicker/DatePicker';
import Dropdown from '../../../UiKit/Form/Dropdown/Dropdown';
import RadioGroup from '../../../UiKit/Form/RadioGroup/RadioGroup';
import TextField from '../../../UiKit/Form/TextField/TextField';
import TimePicker from '../../../UiKit/Form/TimePicker/TimePicker';
// Type
import * as Types from './ExampleForm.type';
import * as AutocompleteTypes from '../../../UiKit/Form/Autocomplete/Autocomplete.type';
import * as DropdownTypes from '../../../UiKit/Form/Dropdown/Dropdown.type';

const ExampleForm: FC<Types.IProps> = ({
  defaultValues,
  onFormSubmit,
  validationSchema,
}) => {
  const cityOptions: AutocompleteTypes.IOption[] = [
    { value: 'AMBERIEU_EN_BUGEY', label: 'Ambérieu en Bugey' },
    { value: 'BOURGOIN_JALLIEU', label: 'Bourgoin-Jallieu' },
    { value: 'CHAMBERY', label: 'Chambéry' },
    { value: 'CLERMONT_FERRAND', label: 'Clermont Ferrand' },
    { value: 'ECULLY', label: 'Ecully' },
    { value: 'LEYMENT', label: 'Leyment' },
    { value: 'LYON', label: 'Lyon' },
    { value: 'RENNES', label: 'Rennes' },
    { value: 'SAINT_ETIENNE', label: 'Saint Etienne' },
    { value: 'SAINT_MAURICE_DE_REMENS', label: 'Saint Maurice de Remens' },
    { value: 'TOULON', label: 'Toulon' },
    { value: 'VIENNE', label: 'Vienne' },
    { value: 'VILLEURBANNE', label: 'Villeurbanne' },
  ];
  const dietOptions: DropdownTypes.IOption[] = [
    { value: 'ALL', label: 'Tout' },
    { value: 'CASHER', label: 'Casher' },
    { value: 'GLUTEN_FREE', label: 'Sans gluten' },
    { value: 'HALLAL', label: 'Hallal' },
    { value: 'VEGAN', label: 'Végan' },
  ];
  const foodOptions = [
    { label: 'Chips', value: 'CHIPS' },
    { label: 'Bières', value: 'BIERES' },
    { label: 'Saucisses', value: 'SAUCISSES' },
  ];

  return (
    <Formik
      initialValues={defaultValues}
      onSubmit={onFormSubmit}
      validationSchema={validationSchema}
    >
      {({ isSubmitting }: FormikProps<any>) => {
        return (
          <Form className='flex flex-col h-full justify-between'>
            <div className='flex-1'>
              <div className='mt-2'>
                <Field
                  id='name'
                  name='name'
                  component={TextField}
                  label='Nom'
                  helper='Pour que je sache qui tu es'
                />
              </div>
              <div className='mt-2'>
                <Field
                  id='email'
                  name='email'
                  component={TextField}
                  label='E-mail'
                  icon={{ component: AlternateEmailIcon, position: 'end' }}
                />
              </div>
              <div className='mt-2'>
                <Field
                  id='password'
                  name='password'
                  type='password'
                  component={TextField}
                  canDisplayPassword={true}
                  label='Mot de passe'
                />
              </div>
              <div className='mt-2'>
                <Field
                  id='city'
                  name='city'
                  component={Autocomplete}
                  label='Ville de départ'
                  options={cityOptions}
                />
              </div>
              <div className='mt-2'>
                <Field
                  id='birthdate'
                  name='birthdate'
                  component={DatePicker}
                  label='Date de naissance'
                />
              </div>
              <div className='flex items-center mt-2'>
                <div className='mr-2'>
                  <Field
                    id='here'
                    name='here'
                    component={Checkbox}
                    label='Je viens'
                    color='primary'
                  />
                </div>
                <div className='flex-1'>
                  <Field
                    id='arrivalDateTime'
                    name='arrivalDateTime'
                    component={DatePicker}
                    label="Date / Heure d'arrivée"
                    needTime={true}
                  />
                </div>
              </div>
              <div className='mt-2'>
                <Field
                  id='diet'
                  name='diet'
                  component={Dropdown}
                  options={dietOptions}
                  label='Régime alimentaire'
                />
              </div>
              <div className='mt-2'>
                <Field
                  id='food'
                  name='food'
                  component={RadioGroup}
                  options={foodOptions}
                  label="J'amène"
                />
              </div>
              <div className='mt-2'>
                <Field
                  id='attachment'
                  name='attachment'
                  component={Checkbox}
                  label='Je viens accompagné'
                />
              </div>
              <div className='mt-2'>
                <Field
                  id='departureTime'
                  name='departureTime'
                  component={TimePicker}
                  label='Heure du départ le dimanche'
                />
              </div>
            </div>
            <div className='flex justify-center lg:justify-end mt-3'>
              <Button
                variant='outlined'
                type='submit'
                disabled={isSubmitting}
                startIcon={isSubmitting ? <AutorenewIcon /> : null}
              >
                {isSubmitting ? 'Soumission...' : 'Soumettre'}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default ExampleForm;
