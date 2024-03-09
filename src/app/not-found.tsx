import Link from "next/link";

const NotFound = () => {
  return (
    <div className="center">
      <h1>Page Not Found</h1>
      <img src="/images/oops.gif" className="App-logo" alt="logo" />
      <p>
        Maybe go back to the <Link href="/">home page</Link> and start over?
      </p>
    </div>
  );
};

export default NotFound;
