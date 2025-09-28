import { Enrollment } from '@/features/webinar-details/interfaces';
import dayjs from 'dayjs';
import { redirect } from 'next/navigation';
import { Button } from 'primereact/button';

interface EnrollmentCardProps {
  infos: Enrollment;
}

export const EnrollmentCard = ({ infos }: EnrollmentCardProps) => {
  const dot = (
    <div className="!bg-primary rounded-[50%] w-[0.5rem] h-[0.5rem]" />
  );
  const lineDotStyles =
    'text-[0.8rem] flex items-center gap-2 max-md:flex-col max-md:items-start';
  const { webinar, name, email, linkedinUrl, createdAt, webinarId } = infos;

  const normalizedCreatedAt = dayjs(createdAt).format('DD/MM/YYYY');
  return (
    <div className="flex justify-between w-full max-md:flex-col gap-5 bg-basic-gray shadow-md rounded-md p-3 min-md:!pl-[1.5rem] max-md:!pb-[1.5rem] relative overflow-hidden">
      <span className="h-full max-md:!h-[0.5rem] max-md:w-full absolute w-[0.5rem] bg-[linear-gradient(to_right_bottom,#0091ff,#00aaff,#00c1ff,#00d6ff,#00e9ff)] left-0 bottom-0" />

      <div className="flex flex-col">
        <div className="flex flex-col gap-2">
          <span className="!text-primary font-bold">{webinar.summary}</span>
        </div>

        <div className="mt-2 flex flex-col gap-2">
          <div className={lineDotStyles}>
            <div className="flex gap-2 items-center">
              {dot}
              <b>Nome de inscrição:</b>
            </div>
            {name}
          </div>
          <div className={lineDotStyles}>
            <div className="flex gap-2 items-center">
              {dot}
              <b>Email:</b>
            </div>
            {email}
          </div>
          <div className={lineDotStyles}>
            <div className="flex gap-2 items-center">
              {dot}
              <b>Linkedin:</b>
            </div>
            {linkedinUrl}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end max-md:flex-row max-md:items-center">
        <span className="text-[0.75rem] text-neutral-500">
          {normalizedCreatedAt}
        </span>
        <Button
          label="Ver webinar"
          className="!text-[0.75rem]"
          onClick={() => redirect(`/webinar-detalhes/${webinarId}`)}
        />
      </div>
    </div>
  );
};
