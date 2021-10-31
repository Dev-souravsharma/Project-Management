import * as yup from 'yup';
const schema = {
  login: yup.object({
    email: yup.string().trim().required('Please Enter Email'),
    password: yup.string().trim().required('Please Enter Password'),
  }),
  signup: yup.object({
    name: yup.string().trim().required(),
    email: yup.string().trim().required(),
    password: yup.string().trim().required(),
    confirmPassword: yup.string().trim().required(),
  }),
};
export default schema;
