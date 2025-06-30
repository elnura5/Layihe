import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './style.css';

export const AddAdmin = () => {
  return (
    <Formik
      initialValues={{
        title: '',
        videoUrl: '',
        year: '',
        description: '',
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('Başlıq mütləqdir'),
        videoUrl: Yup.string().url('Düzgün URL daxil edin').required('Video linki mütləqdir'),
        year: Yup.number()
          .typeError('Sadəcə rəqəm daxil edin')
          .min(1900, '1900-dən böyük olmalıdır')
          .max(new Date().getFullYear(), 'İndiki ildən böyük ola bilməz')
          .required('İl mütləqdir'),
        description: Yup.string().required('Təsvir mütləqdir'),
      })}
      onSubmit={(values) => {
       axios.post('http://localhost:3000/api/cizgifilmler', values)

      }}
    >
      {formik => (
        <form onSubmit={formik.handleSubmit} className="admin-form">
          <label htmlFor="title">Başlıq</label>
          <input
            id="title"
            type="text"
            {...formik.getFieldProps('title')}
          />
          {formik.touched.title && formik.errors.title && (
            <div className="error">{formik.errors.title}</div>
          )}

          <label htmlFor="videoUrl">Video URL</label>
          <input
            id="videoUrl"
            type="text"
            {...formik.getFieldProps('videoUrl')}
          />
          {formik.touched.videoUrl && formik.errors.videoUrl && (
            <div className="error">{formik.errors.videoUrl}</div>
          )}

          <label htmlFor="year">İl</label>
          <input
            id="year"
            type="number"
            {...formik.getFieldProps('year')}
          />
          {formik.touched.year && formik.errors.year && (
            <div className="error">{formik.errors.year}</div>
          )}

          <label htmlFor="description">Təsvir</label>
          <textarea
            id="description"
            rows="4"
            {...formik.getFieldProps('description')}
          />
          {formik.touched.description && formik.errors.description && (
            <div className="error">{formik.errors.description}</div>
          )}

          <button type="submit">Əlavə et</button>
        </form>
      )}
    </Formik>
  );
};
