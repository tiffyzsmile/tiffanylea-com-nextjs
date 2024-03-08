import { runWithAmplifyServerContext } from "./utils/amplifyServerUtils";

// The fetchAuthSession is pulled as the server version from aws-amplify/auth/server
import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // The runWithAmplifyServerContext will run the operation below
  // in an isolated matter.
  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        // The fetch will grab the session cookies
        const session = await fetchAuthSession(contextSpec, {});
        return session.tokens !== undefined;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });

  // If user is authenticated then the route request will continue on
  if (authenticated) {
    console.log("authenticated", authenticated);

    return response;
  }
  console.log("else authenticated", authenticated);

  // If user is not authenticated they are redirected to the /login page
  return NextResponse.redirect(new URL("/admin/login", request.url));
}

// This config will match all admin routes except /admin/login
export const config = {
  matcher: ["/admin", "/admin/projects", "/admin((?!/login).*)"],
};
