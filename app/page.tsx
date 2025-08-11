import Link from "next/link";

export const metadata = {
  title: "App Router",
};

export default function Page() {
  return (
    <>
      <h1>App Router</h1>
      <p>This is a test</p>
      <Link href="/home">Home</Link>
    </>
  );
}
