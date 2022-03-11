import React from "react";
import Image from "next/image";

// Component imports
import ServerErrorHeadLayout from "@/components/layout/head/ServerErrorHeadLayout";

const ServerError = () => {
  return (
    <ServerErrorHeadLayout>
      <div className="mx-10 flex h-screen flex-col items-center justify-center">
        <div className="relative h-[400px] w-[400px] md:w-[450px]">
          <Image
            src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/500_39Pks6BUI.svg"
            alt="Internal server error"
            layout="fill"
            placeholder="blur"
            blurDataURL="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/500_39Pks6BUI.svg/tr:bl-10"
          />
        </div>
        <p className="mt-10 text-center text-xl font-bold">
          Oops! The cat's out of the bag and seems to have pulled a plug!!
        </p>
        <p className="mt-5 text-center text-xl font-bold">
          We are looking into it.
        </p>
      </div>
    </ServerErrorHeadLayout>
  );
};

export default ServerError;
