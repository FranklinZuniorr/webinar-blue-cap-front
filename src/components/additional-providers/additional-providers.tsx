'use client';

import { ReactNode, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { TopBar } from '../top-bar';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/configs/react-query';
import { addLocale } from 'primereact/api';
import { ptBRLocale } from '@/constants';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { RenderModalLogin } from '../render-modal-login';

dayjs.extend(duration);

addLocale('pt-BR', ptBRLocale);

interface AdditionalProvidersProps {
  children: ReactNode;
}

export const AdditionalProviders = ({ children }: AdditionalProvidersProps) => {
  return (
    <>
      <Toaster position="bottom-center" />
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={null}>
          <TopBar />
          <RenderModalLogin />
        </Suspense>
        {children}
      </QueryClientProvider>
    </>
  );
};
