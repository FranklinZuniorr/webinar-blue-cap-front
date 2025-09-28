'use client';

import { useState } from 'react';
import { Webinar } from './interfaces';
import {
  GetAllWebinarsByFiltersParams,
  useGetAllWebinarsByFilters,
} from './api/get-all-webinars-by-filters';
import { Welcome } from './components/welcome';
import { Filters } from './components/filters';
import { WebinarCard } from './components/webinar-card';
import { SkeletonCards } from './components/skeleton-cards';
import { redirect } from 'next/navigation';

interface WebinarsProps {
  defaultData: Webinar[];
}

export const Webinars = ({ defaultData }: WebinarsProps) => {
  const [queryWebinarsFilters, setQueryWebinarsFilters] = useState<
    GetAllWebinarsByFiltersParams | undefined
  >(undefined);

  const { data: fetchedWebinars, isFetching } = useGetAllWebinarsByFilters(
    queryWebinarsFilters,
    { initialData: { data: defaultData } },
  );

  const normalizedWebinars = fetchedWebinars?.data || [];
  const hasWebinars = normalizedWebinars.length > 0;

  return (
    <div className="w-full mt-[4rem] flex flex-col items-center pb-6">
      <Welcome />
      <Filters onChange={setQueryWebinarsFilters} />
      {isFetching ? (
        <SkeletonCards />
      ) : (
        <>
          {hasWebinars ? (
            <div className="flex gap-4 mt-20 max-md:mt-10 max-w-[70rem] justify-center flex-wrap w-full">
              {normalizedWebinars.map((webinar) => (
                <WebinarCard
                  key={webinar.id}
                  infos={webinar}
                  onClick={() => redirect(`/webinar-detalhes/${webinar.id}`)}
                />
              ))}
            </div>
          ) : (
            <span className="mt-20 max-md:mt-10">
              Ops, nenhum webinar encontrado!
            </span>
          )}
        </>
      )}
    </div>
  );
};
