type Props = {
  params: Promise<{
    brandToken: string;
  }>;
};

const Page = async ({ params }: Props) => {
  const { brandToken } = await params;
  return <div>Brand: {brandToken}</div>;
};

export default Page;
