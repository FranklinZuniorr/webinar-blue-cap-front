'use client';

import { useGetCheckToken } from '@/api/get-check-token';
import { useGetUserEnrollments } from '@/api/get-user-enrollments';
import { Spinner } from '@/components/spinner';
import { redirect } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { EnrollmentCard } from './components/enrollment-card';
import { Skeleton } from './components/skeleton';

export const UserEnrollments = () => {
  const {
    data: dataCheckToken,
    isFetching: isFetchingCheckToken,
    isPending: isPendingCheckToken,
  } = useGetCheckToken();

  const isLogged = !!dataCheckToken;

  const { data: dataEnrollments, isPending: isPendingGetUserEnrollments } =
    useGetUserEnrollments(
      { userId: dataCheckToken?.data.id || '' },
      { enabled: isLogged },
    );

  const normalizedEnrollments = dataEnrollments?.data || [];

  const handleVerifyLogin = useCallback(() => {
    if (isFetchingCheckToken) return;
    if (isLogged) return;

    redirect('/');
  }, [isLogged, isFetchingCheckToken]);

  useEffect(() => {
    handleVerifyLogin();
  }, [handleVerifyLogin]);

  if (isPendingCheckToken)
    return (
      <div className="mt-[6rem] w-full flex justify-center">
        <Spinner className="!text-primary !text-[1.5rem]" />
      </div>
    );

  return (
    <div className="w-full flex justify-center mt-[6rem] pb-20 px-2">
      <div className="w-[60rem] flex flex-col gap-4">
        <div className="relative pl-3">
          <span className="font-bold">Listagem das inscrições:</span>
          <span className="w-[0.3rem] h-[100%] absolute left-0 top-0 !bg-primary" />
        </div>

        {isPendingGetUserEnrollments ? (
          <Skeleton />
        ) : (
          <div className="flex flex-col gap-3">
            {normalizedEnrollments.map((enrollment) => (
              <EnrollmentCard key={enrollment.id} infos={enrollment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
