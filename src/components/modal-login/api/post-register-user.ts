import { httpClient } from '@/configs/axios';
import { generateReactQueryMutation } from '@/helpers/react-query';

const POST_REGISTER_USER_KEY = 'POST_REGISTER_USER_KEY';

interface PostRegisterUserParams {
  email: string;
  password: string;
}

const postRegisterUser = async (
  params: PostRegisterUserParams,
): Promise<void> => {
  const path: string = '/auth/register';

  try {
    await httpClient.post(path, params);
  } catch {
    throw new Error(path);
  }
};

export const usePostRegisterUser = generateReactQueryMutation<
  void,
  PostRegisterUserParams
>(POST_REGISTER_USER_KEY, postRegisterUser);
