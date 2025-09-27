import { Skeleton } from 'primereact/skeleton';

export const SkeletonCards = () => {
  return (
    <div className="flex gap-4 mt-20 max-w-[70rem] justify-center flex-wrap w-full">
      <Skeleton width="20rem" height="20rem" />
      <Skeleton width="20rem" height="20rem" />
      <Skeleton width="20rem" height="20rem" />
    </div>
  );
};
