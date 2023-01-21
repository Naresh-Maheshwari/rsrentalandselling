import {
  createContext,
  ReactNode,
  useContext,
  useMemo,
  useState,
  useCallback,
} from "react";
import { LaptopProps } from "~/@types/laptopData";

// provider component props
type FilterProviderProps = {
  children: ReactNode;
  laptopDetails: Array<LaptopProps>;
};

// props those context will return
type FilterContextProps = {
  laptopListValues: Array<LaptopProps>;
  categoryChangeEvent: (value: string) => void;
  selectedCategory: string;
};

const defaultFunction = () => null;
// default values
const DEFAULT_VALUES: FilterContextProps = {
  laptopListValues: [],
  categoryChangeEvent: defaultFunction,
  selectedCategory: "",
};

export const FilterContext = createContext<FilterContextProps>(DEFAULT_VALUES);

const FilterProvider = ({ children, laptopDetails }: FilterProviderProps) => {
  const [laptopListValues, setLaptopListValues] =
    useState<Array<LaptopProps>>(laptopDetails);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  // method to set and fetch data for based on product category
  const categoryChangeEvent = useCallback(async (value: string) => {
    setSelectedCategory(value);
    const data = await fetch("http://localhost:3000/api/category", {
      method: "POST",
      body: JSON.stringify({ category: value }),
    });
    const values = await data.json();
    setLaptopListValues(values);
  }, []);

  const values = useMemo(
    () => ({
      laptopListValues,
      categoryChangeEvent,
      selectedCategory,
    }),
    [laptopListValues, categoryChangeEvent, selectedCategory]
  );

  return (
    <FilterContext.Provider value={values}>{children}</FilterContext.Provider>
  );
};

const useFilter = (): FilterContextProps => {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw "Use context within filter provider";
  }
  return context;
};

export { FilterProvider, useFilter };
