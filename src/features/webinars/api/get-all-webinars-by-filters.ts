import { ENUM_LANGUAGES, ENUM_WEBINAR_CATEGORIES } from '@/constants';
import { Webinar } from '../interfaces';
import { httpClient } from '@/configs/axios';
import { generateReactQuery } from '@/helpers/react-query';

export const GET_ALL_WEBINARS_BY_FILTERS_KEY =
  'GET_ALL_WEBINARS_BY_FILTERS_KEY';

export interface GetAllWebinarsByFiltersParams {
  startDate?: string;
  endDate?: string;
  category?: ENUM_WEBINAR_CATEGORIES;
  language?: ENUM_LANGUAGES;
}

export interface GetAllWebinarsByFiltersResponse {
  data: Webinar[];
}

export const getAllWebinarsByFilters = async (
  params: GetAllWebinarsByFiltersParams | undefined,
): Promise<GetAllWebinarsByFiltersResponse> => {
  const path: string = '/webinar/all-by-filters';

  try {
    const response: GetAllWebinarsByFiltersResponse = (
      await httpClient.get(path, { params })
    ).data;
    return response;
  } catch {
    throw new Error(path);
  }
};

export const useGetAllWebinarsByFilters = generateReactQuery<
  GetAllWebinarsByFiltersResponse,
  GetAllWebinarsByFiltersParams | undefined
>(GET_ALL_WEBINARS_BY_FILTERS_KEY, getAllWebinarsByFilters);
