import React from "react";

type LoadingSkeletonProps = {
  hideOnMobile?: boolean;
};

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ hideOnMobile }) => {
  return (
    <div
      className={`${
        hideOnMobile ? "hidden lg:flex" : "flex"
      } w-[50%] md:w-full h-[420px] flex-col border border-black rounded shadow-md animate-pulse`}
    >
      <div className="h-full w-full rounded-t dark:bg-gray-600"></div>
    </div>
  );
};
export default LoadingSkeleton;
