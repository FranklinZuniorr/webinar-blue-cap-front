import axios from 'axios';
import { ENVS } from '@/constants';
import { handleErrorResponse, handleSuccessResponse } from './interceptors';

export const httpClient = axios.create({
  baseURL: ENVS.BASE_URL_HTTP_CLIENT,
});

export const setTokenHttpClient = (newToken?: string) => {
  httpClient.defaults.headers.common.Authorization = newToken
    ? `Bearer ${newToken}`
    : undefined;
};

httpClient.interceptors.response.use(
  handleSuccessResponse,
  handleErrorResponse,
);
