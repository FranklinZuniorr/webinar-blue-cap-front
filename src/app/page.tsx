import { Webinars } from '@/features/webinars';
import { getAllWebinarsByFilters } from '@/features/webinars/api/get-all-webinars-by-filters';
import { Webinar } from '@/features/webinars/interfaces';
import { use } from 'react';

const fetchWebinarsSafe = async () => {
  try {
    return await getAllWebinarsByFilters(undefined);
  } catch {
    return { data: [] };
  }
};

export default function Page() {
  const defaultWebinars: Webinar[] = use(fetchWebinarsSafe()).data;

  return (
    <div className="w-full flex justify-center">
      <Webinars defaultData={defaultWebinars} />
    </div>
  );
}
