import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

const SkeletonSliderHomePage = () => {
  const mobileSmall = [1, 2]; // 320
  const mobileMedium = [1, 2]; // 375
  const mobilelarge = [1, 2]; // 425
  const tabletSmall = [1, 2, 3]; // 600
  const tabletMedium = [1, 2, 3]; // 768
  const laptopSmall = [1, 2, 3, 4]; // 1024
  const laptopMedium = [1, 2, 3]; // 1200
  const laptopLarge = [1, 2, 3, 4]; // 1024


  const [currentArray, setCurrentArray] = useState<number[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setCurrentArray(laptopLarge);
      } else if (window.innerWidth >= 1200){
        setCurrentArray(laptopSmall);
      } else if (window.innerWidth >= 1024) {
        setCurrentArray(laptopSmall);
      } else if (window.innerWidth >= 768) {
        setCurrentArray(tabletMedium);
      } else if (window.innerWidth >= 550) {
        setCurrentArray(tabletSmall);
      } else {
        setCurrentArray(mobileSmall);
      }
    };

    window.addEventListener('resize', handleResize);

    // Call the handler right away so state gets updated on initial load
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  console.log('currentArray', currentArray);
  
  return (
    <div className="flex flex-row items-center justify-between mx-[25px] mobile-m:mx-[30px] mobile-l:mx-[35px] tablet-s:mx-[40px] tablet-m:mx-[60px] laptop-s:mx-[80px]  laptop-l:mx-[100px] py-2">
      
      {currentArray.map((item) => (
        <div key={item} className="space-y-2 flex flex-col">
          <Skeleton className="h-[250px] tablet-m:h-[384px] w-[120px] mobile-m:w-[150px] mobile-l:w-[160px] tablet-m:w-[200px] laptop-m:w-[250px] laptop-l:w-[300px] rounded-none" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-1/5" />
        </div>
      ))}
    </div>
  );
};

export default SkeletonSliderHomePage;