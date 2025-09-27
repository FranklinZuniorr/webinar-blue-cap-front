export const ENVS = {
  BASE_URL_HTTP_CLIENT: process.env.NEXT_PUBLIC_BASE_URL_HTTP_CLIENT,
};

export enum ENUM_MODAL_SEARCH_PARAMS_TYPES {
  LOGIN = 'login',
}

export const MODAL_LOGIN_OPENED_SEARCH_PARAMS_KEY = 'modal';

export enum ENUM_WEBINAR_CATEGORIES {
  EDUCATIONAL = 'EDUCATIONAL',
  BUSINESS = 'BUSINESS',
  GENERAL = 'GENERAL',
}

export enum ENUM_LANGUAGES {
  PT = 'PT',
  EN = 'EN',
  ES = 'ES',
}

export const ptBRLocale = {
  firstDayOfWeek: 0,
  dayNames: [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
  ],
  dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'],
  dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
  monthNames: [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ],
  monthNamesShort: [
    'jan',
    'fev',
    'mar',
    'abr',
    'mai',
    'jun',
    'jul',
    'ago',
    'set',
    'out',
    'nov',
    'dez',
  ],
  today: 'Hoje',
  clear: 'Limpar',
};
