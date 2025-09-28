import { httpClient } from '@/configs/axios';
import { queryClient } from '@/configs/react-query';
import { getAuthToken } from '@/helpers/auth';
import { generateReactQuery } from '@/helpers/react-query';

const GET_CHECK_TOKEN_KEY = 'GET_CHECK_TOKEN_KEY';

export interface GetCheckTokenResponse {
  data: {
    createdAt: string;
    email: string;
    id: string;
    updatedAt: string;
  };
}

export const invalidateGetCheckToken = () => {
  queryClient.invalidateQueries({ queryKey: [GET_CHECK_TOKEN_KEY] });
};

const getCheckToken = async (): Promise<GetCheckTokenResponse> => {
  const path: string = '/auth/check';

  const localStorageSavedToken = getAuthToken();

  if (!localStorageSavedToken) {
    throw new Error('It was do not possible check token without some JWT!');
  }

  try {
    const response: GetCheckTokenResponse = (
      await httpClient.get(path, { params: { token: localStorageSavedToken } })
    ).data;
    return response;
  } catch {
    throw new Error(path);
  }
};

export const useGetCheckToken = generateReactQuery<GetCheckTokenResponse, void>(
  GET_CHECK_TOKEN_KEY,
  getCheckToken,
);
