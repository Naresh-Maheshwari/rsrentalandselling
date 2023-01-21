import { NextPage } from "next";
import React from "react";
import Banner from "~/components/Banner";

const Email: NextPage = () => {
  return (
    <>
      <Banner title="Email Confirmation" />
      <div className="container mx-auto bg-global_color_secondary">
        <div className="p-40 mt-10 mb-10 flex items-center justify-center flex-col">
          <p className="text-white 2xl:text-4xl">
            Thanks for reaching out. We will contact you soon.
          </p>
          <p className="text-white 2xl:text-2xl mt-5">
            Email: nammyDesigns@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Email;
