'use client';

import {
  ENUM_MODAL_SEARCH_PARAMS_TYPES,
  MODAL_LOGIN_OPENED_SEARCH_PARAMS_KEY,
} from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';

export const TopBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSetSearchParamsModalLogin = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(
      MODAL_LOGIN_OPENED_SEARCH_PARAMS_KEY,
      ENUM_MODAL_SEARCH_PARAMS_TYPES.LOGIN,
    );

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="bg-basic-gray flex items-center justify-between fixed left-0 right-0 h-[4rem] top-0 border-b border-strong-gray px-8 max-md:px-3">
      <div className="font-bold text-primary">🧢 Webinar Blue Cap</div>
      <div
        className="text-basic-text cursor-pointer"
        onClick={handleSetSearchParamsModalLogin}
      >
        Fazer login
      </div>
    </div>
  );
};
