import { InferType } from 'yup';
import { enrollmentFormSchema } from '../schemas';

export type WebinarEnrollmentForm = InferType<typeof enrollmentFormSchema>;
