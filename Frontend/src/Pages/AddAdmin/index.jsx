import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./style.css"
export const AddAdmin = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Required'),
        email: Yup.string()
          .required('Required'),
          password: Yup.number()
          .required('Required'),
      })}
      onSubmit={(values) => {
        axios.post("https://northwind.vercel.app/api/categories",values,{
          title: 'Axios POST Request',
          body: 'This is a sample POST request using Axios.',
          userId: 1,
        } )
        .then((response) => {
          console.log('Data sent successfully:', response.data);
        })
        .catch((error) => {
          console.error('Error:', error.message);
        });
      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="name"> Name</label>
          <input
            id="name"
            type="text"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}

          <label htmlFor="email"> email</label>
          <input
            id="email"
            type="string"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}

          <label htmlFor="password">password</label>
          <input id="text" type="number" {...formik.getFieldProps('password')} />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}

          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};