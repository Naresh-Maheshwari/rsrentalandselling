import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Card from "~/components/Card";
import { getLaptopDetails } from "~/pages/api/hello";

export type PageProps = {
  laptopDetails: Array<LaptopProps>;
};

export type LaptopProps = {
  availability: number;
  category: string;
  discounted_price: string;
  id?: number;
  laptop_condition: string;
  model: string;
  price: string;
  specifications: string;
};

// main component
const Home: NextPage<PageProps> = ({ laptopDetails }) => {
  return (
    <>
      <Head>
        <title>RS Computers</title>
      </Head>
      <div className="container mx-auto">
        <Card laptopDetails={laptopDetails} />
      </div>
    </>
  );
};

export default Home;

// server side function
export async function getServerSideProps() {
  const laptopDetails = await getLaptopDetails();
  return {
    props: {
      laptopDetails,
    },
  };
}
