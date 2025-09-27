'use client';

import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { TopBar } from '../top-bar';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/configs/react-query';
import { useHandleModalLoginSearchParams } from '@/hooks/useHandleModalLoginSearchParams';
import { addLocale } from 'primereact/api';
import { ptBRLocale } from '@/constants';

addLocale('pt-BR', ptBRLocale);

interface AdditionalProvidersProps {
  children: ReactNode;
}

export const AdditionalProviders = ({ children }: AdditionalProvidersProps) => {
  const { modal } = useHandleModalLoginSearchParams();
  return (
    <>
      <Toaster position="bottom-center" />
      <QueryClientProvider client={queryClient}>
        <TopBar />
        {children}
        {modal}
      </QueryClientProvider>
    </>
  );
};
