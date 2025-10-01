'use client';

import { Webinar } from './interfaces';
import {
  GetAllWebinarsByFiltersParams,
  useGetAllWebinarsByFilters,
} from './api/get-all-webinars-by-filters';
import { Welcome } from './components/welcome';
import { Filters } from './components/filters';
import { WebinarCard } from './components/webinar-card';
import { SkeletonCards } from './components/skeleton-cards';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { ENUM_LANGUAGES, ENUM_WEBINAR_CATEGORIES } from '@/constants';
import { SEARCH_PARAMS_FILTER_KEYS } from './constants';
import { useState } from 'react';

interface WebinarsProps {
  defaultData: Webinar[];
}

export const Webinars = ({ defaultData }: WebinarsProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isChangedFilters, setIsChangedFilters] = useState<boolean>(false);

  const category =
    (searchParams.get(
      SEARCH_PARAMS_FILTER_KEYS.category,
    ) as ENUM_WEBINAR_CATEGORIES) || undefined;

  const language =
    (searchParams.get(SEARCH_PARAMS_FILTER_KEYS.language) as ENUM_LANGUAGES) ||
    undefined;

  const startDate =
    searchParams.get(SEARCH_PARAMS_FILTER_KEYS.startDate) || undefined;

  const endDate =
    searchParams.get(SEARCH_PARAMS_FILTER_KEYS.endDate) || undefined;

  const isEnabledGetAllWebinarsByFilters =
    (!!category || !!language || !!startDate || !!endDate) && isChangedFilters;

  const { data: fetchedWebinars, isFetching } = useGetAllWebinarsByFilters(
    {
      category,
      language,
      startDate,
      endDate,
    },
    {
      initialData: { data: defaultData },
      enabled: isEnabledGetAllWebinarsByFilters,
    },
  );

  const normalizedWebinars = fetchedWebinars?.data || [];
  const hasWebinars = normalizedWebinars.length > 0;

  const setQueryWebinarsFilters = (params: GetAllWebinarsByFiltersParams) => {
    const newSearchParams = new URLSearchParams(searchParams.toString());

    Object.entries(params).forEach(
      ([key, value]: [key: string, value: string]) => {
        const normalizedKey = SEARCH_PARAMS_FILTER_KEYS[key];
        if (!value) {
          newSearchParams.delete(normalizedKey);
          return;
        }
        newSearchParams.set(SEARCH_PARAMS_FILTER_KEYS[key], value);
      },
    );

    router.push(`?${newSearchParams.toString()}`);
    setIsChangedFilters(true);
  };

  return (
    <div className="w-full mt-[4rem] flex flex-col items-center pb-6">
      <Welcome />
      <Filters
        params={{
          category,
          endDate,
          language,
          startDate,
        }}
        onChange={setQueryWebinarsFilters}
      />
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
