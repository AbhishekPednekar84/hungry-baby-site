import React from "react";
import Link from "next/link";
import Image from "next/image";

const SocialChannels = ({ iconSize }) => {
  return (
    <div className="grid grid-cols-2 place-items-center">
      <Link href="https://pin.it/5JgQBsu" passHref={true}>
        <a target="_blank" className="hover-link text-lg font-bold">
          <Image
            src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/pinterest-1_W5nSHgjxu.svg"
            alt="Link to our Pinterest board"
            height={iconSize}
            width={iconSize}
          />
        </a>
      </Link>
      <Link href="https://www.instagram.com/thehungrybabyblog/" passHref={true}>
        <a target="_blank" className="hover-link text-lg font-bold">
          <Image
            src="https://ik.imagekit.io/ykidmzssaww/Hungry-Baby/site-images/instagram-2-1_U_Vrl3Xkc.svg"
            alt="Link to our Instagram page"
            height={iconSize}
            width={iconSize}
          />
        </a>
      </Link>
    </div>
  );
};

export default SocialChannels;
