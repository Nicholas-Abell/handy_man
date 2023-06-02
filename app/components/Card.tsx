import React, { useEffect, useState } from "react";

type CardProps = {
  img: string;
  title: string;
  setUseLocalImages?: (args: boolean) => void;
};

const Card = ({ img, title, setUseLocalImages }: CardProps) => {
  const [loading, setLoading] = useState(true);

  const imageHandler = () => {
    setLoading(false);
  };

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <>
      <div
        className={`${
          loading ? "hidden" : "block"
        } bg-red-800 text-white border-black border-4 rounded-lg min-w-[250px] h-[250px] w-[250px] hover:shadow-lg scrollbar-hide z-10`}
      >
        <img
          onLoad={imageHandler}
          onError={() => setUseLocalImages!(false)}
          src={img}
          className="w-full h-[70%]"
        />
        <div className="w-ful z-10 h-[30%] flex justify-center items-center">
          <h2 className="text-2xl font-bold ">{title}</h2>
        </div>
      </div>

      {loading && (
        <div className="flex flex-col m-8 border border-black rounded shadow-md min-w-[250px] h-[250px] w-[250px] animate-pulse">
          <div className="h-48 rounded-t dark:bg-gray-600"></div>
          <div className="flex-1 px-4 py-8 space-y-4 sm:p-10 dark:bg-gray-900"></div>
        </div>
      )}
    </>
  );
};

export default Card;
