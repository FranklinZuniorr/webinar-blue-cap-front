import { useHandleModalLoginSearchParams } from '@/hooks/useHandleModalLoginSearchParams';

export const RenderModalLogin = () => {
  const { modal } = useHandleModalLoginSearchParams();
  return modal;
};
