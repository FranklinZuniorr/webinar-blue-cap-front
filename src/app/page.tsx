import { ENUM_LANGUAGES, ENUM_WEBINAR_CATEGORIES } from '@/constants';
import { Webinars } from '@/features/webinars';
import {
  getAllWebinarsByFilters,
  GetAllWebinarsByFiltersParams,
} from '@/features/webinars/api/get-all-webinars-by-filters';
import { Webinar } from '@/features/webinars/interfaces';

const fetchWebinarsSafe = async (
  params: GetAllWebinarsByFiltersParams | undefined = {},
): Promise<Webinar[]> => {
  try {
    return (await getAllWebinarsByFilters(params)).data;
  } catch {
    return [];
  }
};

interface PageSearchParams {
  categoria: ENUM_WEBINAR_CATEGORIES | undefined;
  dataFinal: string | undefined;
  idioma: ENUM_LANGUAGES | undefined;
  dataInicial: string | undefined;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<PageSearchParams>;
}) {
  const { categoria, dataFinal, idioma, dataInicial }: PageSearchParams =
    await searchParams;
  const defaultWebinars: Webinar[] = await fetchWebinarsSafe({
    category: categoria,
    endDate: dataFinal,
    language: idioma,
    startDate: dataInicial,
  });

  return (
    <div className="w-full flex justify-center">
      <Webinars defaultData={defaultWebinars} />
    </div>
  );
}
