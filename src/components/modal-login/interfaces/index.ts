import { InferType } from 'yup';
import { userSchema } from '../schemas';

export type UserForm = InferType<typeof userSchema>;
