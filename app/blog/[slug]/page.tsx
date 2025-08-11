import Link from "next/link";

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return [{ slug: "blog-1" }, { slug: "blog-2" }, { slug: "blog-3" }];
}

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;
  return { title: `Post: ${slug}` };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  return (
    <>
      <Link href="/">App</Link>
      <h1>Slug: {slug}</h1>
      <p>VietTQ</p>
    </>
  );
}
