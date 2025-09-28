import { httpClient } from '@/configs/axios';
import { queryClient } from '@/configs/react-query';
import { Enrollment } from '@/features/webinar-details/interfaces';
import { generateReactQuery } from '@/helpers/react-query';

const GET_USER_ENROLLMENTS_KEY = 'GET_USER_ENROLLMENTS_KEY';

interface GetUserEnrollmentsParams {
  userId: string;
}

interface GetUserEnrollmentsResponse {
  data: Enrollment[];
}

export const invalidateGetUserEnrollments = (
  params?: GetUserEnrollmentsParams,
) => {
  queryClient.invalidateQueries({
    queryKey: params
      ? [GET_USER_ENROLLMENTS_KEY, params]
      : [GET_USER_ENROLLMENTS_KEY],
  });
};

const getUserEnrollments = async (
  params: GetUserEnrollmentsParams,
): Promise<GetUserEnrollmentsResponse> => {
  const path: string = `/enrollment/all/${params.userId}`;

  try {
    const response: GetUserEnrollmentsResponse = (await httpClient.get(path))
      .data;
    return response;
  } catch {
    throw new Error(path);
  }
};

export const useGetUserEnrollments = generateReactQuery<
  GetUserEnrollmentsResponse,
  GetUserEnrollmentsParams
>(GET_USER_ENROLLMENTS_KEY, getUserEnrollments);
