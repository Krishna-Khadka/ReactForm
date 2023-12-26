import * as Yup from "yup"

export const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(30).required("Please Enter at least 2 word"),
    email:Yup.string().email().required("Please Enter Valid Email") ,
    password:Yup.string().min(8).required("Please enter at least 8 words") ,
    // confirm_password:Yup.string().required().oneOf([Yup.ref('password'),null],"Password must be matched")
})