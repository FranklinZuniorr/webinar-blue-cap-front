import { Webinar } from '@/features/webinars/interfaces';

export interface Enrollment {
  id: string;
  name: string;
  email: string;
  linkedinUrl: string;
  userId: string;
  webinarId: string;
  createdAt: string;
  updatedAt: string;
  webinar: Webinar;
}
