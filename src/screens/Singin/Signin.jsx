import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useFormik } from "formik";

import "./signin.css";
import { loginSchema } from "../../schema";
import { useDispatch, useSelector } from "react-redux";
import {LoginAction} from '../../redux/actions/userAction'

const onSubmit = () => {
  window.location.href = '/user'
}
 
export const Signin = () => {
  const dispatch = useDispatch();
  const {user ,loading , error} = useSelector((state) => state.LoginReducer)
 
 
  const {values , handleChange , errors ,  handleBlur , handleSubmit  , touched} = useFormik({
    initialValues : {
      email : "" ,
      password : ""
    } ,
   validationSchema : loginSchema , 
   onSubmit
  })

  return (
    <div className="min-container">
      <div className="sign-in-body">

    <section className="left">
          <div className="back-image">
            <div className="image" />
          </div>
    </section>

        <section className="right">
          <h2> تسيجل الدخول </h2>
          <p>
            قم بتسجيل الدخول وابدا المنافسة واكتشف طرق جديدة للمذاكرة والتعلم
            والتدريب
          </p>

          <form autoComplete="off" onSubmit={handleSubmit}>
            <h5>البريد الاكترونى</h5>
            <InputText
             value={values.email}
             onChange={handleChange} 
             onBlur={handleBlur}
             id="email"  
             type="email" 
             className={errors.email &&  touched.email ? "email-error" : ""}
            />
            <label className="error-text">{errors.email}</label>

            <h5>كلمة المرور</h5>
            <InputText
             value={values.password}
             onChange={handleChange}
             onBlur={handleBlur}
             id="password"  
             type="password" 
             className={errors.password && touched.password ? "password-error" : ""}
            />
            <label className="error-text">{errors.password}</label>
             <Button label="تسجيل الدخول" id="btn-login"/>
          </form>
        </section>
    </div>
    </div>
  );
};
