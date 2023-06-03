import React, { useEffect, useState } from "react";

type ImageCardProps = {
  src: string;
  alt: string;
  setUseLocalImages?: (args: boolean) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({
  src,
  alt,
  setUseLocalImages,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <>
      {loading && (
        <div className="flex flex-col md:min-h-[420px] lg:min-h-[640px] h-[450px] border border-black rounded shadow-md animate-pulse">
          <div className="h-full w-full rounded-t dark:bg-gray-600"></div>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        onError={() => setUseLocalImages!(false)}
        onLoad={() => setLoading(false)}
        className={`${
          loading ? "hidden" : "block"
        } w-full h-auto object-cover rounded-lg`}
      />
    </>
  );
};
export default ImageCard;
