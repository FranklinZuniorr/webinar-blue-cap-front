import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { UserForm } from '../../interfaces';
import { userSchema } from '../../schemas';
import { useGetLoginUser } from '../../api/get-login-user';
import { setLocalStorageAuthToken } from '@/helpers/auth';
import { useState } from 'react';
import { setTokenHttpClient } from '@/configs/axios';
import { invalidateGetCheckToken } from '@/api/get-check-token';

interface LoginProps {
  onClose: () => void;
}

export const Login = ({ onClose }: LoginProps) => {
  const [isShowingPassword, setIsShowingPassword] = useState<boolean>(true);

  const { mutate, isPending } = useGetLoginUser({
    onSuccess: ({ data: { token } }) => handleSuccessLogin(token),
  });

  const handleSuccessLogin = (token: string) => {
    setLocalStorageAuthToken(token);
    setTokenHttpClient(token);
    invalidateGetCheckToken();
    onClose();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(userSchema),
  });

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  const onSubmit = (data: UserForm) => {
    mutate(data);
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Email</label>
              <InputText {...field} placeholder="melhoremail@gmail.com" />
              {!!emailError && <Message severity="error" text={emailError} />}
            </div>
          );
        }}
      />
      <Controller
        name="password"
        control={control}
        render={({ field }) => {
          return (
            <div className="flex flex-col gap-2">
              <label htmlFor="username">Senha</label>
              <div className="p-inputgroup flex-1">
                <InputText
                  {...field}
                  type={isShowingPassword ? 'text' : 'password'}
                />
                <Button
                  icon={`pi ${isShowingPassword ? 'pi-eye' : 'pi-eye-slash'}`}
                  onClick={() => setIsShowingPassword((prev) => !prev)}
                  type="button"
                />
              </div>

              {!!passwordError && (
                <Message severity="error" text={passwordError} />
              )}
            </div>
          );
        }}
      />
      <Button
        label="Entrar"
        type="submit"
        disabled={isPending}
        loading={isPending}
      />
    </form>
  );
};
