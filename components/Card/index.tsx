import React, { ReactElement } from "react";
import { PageProps } from "~/pages";

const Card = ({ laptopDetails }: PageProps): ReactElement => {
  return (
    <div className="mb-4 my-4">
      <div className="bg-white grid 2xl:grid-cols-4 gap-4">
        {(laptopDetails || []).map(({ id, model, specifications, price }) => {
          return (
            <React.Fragment key={id}>
              <div className="px-5 pb-5 py-5 w-full border-cyan-400 border 2xl:rounded-lg">
                <h2 className="font-semibold mb-4 2xl:text-xl">{model}</h2>
                <div dangerouslySetInnerHTML={{ __html: specifications }} />
                <p className="font-bold 2xl:my-4 2xl:text-lg">
                  Price: {price}/
                </p>
                <div className="flex justify-between flex-col w-full">
                  <a
                    href="#"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 2xl:my-4 uppercase"
                  >
                    GET IT OR RENT IT
                  </a>
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
