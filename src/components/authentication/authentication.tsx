'use client';

import { setTokenHttpClient } from '@/configs/axios';
import { getAuthToken } from '@/helpers/auth';
import { ReactNode, useEffect } from 'react';

interface AuthenticationProps {
  children: ReactNode;
}

export const Authentication = ({ children }: AuthenticationProps) => {
  const savedToken = getAuthToken();

  useEffect(() => {
    if (!savedToken) return;

    setTokenHttpClient(savedToken);
  }, [savedToken]);

  return children;
};
