import type { NextApiResponse, NextApiRequest } from "next";
import executeQuery from "~/lib/db";

type Data = {
  name: string;
};

// method to get all product list
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { category } = JSON.parse(req.body);
  try {
    const result = await executeQuery({
      query: "SELECT * from laptop_details WHERE category=?",
      values: [category],
    });
    // if error exist
    if (result?.error) {
      return res.status(200).json({ name: "Please check your queries" });
    }
    return res.status(200).json(result);
  } catch (err) {
    console.error({ err });
  }
  return res.status(200).json({ name: "please check your query" });
}
