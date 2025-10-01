'use client';

import { useCountdownTime } from '@/hooks/useCountdownTime';
import { CATEGORIES_OPTIONS, LANGUAGES_OPTIONS } from '../../constants';
import { Webinar } from '../../interfaces';
import { Button } from 'primereact/button';

interface WebinarCardProps {
  infos: Webinar;
  onClick: () => void;
}

export const WebinarCard = ({ infos, onClick }: WebinarCardProps) => {
  const dot = (
    <div className="!bg-primary rounded-[50%] w-[0.5rem] h-[0.5rem]" />
  );
  const lineDotStyles = 'text-[0.875rem] flex items-center gap-2';

  const { days, hours, minutes, seconds } = useCountdownTime(
    new Date(infos.startsDate),
  );

  const normalizedSummary =
    infos.summary.length > 50
      ? `${infos.summary.slice(0, 50)}...`
      : infos.summary;

  const categories = CATEGORIES_OPTIONS.filter((category) =>
    infos.categories.includes(category.code),
  );

  const language = LANGUAGES_OPTIONS.find(
    (language) => language.code === infos.language,
  );

  const finishedText = infos.isFinished ? 'Finalizado' : 'Aberto';

  return (
    <div className="flex flex-col relative overflow-hidden bg-basic-gray shadow-md p-3 rounded-[0.5rem] w-[20rem] h-[20rem]">
      <span className="text-gray-600 font-bold relative pl-2.5">
        {normalizedSummary}
        <div className="w-[0.2rem] h-[100%] absolute left-0 top-0 !bg-primary rounded-[1rem]" />
      </span>
      <div className="flex flex-col gap-2 mt-3">
        <span className="text-[0.875rem] border-b border-strong-gray pb-1 text-gray-600">
          Categorias
        </span>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <span
              key={category.code}
              className="font-light bg-white p-1 px-2 rounded-[0.5rem] text-[0.875rem] w-fit"
            >
              {category.name}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <div className={lineDotStyles}>
          {dot}
          {language?.name}
        </div>
        <div className={lineDotStyles}>
          {dot}
          Inicia em: {days}d {hours}h {minutes}m {seconds}s
        </div>
        <div className={lineDotStyles}>
          {dot}
          {finishedText}
        </div>
      </div>
      <Button
        className="mt-3 self-end !text-[0.875rem]"
        label="Tenho interesse"
        onClick={onClick}
      />
      {infos.isFinished ? (
        <div className="absolute w-full h-[1rem] bg-[linear-gradient(to_right_bottom,#ff00a7,#ff0090,#ff007a,#ff0064,#ff004f)] bottom-0 left-0 right-0" />
      ) : (
        <div className="absolute w-full h-[1rem] bg-[linear-gradient(to_right_bottom,#0091ff,#00aaff,#00c1ff,#00d6ff,#00e9ff)] bottom-0 left-0 right-0" />
      )}
    </div>
  );
};
