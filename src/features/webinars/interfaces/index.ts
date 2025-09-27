import { ENUM_LANGUAGES, ENUM_WEBINAR_CATEGORIES } from '@/constants';

export interface Webinar {
  id: string;
  summary: string;
  startsDate: string;
  duration: number;
  speakers: string[];
  categories: ENUM_WEBINAR_CATEGORIES[];
  language: ENUM_LANGUAGES;
  createdAt: string;
  updatedAt: string;
  isFinished: boolean;
}
