import React from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-60 tablet-m:h-96 w-full rounded-none" />
      <div className="space-y-2 flex flex-col">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 " />
        <Skeleton className="h-4 w-1/4" />
      </div>
    </div>
  );
};

export default SkeletonCard;
