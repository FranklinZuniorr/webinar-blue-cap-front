import { ENUM_LANGUAGES, ENUM_WEBINAR_CATEGORIES } from '@/constants';
import { DropdownOption } from '@/interfaces';

export const LANGUAGES_OPTIONS: DropdownOption<ENUM_LANGUAGES>[] = [
  { name: 'Inglês', code: ENUM_LANGUAGES.EN },
  { name: 'Português', code: ENUM_LANGUAGES.PT },
  { name: 'Espanhol', code: ENUM_LANGUAGES.ES },
];

export const CATEGORIES_OPTIONS: DropdownOption<ENUM_WEBINAR_CATEGORIES>[] = [
  { name: 'Educacional', code: ENUM_WEBINAR_CATEGORIES.EDUCATIONAL },
  { name: 'Negócios', code: ENUM_WEBINAR_CATEGORIES.BUSINESS },
  { name: 'Geral', code: ENUM_WEBINAR_CATEGORIES.GENERAL },
];

export const SEARCH_PARAMS_FILTER_KEYS: Record<string, string> = {
  language: 'idioma',
  category: 'categoria',
  startDate: 'dataInicial',
  endDate: 'dataFinal',
};
