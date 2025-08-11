import Link from "next/link";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <>
      <Link href="/home">Home</Link>
      <h1>App Router</h1>
      <Link href="/blog/blog-1">Blog 1</Link>
      <Link href="/blog/blog-2">Blog 2</Link>
      <Link href="/blog/blog-3">Blog 3</Link>
    </>
  );
}
