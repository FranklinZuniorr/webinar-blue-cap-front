'use client';

import { useGetCheckToken } from '@/api/get-check-token';
import {
  ENUM_MODAL_SEARCH_PARAMS_TYPES,
  MODAL_LOGIN_OPENED_SEARCH_PARAMS_KEY,
} from '@/constants';
import { redirect, useRouter, useSearchParams } from 'next/navigation';
import { Spinner } from '../spinner';
import { Button } from 'primereact/button';
import { setLocalStorageAuthToken } from '@/helpers/auth';

export const TopBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { data, isPending } = useGetCheckToken();

  const isLogged = !!data;

  const handleSetSearchParamsModalLogin = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.set(
      MODAL_LOGIN_OPENED_SEARCH_PARAMS_KEY,
      ENUM_MODAL_SEARCH_PARAMS_TYPES.LOGIN,
    );

    router.push(`?${params.toString()}`);
  };

  const handleLogout = () => {
    setLocalStorageAuthToken('');
    window.location.reload();
  };

  return (
    <div className="bg-white flex items-center justify-center fixed left-0 right-0 h-[4rem] top-0 border-b border-strong-gray z-10">
      <div className="w-full max-w-[60rem] flex items-center justify-between px-3">
        <div
          className="font-bold !text-primary cursor-pointer"
          onClick={() => redirect('/')}
        >
          🧢 Webinar Blue Cap
        </div>

        {isPending ? (
          <Spinner className="!text-primary" />
        ) : (
          <>
            {isLogged ? (
              <Button icon="pi pi-sign-out" onClick={handleLogout} />
            ) : (
              <div
                className="text-basic-text cursor-pointer"
                onClick={handleSetSearchParamsModalLogin}
              >
                Fazer login
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
