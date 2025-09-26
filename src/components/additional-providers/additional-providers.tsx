'use client';

import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import { TopBar } from '../top-bar';
import { PrimeReactProvider } from 'primereact/api';

interface AdditionalProvidersProps {
  children: ReactNode;
}

export const AdditionalProviders = ({ children }: AdditionalProvidersProps) => {
  return (
    <>
      <Toaster position="bottom-center" />
      <TopBar />
      <PrimeReactProvider>{children}</PrimeReactProvider>
    </>
  );
};
