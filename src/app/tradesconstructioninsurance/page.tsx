import type { Metadata } from "next";
import { getCategory } from "@/content/site";
import { CategoryPage } from "@/components/sections/category-page";

const category = getCategory("tradesconstructioninsurance");

export const metadata: Metadata = {
  title: category.title,
  description: category.intro,
};

export default function Page() {
  return <CategoryPage category={category} />;
}
