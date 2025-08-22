import Link from "next/link";

const BRAND_TOKENS = ["apple", "samsung", "google"];

const Page = () => {
  return (
    <div className="w-[300px] flex flex-col gap-2">
      <h1 className="text-2xl font-bold">Cart</h1>
      {BRAND_TOKENS.map((brand) => (
        <Link key={brand} href={`/cart/${brand}`}>
          {brand}
        </Link>
      ))}
    </div>
  );
};

export default Page;
