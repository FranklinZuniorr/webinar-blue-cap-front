import { Controller, useForm } from 'react-hook-form';
import { WebinarEnrollmentForm } from './interfaces';
import {
  invalidateGetCheckToken,
  useGetCheckToken,
} from '@/api/get-check-token';
import { yupResolver } from '@hookform/resolvers/yup';
import { enrollmentFormSchema } from './schemas';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import { Button } from 'primereact/button';
import { usePostWebinarEnrollment } from '../../api/post-webinar-enrollment';
import { Skeleton } from './skeleton';
import {
  invalidateGetUserEnrollments,
  useGetUserEnrollments,
} from '@/api/get-user-enrollments';
import { SubscribedCard } from '../subscribed-card';

interface FormProps {
  webinarId: string;
  isFinished: boolean;
  startsDate: string;
}

export const Form = ({ webinarId, isFinished, startsDate }: FormProps) => {
  const { data: dataCheckToken, isFetching: isFetchingCheckToken } =
    useGetCheckToken();
  const { data: dataUserEnrollments, isFetching: isFetchingUserEnrollments } =
    useGetUserEnrollments(
      { userId: dataCheckToken?.data.id || '' },
      { enabled: !!dataCheckToken },
    );

  const isLogged = !!dataCheckToken;
  const alreadySubscribed = !!dataUserEnrollments?.data.find(
    (enrollment) => enrollment.webinarId === webinarId,
  );

  const { mutate, isPending } = usePostWebinarEnrollment({
    onSuccess: () => {
      invalidateGetCheckToken();
      invalidateGetUserEnrollments();
      reset();
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WebinarEnrollmentForm>({
    resolver: yupResolver(enrollmentFormSchema),
  });

  const onSubmit = (data: WebinarEnrollmentForm) => {
    const userId = dataCheckToken?.data.id;

    if (!userId) return;

    mutate({ ...data, userId, webinarId });
  };

  const isLoading = isFetchingCheckToken || isFetchingUserEnrollments;

  const nameError = errors.name?.message;
  const emailError = errors.email?.message;
  const linkedinUrlError = errors.linkedinUrl?.message;

  return (
    <div className="w-full px-4 flex justify-center">
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          {isLogged ? (
            <>
              {alreadySubscribed ? (
                <SubscribedCard startsDate={startsDate} />
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="w-[50rem] flex flex-col gap-3"
                >
                  <span className="w-full flex justify-center text-[1.25rem] font-bold mb-3">
                    Realize o seu cadastro
                  </span>

                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => {
                      return (
                        <div className="flex flex-col gap-2">
                          <label>Nome</label>
                          <InputText {...field} placeholder="Seu nome" />
                          {!!nameError && (
                            <Message severity="error" text={nameError} />
                          )}
                        </div>
                      );
                    }}
                  />

                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => {
                      return (
                        <div className="flex flex-col gap-2">
                          <label>Email</label>
                          <InputText {...field} placeholder="Melhor email" />
                          {!!emailError && (
                            <Message severity="error" text={emailError} />
                          )}
                        </div>
                      );
                    }}
                  />

                  <Controller
                    name="linkedinUrl"
                    control={control}
                    render={({ field }) => {
                      return (
                        <div className="flex flex-col gap-2">
                          <label>Linkedin</label>
                          <InputText
                            {...field}
                            placeholder="Link do linkedin"
                          />
                          {!!linkedinUrlError && (
                            <Message severity="error" text={linkedinUrlError} />
                          )}
                        </div>
                      );
                    }}
                  />

                  <Button
                    label="Cadastrar"
                    type="submit"
                    loading={isPending}
                    disabled={isPending || isFinished}
                  />
                </form>
              )}
            </>
          ) : (
            <span>Faça login para continuar!</span>
          )}
        </>
      )}
    </div>
  );
};
