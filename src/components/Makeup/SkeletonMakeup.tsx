import SkeletonCard from "./SkeletonCard";

const SkeletonMakeup = () => {
  return (
    <section className="w-full mx-atuo">
      <div className="grid grid-cols-2 tablet-s:grid-cols-3 laptop-m:grid-cols-4 gap-8">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </section>
  );
};

export default SkeletonMakeup;
