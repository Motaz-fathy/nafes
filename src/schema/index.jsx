import * as yup from "yup";


export const loginSchema = yup.object().shape({

  email: yup.string().email("ادخل البريد الصحيح ").required(" يجب ادخال البريد *"),
  pass: yup
    .string()
    .matches()
    .required("يجب ادخال كلمة المرور")
    
});
