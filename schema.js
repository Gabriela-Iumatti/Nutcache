import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().email('E-mail must be valid').required('Required field'),
  imageUrl: yup
    .string()
    .elmail('E-mail must be valid')
    .required('Required field'),
  price: yup.number().required('Required field'),
});