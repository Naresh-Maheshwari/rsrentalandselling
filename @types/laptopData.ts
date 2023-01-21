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
