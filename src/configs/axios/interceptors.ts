import { setLocalStorageAuthToken } from '@/helpers/auth';
import { ResponseMessage } from '@/interfaces';
import { AxiosError, AxiosResponse } from 'axios';
import toast from 'react-hot-toast';

export const handleSuccessResponse = async (
  response: AxiosResponse,
): Promise<AxiosResponse> => {
  const { status } = response;
  const isSuccess: boolean = status >= 200 && status <= 299;

  if (!isSuccess) {
    return Promise.reject(false);
  }

  if (isSuccess) {
    const ignoredPaths: string[] = [];
    const data: ResponseMessage = response.data as ResponseMessage;

    if (
      response.config?.method !== 'get' &&
      !ignoredPaths.includes(response.config?.url as string)
    ) {
      toast.success(data.message || 'Solicitação concluída!');
    }
  }

  return response;
};

export const handleErrorResponse = async (
  error: AxiosError,
): Promise<AxiosResponse> => {
  if (error.response) {
    const ignoredPaths: string[] = ['/usuarios/menu/user-by-token'];
    const data: ResponseMessage = error.response.data as ResponseMessage;
    const status = error.response.status;

    if (!ignoredPaths.includes(error.config?.url as string)) {
      toast.error(data.message || 'Erro na solicitação!');
    }

    const handleLogout = () => {
      if (!ignoredPaths.includes(error.config?.url as string)) {
        setLocalStorageAuthToken('');
        window.location.reload();
      }
    };

    switch (status) {
      case 403:
        handleLogout();
        break;
      case 401:
        handleLogout();
        break;
      default:
        break;
    }

    return Promise.reject(error);
  }

  toast.error(`${error.code}: ${error.message}`);
  return Promise.reject(error);
};
