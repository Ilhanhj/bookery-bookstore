import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[180px] w-[120px] rounded-md md:h-[250px] md:w-[160px] lg:h-[230px] lg:w-[150px]" />
      <div className="flex flex-col justify-center space-y-2">
        <Skeleton className="h-4 w-[100px] md:w-[120px] lg:w-[150px]" />
        <Skeleton className="h-4 w-[50px] md:w-[70px] lg:w-[80px]" />
        <Skeleton className="h-4 w-[20px] md:w-[25px] lg:w-[30px]" />
      </div>
    </div>
  );
}
