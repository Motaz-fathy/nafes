import React, { useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useFormik } from "formik";
import "./signin.css";
import { loginSchema } from "../../schema";
import { useDispatch, useSelector } from "react-redux";
import {LoginAction} from '../../redux/actions/userAction'

// import toast lib 
import { useRef } from "react";
import { Toast } from 'primereact/toast';
 
export const Signin = () => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.LoginReducer)
  const toast = useRef(null);
const showError = () => {
    toast.current.show({severity:'error', summary: 'Error', detail:'كلمة المرور غير صحيحة', life: 5000});
}
  const showSuccess = () => {
      toast.current.show({severity:'success', summary: 'Success', detail:'تم تسجيل الدخول بنجاح', life: 5000});
  }

  const onSubmit = ()  => {
    
     if(user.status === true) {
      showSuccess()
      window.location.href = '/user'
     }    
     else {
      showError()
      window.location.href = '/nafes'
     }
  }
 
  const {values , handleChange , errors ,  handleBlur , handleSubmit  , touched} = useFormik({
    initialValues : {
      email : "" ,
      pass : ""
    } ,
   validationSchema : loginSchema , 
   onSubmit
  })

  useEffect(() => {
    dispatch(LoginAction(values.email , values.pass))
  },[dispatch , values.email , values.pass])
  return (
    <div className="min-container">
      <div className="sign-in-body">

    <section className="left">
          <div className="back-image">
            <div className="image" />
          </div>
    </section>
    <Toast ref={toast} />

        <section className="right">
          <h2> تسيجل الدخول </h2>
          <p>
            قم بتسجيل الدخول وابدا المنافسة واكتشف طرق جديدة للمذاكرة والتعلم
            والتدريب
          </p>

          <form autoComplete="off" onSubmit={handleSubmit} method="POST">
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
             value={values.pass}
             onChange={handleChange}
             onBlur={handleBlur}
             id="pass"  
             type="pass" 
             className={errors.pass && touched.pass ? "pass-error" : ""}
            />
            <label className="error-text">{errors.pass}</label>
             <Button label="تسجيل الدخول" id="btn-login" />
          </form>
        </section>
    </div>
    </div>
  );
};
