import React from "react";
import {
  WhatsappIcon,
  WhatsappShareButton,
  TelegramIcon,
  TelegramShareButton,
  PinterestIcon,
  PinterestShareButton,
} from "react-share";
import { printIcon } from "@/utils/svgs";

const SocialShare = ({ title, featuredImage, excerpt }) => {
  return (
    <div className="mb-7 flex gap-4 print:hidden">
      <WhatsappShareButton
        url={typeof window !== "undefined" && window.location.href}
        title={`Check out this awesome recipe from The Hungry Baby Blog - ${title}`}
        separator=" - "
      >
        <WhatsappIcon size={48} round={true} />
      </WhatsappShareButton>

      <TelegramShareButton
        url={typeof window !== "undefined" && window.location.href}
        title={`Check out this awesome recipe from The Hungry Baby Blog - ${title}`}
        separator=" - "
      >
        <TelegramIcon size={48} round={true} />
      </TelegramShareButton>

      <PinterestShareButton
        url={typeof window !== "undefined" && window.location.href}
        media={featuredImage}
        description={`${title} - ${excerpt}`}
      >
        <PinterestIcon size={48} round={true} />
      </PinterestShareButton>

      <div
        className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-2 border-pink-900"
        onClick={() => window.print()}
      >
        {printIcon}
      </div>
    </div>
  );
};

export default SocialShare;
