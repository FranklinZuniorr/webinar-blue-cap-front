import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import { usePostRegisterUser } from '../../api/post-register-user';
import { UserForm } from '../../interfaces';
import { userSchema } from '../../schemas';

interface RegisterProps {
  onClose: () => void;
}

export const Register = ({ onClose }: RegisterProps) => {
  const { mutate, isPending } = usePostRegisterUser({
    onSuccess: () => onClose(),
  });

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
              <InputText {...field} placeholder="melhor senha" />
              {!!passwordError && (
                <Message severity="error" text={passwordError} />
              )}
            </div>
          );
        }}
      />
      <Button
        label="Cadastrar"
        type="submit"
        disabled={isPending}
        loading={isPending}
      />
    </form>
  );
};
