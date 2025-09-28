import { httpClient } from '@/configs/axios';
import { Webinar } from '@/features/webinars/interfaces';
import { generateReactQuery } from '@/helpers/react-query';

export const GET_WEBINAR_DETAILS_KEY = 'GET_WEBINAR_DETAILS_KEY';

interface GetWebinarDetailsParams {
  webinarId: string;
}

interface GetWebinarDetailsResponse {
  data: Webinar;
}

export const getWebinarDetails = async (
  params: GetWebinarDetailsParams,
): Promise<GetWebinarDetailsResponse> => {
  const path: string = `/webinar/${params.webinarId}`;

  try {
    const response: GetWebinarDetailsResponse = (await httpClient.get(path))
      .data;

    return response;
  } catch {
    throw new Error(path);
  }
};

export const useGetWebinarDetails = generateReactQuery<
  GetWebinarDetailsResponse,
  GetWebinarDetailsParams
>(GET_WEBINAR_DETAILS_KEY, getWebinarDetails);
