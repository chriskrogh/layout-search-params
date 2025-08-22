import Link from "next/link";
import Search from "./Search";

const BRAND_TOKENS = ["apple", "samsung", "google"];

type Props = {
  searchParams: Promise<{
    query: string;
  }>;
};

const Page = async ({ searchParams }: Props) => {
  const { query } = await searchParams;
  const brands = query
    ? BRAND_TOKENS.filter((brand) => brand.includes(query))
    : BRAND_TOKENS;
  return (
    <div className="w-[300px] flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Cart</h1>
      <Search />
      {brands.map((brand) => (
        <Link key={brand} href={`/cart/${brand}`}>
          {brand}
        </Link>
      ))}
    </div>
  );
};

export default Page;
