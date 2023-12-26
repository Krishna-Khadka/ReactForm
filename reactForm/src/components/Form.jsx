import React from "react";
import { useFormik } from "formik";
import {signUpSchema} from "../schemas"

const initialValues = {
  name: "",
  email: "",
  password: "",
//   confirm_password: "",
};

const Form = () => {
  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {
      console.log(values);
      action.resetForm();
    },
    
  });
//   console.log(errors);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="" className="col-form-label">
              Name
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && touched.name ? <p className="text-red-600">{errors.name}</p> : null}
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="" className="col-form-label">
              Email
            </label>
          </div>
          <div className="col-auto">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? <p className="text-red-600">{errors.email}</p> : null}
          </div>
        </div>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="" className="col-form-label">
              Password
            </label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? <p className="text-red-600">{errors.password}</p> : null}
          </div>
        </div>
        {/* <div className="row g-3 align-items-center">
          <div className="col-auto">
            <label htmlFor="" className="col-form-label">
              Confirm Password
            </label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              className="form-control"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirm_password && touched.confirm_password ? <p className="text-red-600">{errors.confirm_password}</p> : null}
          </div>
        </div> */}
       <button type="submit">Register</button>
      </form>
    </>
  );
};

export default Form;
