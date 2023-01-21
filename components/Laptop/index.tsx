import React, { ReactElement } from "react";
import { useFilter } from "~/context/filterContext";
import Card from "~/components/Card";

const LaptopContainer = (): ReactElement => {
  const { laptopListValues } = useFilter();
  return <Card laptopDetails={laptopListValues} />;
};

export default React.memo(LaptopContainer);
