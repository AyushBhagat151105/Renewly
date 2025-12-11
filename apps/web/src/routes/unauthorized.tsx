import { createFileRoute, Link } from '@tanstack/react-router'
import { ShieldAlert } from "lucide-react"

export const Route = createFileRoute('/unauthorized')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="max-w-md w-full text-center space-y-6 animate-in fade-in duration-500">

        {/* Icon */}
        <div className="flex justify-center">
          <ShieldAlert className="h-20 w-20 text-red-500 animate-pulse" />
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold">Access Denied</h1>

        {/* Subtitle */}
        <p className="text-gray-300 text-lg leading-relaxed">
          You do not have permission to view this page.
          <span className="block mt-2 font-semibold text-red-400">
            Only Admins are allowed.
          </span>
        </p>

        {/* Buttons */}
        <div className="flex flex-col gap-3 pt-2">
          <Link
            to="/"
            className="w-full rounded-xl bg-white/10 p-3 font-medium hover:bg-white/20 transition"
          >
            Go Back Home
          </Link>

          <Link
            to="/auth"
            className="w-full rounded-xl bg-red-600 p-3 font-medium hover:bg-red-700 transition"
          >
            Login as Admin
          </Link>
        </div>
      </div>
    </div>
  )
}
