import { Skeleton as SkeletonPrime } from 'primereact/skeleton';

export const Skeleton = () => {
  return (
    <div className="w-[50rem] flex flex-col gap-3">
      <div className="w-full flex justify-center">
        <SkeletonPrime width="13.625rem" height="1.875rem" className="mb-3" />
      </div>
      <SkeletonPrime width="100%" height="4.75rem" />
      <SkeletonPrime width="100%" height="4.75rem" />
      <SkeletonPrime width="100%" height="4.75rem" />
      <SkeletonPrime width="100%" height="2.75rem" />
    </div>
  );
};
