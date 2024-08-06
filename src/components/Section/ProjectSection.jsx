import React from "react";

const ProjectSection = () => {
  return (
    <div className="bg-black text-white flex flex-col justify-center items-center font-spartan pt-7 xl:pt-0">
      <div className="w-full flex justify-center bg-black text-white text-2xl gap-x-2 font-bold sm:text-3xl md:text-4xl ">
        למה
        <span className="text-transparent text-color bg-clip-text">
          בחר AppSpot
        </span>
        ?
      </div>
      <div className="flex text-center text-base sm:text-lg font-[300] mt-2 px-6 sm:px-4">
        התנסו במצוינות באומנות דיגיטלית עם צוות אנשי המקצוע המיומנים שלנו המסור
        לספק תוצאות יוצאות דופן.s
      </div>
      <div className="flex py-10 flex-col sm:flex-row gap-4">
        <div className="px-10 py-3 flex flex-col justify-center items-center">
          <div className="font-bold text-4xl">עשרים+</div>
          <div className="">הזמנות הושלמו</div>
        </div>
        {/* border-x-2 border-x-white */}
        <div className=" px-10 py-3 flex flex-col justify-center items-center">
          <div className="font-bold text-4xl">עשרים+</div>
          <div className="">לקוחות מרוצים</div>
        </div>
        <div className="px-10 py-3 flex flex-col justify-center items-center">
          <div className="font-bold text-4xl">עשרים+</div>
          <div className="">ניסיון</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
