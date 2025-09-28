import { httpClient } from '@/configs/axios';
import { generateReactQueryMutation } from '@/helpers/react-query';

const POST_WEBINAR_ENROLLMENT_KEY = 'POST_WEBINAR_ENROLLMENT_KEY';

interface PostWebinarEnrollmentParams {
  name: string;
  email: string;
  linkedinUrl: string;
  userId: string;
  webinarId: string;
}

const postWebinarEnrollment = async (
  params: PostWebinarEnrollmentParams,
): Promise<void> => {
  const path: string = '/enrollment/register';

  try {
    await httpClient.post(path, params);
  } catch {
    throw new Error(path);
  }
};

export const usePostWebinarEnrollment = generateReactQueryMutation<
  void,
  PostWebinarEnrollmentParams
>(POST_WEBINAR_ENROLLMENT_KEY, postWebinarEnrollment);
