import { object, string } from 'yup';

export const enrollmentFormSchema = object().shape({
  name: string()
    .min(3, 'Insira no mínimo 3 letras!')
    .required('Campo obrigatório'),
  email: string().email('Email inválido!').required('O email é obrigatório!'),
  linkedinUrl: string()
    .matches(
      /^https?:\/\/(www\.)?linkedin\.com\/.*$/i,
      'Insira uma URL válida do LinkedIn!',
    )
    .required('A URL do LinkedIn é obrigatória!'),
});
