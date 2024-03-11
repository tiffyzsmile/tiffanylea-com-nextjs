import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <section className="center">
      <h1>Page Not Found</h1>
      <Image src="/images/oops.gif" alt="Whoops" width={398} height={398} />
      <p>
        Maybe go back to the <Link href="/">home page</Link> and start over?
      </p>
    </section>
  );
};

export default NotFound;
