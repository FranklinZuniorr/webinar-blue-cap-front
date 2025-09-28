import {
  CATEGORIES_OPTIONS,
  LANGUAGES_OPTIONS,
} from '@/features/webinars/constants';
import { Webinar } from '@/features/webinars/interfaces';
import dayjs from 'dayjs';

interface InfosProps {
  data: Webinar;
}

export const Infos = ({ data }: InfosProps) => {
  const dot = (
    <div className="!bg-primary rounded-[50%] w-[0.5rem] h-[0.5rem]" />
  );
  const lineDotStyles = 'text-[0.875rem] flex items-center gap-2';
  const {
    summary,
    categories,
    language,
    isFinished,
    speakers,
    duration,
    startsDate,
  } = data;

  const normalizedCategories = CATEGORIES_OPTIONS.filter((category) =>
    categories.includes(category.code),
  );

  const normalizedLanguage = LANGUAGES_OPTIONS.find(
    (languageOption) => languageOption.code === language,
  );

  const normalizedSpeakers = speakers.join(', ');
  const finishedText = isFinished ? 'Indisponível' : 'Disponível';
  const normalizedDuration = dayjs.duration(duration, 'seconds').asMinutes();
  const dynamicDurationText = normalizedDuration > 1 ? 'minutos' : 'minuto';
  const normalizedStartsDate = dayjs(startsDate).format('DD/MM/YYYY hh:mm:ss');

  return (
    <div className="w-full flex items-start pt-6 justify-center bg-[linear-gradient(to_bottom,#c4d7ff78,#d7e0ff80,#e7eaff8c,#f4f4fe7d,#ffffff85)] px-3 h-[30rem]">
      <div className="flex flex-col shadow-md w-full max-w-[40rem] h-fit rounded-3xl p-3 pl-5 pr-5 !pb-10 backdrop-blur-md bg-basic-white relative overflow-hidden">
        <div className="flex w-full text-center justify-center font-bold !text-primary tracking-[0.2rem] mt-3">
          {summary}
        </div>

        <div className="flex flex-wrap gap-2 justify-center mt-3 border-b border-neutral-300 pb-[1.5rem]">
          {normalizedCategories.map((category) => (
            <span
              key={category.code}
              className="font-light shadow-md bg-white p-1 px-2 rounded-[0.5rem] text-[0.875rem] w-fit"
            >
              {category.name}
            </span>
          ))}
        </div>

        <div className="font-semibold mt-4">Informações detalhadas:</div>
        <div className="mt-2 flex flex-col gap-2">
          <div className={lineDotStyles}>
            {dot}
            <b>Oradores:</b> {normalizedSpeakers}
          </div>
          <div className={lineDotStyles}>
            {dot}
            <b>Idioma:</b> {normalizedLanguage?.name}
          </div>
          <div className={lineDotStyles}>
            {dot}
            <b>Duração:</b> {normalizedDuration} {dynamicDurationText}
          </div>
          <div className={lineDotStyles}>
            {dot}
            <b>Início:</b> {normalizedStartsDate}
          </div>
        </div>

        <div className="w-full flex justify-center text-center mt-4 font-bold underline">
          {finishedText}
        </div>

        {isFinished ? (
          <div className="absolute w-full h-[1rem] bg-[linear-gradient(to_right_bottom,#ff00a7,#ff0090,#ff007a,#ff0064,#ff004f)] bottom-0 left-0 right-0" />
        ) : (
          <div className="absolute w-full h-[1rem] bg-[linear-gradient(to_right_bottom,#0091ff,#00aaff,#00c1ff,#00d6ff,#00e9ff)] bottom-0 left-0 right-0" />
        )}
      </div>
    </div>
  );
};
