import { WebinarDetails } from '@/features/webinar-details';
import { getWebinarDetails } from '@/features/webinar-details/api/get-webinar-details';
import { Webinar } from '@/features/webinars/interfaces';
import { redirect } from 'next/navigation';

const handleGetWebinar = async (webinarId: string): Promise<Webinar | null> => {
  try {
    const response = (await getWebinarDetails({ webinarId })).data;

    return response;
  } catch {
    return null;
  }
};

export default async function Page({
  params,
}: {
  params: Promise<{ webinarId: string }>;
}) {
  const { webinarId } = await params;

  const webinar = await handleGetWebinar(webinarId);

  if (!webinar) {
    redirect('/');
  }

  return <WebinarDetails infos={webinar} />;
}
