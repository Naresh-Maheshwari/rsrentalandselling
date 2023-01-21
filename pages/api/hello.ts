import type { NextApiRequest, NextApiResponse } from "next";
import executeQuery from "~/lib/db";

export const getLaptopDetails = async () => {
  const list = await fetch("http://localhost:3000/api/hello");
  const values = await list.json();
  return values;
};

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const result = await executeQuery({
      query: "SELECT * from laptop_details",
      values: "",
    });
    // if error exist
    if (result?.error) {
      return res.status(200).json({ name: "Please check your queries" });
    }
    return res.status(200).json(result);
  } catch (err) {
    return res.status(200).json({ name: "Please check your queries" });
  }
}
