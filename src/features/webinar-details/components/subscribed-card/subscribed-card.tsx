import { useCountdownTime } from '@/hooks/useCountdownTime';

interface SubscribedCardProps {
  startsDate: string;
}

export const SubscribedCard = ({ startsDate }: SubscribedCardProps) => {
  const { days, hours, minutes, seconds } = useCountdownTime(
    new Date(startsDate),
  );

  return (
    <div className="flex justify-center items-center gap-3 w-[20rem] shadow-md rounded-md p-3">
      <i
        className="pi pi-verified !text-primary"
        style={{ fontSize: '2rem' }}
      />
      <div className="flex flex-col items-start">
        <span className="font-bold !text-primary">Inscrição realizada!</span>
        <span className="text-[0.875rem]">
          Inicia em {days}d {hours}h {minutes}m {seconds}s
        </span>
      </div>
    </div>
  );
};
