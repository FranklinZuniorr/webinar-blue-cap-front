import { ModalLogin } from '@/components/modal-login';
import {
  ENUM_MODAL_SEARCH_PARAMS_TYPES,
  MODAL_LOGIN_OPENED_SEARCH_PARAMS_KEY,
} from '@/constants';
import { useRouter, useSearchParams } from 'next/navigation';
import { ReactElement } from 'react';

interface UseHandleModalLoginSearchParamsReturn {
  modal: ReactElement;
}

export const useHandleModalLoginSearchParams =
  (): UseHandleModalLoginSearchParamsReturn => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const modalSearchParams = searchParams.get(
      MODAL_LOGIN_OPENED_SEARCH_PARAMS_KEY,
    );

    const isOpenModalLogin =
      modalSearchParams === ENUM_MODAL_SEARCH_PARAMS_TYPES.LOGIN;

    const handleCloseModal = () => {
      const params = new URLSearchParams(searchParams.toString());

      params.delete(MODAL_LOGIN_OPENED_SEARCH_PARAMS_KEY);

      router.push(`?${params.toString()}`);
    };

    return {
      modal: (
        <ModalLogin isOpen={isOpenModalLogin} onClose={handleCloseModal} />
      ),
    };
  };
