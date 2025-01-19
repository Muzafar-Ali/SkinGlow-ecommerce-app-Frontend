import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

const screen = {
 mobileSmall : [1, 2], // 320
 mobileMedium: [1, 2], // 375
 mobilelarge : [1, 2], // 425
 tabletSmall : [1, 2, 3], // 600
 tabletMedium: [1, 2, 3], // 768
 laptopSmall : [1, 2, 3, 4], // 1024
 laptopMedium: [1, 2, 3], // 1200
 laptopLarge : [1, 2, 3, 4], 
}

const SkeletonSliderHomePage = () => {

  const [currentArray, setCurrentArray] = useState<number[]>([]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1440) {
        setCurrentArray(screen.laptopLarge);
      } else if (window.innerWidth >= 1200){
        setCurrentArray(screen.laptopSmall);
      } else if (window.innerWidth >= 1024) {
        setCurrentArray(screen.laptopSmall);
      } else if (window.innerWidth >= 768) {
        setCurrentArray(screen.tabletMedium);
      } else if (window.innerWidth >= 550) {
        setCurrentArray(screen.tabletSmall);
      } else {
        setCurrentArray(screen.mobileSmall);
      }
    };

    window.addEventListener('resize', handleResize);

    // Call the handler right away so state gets updated on initial load
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
    <div className="flex flex-row items-center justify-between mx-[25px] mobile-m:mx-[30px] mobile-l:mx-[35px] tablet-s:mx-[40px] tablet-m:mx-[60px] laptop-s:mx-[80px]  laptop-l:mx-[100px] py-2">
      
      {currentArray.map((item) => (
        <div key={item} className="space-y-2 flex flex-col relative">
          <Skeleton className="h-[250px] tablet-m:h-[384px] w-[120px] mobile-m:w-[150px] mobile-l:w-[160px] tablet-m:w-[200px] laptop-m:w-[250px] laptop-l:w-[300px] rounded-none px-5" >
          <div className="h-full w-full rounded-none mt-5 laptop-s:mt-20 text-sm tablet-s:text-base laptop-s:text-xl  text-neutral-900 tracking-wide">Data will take few seconds to reflect on first load <br/><br/> as we are using free Backend service of render.com.
          </div>
          </Skeleton>
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