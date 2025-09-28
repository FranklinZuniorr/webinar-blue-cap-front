import { Skeleton as SkeletonPrime } from 'primereact/skeleton';

export const Skeleton = () => {
  return (
    <div className="flex flex-col gap-3">
      <SkeletonPrime
        className="max-md:!h-[18.0625rem] !h-[8.5625rem]"
        width="100%"
      />
      <SkeletonPrime
        className="max-md:!h-[18.0625rem] !h-[8.5625rem]"
        width="100%"
      />
      <SkeletonPrime
        className="max-md:!h-[18.0625rem] !h-[8.5625rem]"
        width="100%"
      />
    </div>
  );
};
