import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react'
import { createFileRoute, Outlet, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { isSignedIn, user } = useUser();
  const router = useRouter();

  if (!isSignedIn) {
    router.navigate({ to: "/auth" });
    return null;
  }

  if (user.publicMetadata.role !== "ADMIN") {
    router.navigate({ to: "/unauthorized" });
    return null;
  }

  router.navigate({ to: "/dashboard" });

  return (
    <>
      {/* Clerk signed-in/out wrapper if desired */}
      <SignedIn>
        <Outlet />
      </SignedIn>
      <SignedOut>
        <Outlet />
      </SignedOut>
    </>
  )
}
