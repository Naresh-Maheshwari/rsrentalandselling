import React, { ReactElement } from "react";
import Lottie from "react-lottie-player";
import Sphere from "~/assets/sphere.json";

type BannerProps = {
  title: string;
  subHeading?: string;
  isSvgVisible?: boolean;
};

// component to show page heading
const Banner = ({
  title,
  subHeading,
  isSvgVisible = false,
}: BannerProps): ReactElement => {
  return (
    <div className="bg-global_color_secondary">
      <div className="container mx-auto px-5 py-10 2xl:py-20">
        <h1 className="flex-col text-global_color_primary text-3xl font-bold flex items-center 2xl:text-8xl 2xl:flex-row">
          {isSvgVisible && (
            <span className="animated-logo self-start">
              <Lottie animationData={Sphere} play={true} />
            </span>
          )}
          <span>
            {title}
            <p className="text-white text-xl font-medium tracking-wide mt-3 2xl:text-xl 2xl:mt-4 2xl:max-w-4xl 2xl:ml-2">
              {subHeading}
            </p>
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Banner;
