import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// export default clerkMiddleware({
//   publicRoutes: ["/api/webhook", "/api/uploadthing" ]
// });

// export default clerkMiddleware({
//  publicRoutes: ["/test"] with this inclusion, user can see this route as unprotected
//                          just do app/[test]/page.tsx 
// });

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};


 