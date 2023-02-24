import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const loginSchema = yup.object().shape({

  email: yup.string().email("ادخل البريد الصحيح ").required(" يجب ادخال البريد *"),
  password: yup
    .string()
    .min(8 , " ادخل 8 ارقام او احرف على الاقل * ")
    .matches(passwordRules, { message: " ادخل كلمة مرور تتكون من ارقام واحروف كبيرة وصغيرة *" })
    .required("يجب ادخال كلمة المرور")
    
});
