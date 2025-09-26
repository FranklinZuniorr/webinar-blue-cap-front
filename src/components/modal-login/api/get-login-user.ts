import { httpClient } from '@/configs/axios';
import { generateReactQueryMutation } from '@/helpers/react-query';

const GET_LOGIN_USER_KEY = 'GET_LOGIN_USER_KEY';

interface GetLoginUserParams {
  email: string;
  password: string;
}

interface GetLoginUserResponse {
  data: {
    token: string;
  };
}

const getLoginUser = async (
  params: GetLoginUserParams,
): Promise<GetLoginUserResponse> => {
  const path: string = '/auth/login';

  try {
    const response: GetLoginUserResponse = (
      await httpClient.get(path, { params })
    ).data;

    return response;
  } catch {
    throw new Error(path);
  }
};

export const useGetLoginUser = generateReactQueryMutation<
  GetLoginUserResponse,
  GetLoginUserParams
>(GET_LOGIN_USER_KEY, getLoginUser);
