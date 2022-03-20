import React from "react";
import Image from "next/image";
import Link from "next/link";

const PluggedProducts = ({ pluggedProduct }) => {
  return (
    <div>
      <h2 className="mb-5">Products we recommend</h2>

      <p className="mb-10 text-sm">
        Full disclosure: All products we recommend are used by us and the
        opinions expressed are our own. Neither are we sponsored by anyone nor
        do we have any affiliate links. We do not earn any commission if you
        purchase the products using the links below.
      </p>

      <div className="max-w-[300px] ">
        <Link href={pluggedProduct.product_url} passHref={true}>
          <a target="_blank">
            <div className="relative h-[400px] w-[300px] rounded-t-xl bg-black">
              <Image
                src={pluggedProduct.product_image}
                alt={pluggedProduct.product_name}
                layout="fill"
                objectFit="contain"
                placeholder="blur"
                blurDataURL={pluggedProduct.product_image + "/tr:bl-10"}
              />
            </div>
            <p className="mt-3 text-center text-xl font-semibold">
              {pluggedProduct.product_name}
            </p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PluggedProducts;
