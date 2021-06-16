import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import UIButton from 'components/UI/Button/Button';
import useApi from 'components/utils/useApi';
import Field from 'components/Form/Field/Field';
import schema from './schema';
import './Form.css';

const initialValue = {
  name: '',
  gender: '',
  imageUrl: '',
  birthDate: '',
};

const EmployeeForm = ({ id }) => {
  const history = useHistory();
  const [load, loadInfo] = useApi({
    url: `/employees/${id}`,
    method: 'get',
  });

  const [save, saveInfo] = useApi({
    url: id ? `/employees/${id}` : '/employees',
    method: id ? 'put' : 'post',
    onCompleted: (response) => {
      if (!response.error) {
        history.push('/');
      }
    },
  });

  useEffect(() => {
    if (id) {
      load();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  function onSubmit(formValues) {
    save({
      data: formValues,
    });
  }

  const values = id ? loadInfo.data : initialValue;

  return (
    <div>
      <h1>Register</h1>
      <h2>New employee</h2>
      {!values ? (
        <div>Carrying...</div>
      ) : (
        <Formik
          initialValues={values}
          onSubmit={onSubmit}
          validationSchema={schema}
          render={() => (
            <Form>
              {saveInfo.loading && <span>Salving data...</span>}
              <div className="employee-form__group">
                <Field name="name" type="text" label="Name" />
              </div>
              <div className="employee-form__group">
                <Field name="birthDate" type="number" label="Birth Date" />
               </div> 
              <div className="employee-form__group">
                <Field name="gendre" type="dropdown" label="Gendre" />
              </div>
              <div className="employee-form__group">
                <Field name="e-mail" type="email" label="E-mail" />
              </div>
              <div className="employee-form__group">
                <Field name="CPF" type="number" label="CPF" />
              </div>
              <div className="employee-form__group">
                <Field name="startDate" type="number" label="Start Date" />
              </div>
              <div className="employee-form__group">
                <Field name="team" type="text" label="Team" />
              </div>
              
              <div>
                <UIButton component="button" type="submit">
                  Save
                </UIButton>
              </div>
            </Form>
          )}
        />
      )}
    </div>
  );
};

export default EmployeeForm;