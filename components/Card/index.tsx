import Link from "next/link";
import React, { ReactElement } from "react";
import { PageProps } from "~/@types/laptopData";

const Card = ({ laptopDetails }: PageProps): ReactElement => {
  return (
    <div className="container mx-auto mb-5 my-5 px-5 sm:px-0 md:px-5 2xl:px-0">
      <div className="grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {(laptopDetails || []).map(({ id, model, specifications, price }) => {
          const beforeContent = model.substring(0, 1);
          return (
            <React.Fragment key={id}>
              <div
                data-before={beforeContent}
                className={`px-5 pb-5 py-5 w-full bg-light_secondary text-white relative overflow-hidden with-bullets before:content-[attr(data-before)] before:absolute text-orientation before:font-bold before:text-global_color_primary before:flex before:items-center before:justify-center before:w-full`}
              >
                <h2 className="font-medium mb-4 text-2xl">{model}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: specifications }}
                  className="px-5 laptop-specifications"
                />
                <p className="font-bold my-4 text-lg">Price: {price}/</p>
                <div className="flex justify-between flex-col w-full">
                  <Link
                    href="/emailconfirmation"
                    className="text-global_color_secondary bg-global_color_primary text-sm px-5 py-3 text-center my-4 uppercase font-bold 2xl:text-base hover:text-black hover:bg-white"
                  >
                    GET IT OR RENT IT
                  </Link>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
