import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { PageProps } from "~/@types/laptopData";
import Banner from "~/components/Banner";
import Filters from "~/components/Filter";
import LaptopContainer from "~/components/Laptop";
import { FilterProvider } from "~/context/filterContext";
import { getLaptopDetails } from "~/pages/api/hello";

// main component
const Home: NextPage<PageProps> = ({ laptopDetails }) => {
  return (
    <>
      <Head>
        <title>RS Computers</title>
        <meta
          name="description"
          content="our laptop rental website offers a wide selection of top-of-the-line laptops for rent and buy at affordable prices. whether you need a laptop for a business trip, a presentation or a temporary replacement for a broken device, we have the perfect solution for you."
        />
      </Head>
      {/* banner with heading and subheading */}
      <Banner
        title="GET IT OR RENT IT"
        subHeading="Our inventory includes the latest models from leading brands such
              as Dell, HP, and Lenovo, with options for both window and Mac
              operating systems. Trust us for all your laptop rental and buy
              needs."
        isSvgVisible={true}
      />
      <FilterProvider laptopDetails={laptopDetails}>
        {/* filters */}
        <Filters />
        {/* container to show laptop products */}
        <LaptopContainer />
      </FilterProvider>
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
