import Link from "next/link";
import React, { ReactElement } from "react";

const Links = ["Terms and Conditions"];

const Footer = (): ReactElement => {
  return (
    <div className="bg-light_secondary text-white">
      <footer className="container mx-auto pb-4 py-4 px-5 shadow md:flex md:items-center md:justify-between md:py-6 md:pb-6">
        <span className="text-sm sm:text-center">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            GetItOrRentIt
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center text-sm sm:mt-0">
          {Links.map((link) => {
            return (
              <li key={link}>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  {link}
                </a>
              </li>
            );
          })}
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
