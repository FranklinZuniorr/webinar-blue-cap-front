'use client';

import { Webinar } from '../webinars/interfaces';
import { Form } from './components/form';
import { Infos } from './components/infos';

interface WebinarDetailsProps {
  infos: Webinar;
}

export const WebinarDetails = ({ infos }: WebinarDetailsProps) => {
  return (
    <div className="mt-[4rem] pb-20">
      <Infos data={infos} />
      <Form
        webinarId={infos.id}
        isFinished={infos.isFinished}
        startsDate={infos.startsDate}
      />
    </div>
  );
};
