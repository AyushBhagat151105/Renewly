import { useSignIn, useUser } from "@clerk/clerk-react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/")({
  component: SignInPage,
});

export function SignInPage() {

  const { signIn, isLoaded } = useSignIn();
  const { isSignedIn } = useUser()
  const navigate = useNavigate();

  if (isSignedIn) {

    navigate({ to: "/dashboard" });
    return null;
  }

  const signInWith = async (strategy: "oauth_google" | "oauth_apple") => {
    if (!isLoaded) return;
    signIn.authenticateWithRedirect({
      strategy,
      redirectUrl: "/auth/callback",
      redirectUrlComplete: "/dashboard",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center from-gray-900 to-black px-4">
      <div className="max-w-md w-full bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-white space-y-6">

        <h1 className="text-3xl font-bold text-center">Welcome Back!</h1>
        <p className="text-center text-gray-300">
          Sign in to continue to Renewly
        </p>

        {/* Social Sign-In Buttons */}
        <div className="space-y-3">
          <button
            onClick={() => signInWith("oauth_google")}
            className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 transition p-3 rounded-xl font-semibold"
          >
            Continue with Google
          </button>

          <button
            onClick={() => signInWith("oauth_apple")}
            className="w-full flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-900 transition p-3 rounded-xl font-semibold"
          >
            Continue with Apple
          </button>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <span className="border-t border-gray-500 flex mr-2"></span>
          <span>or</span>
          <span className="border-t border-gray-500 flex ml-2"></span>
        </div>

        {/* Email/Password Form (optional) */}
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-gray-800 text-white placeholder-gray-400"
          />

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 transition p-3 rounded-xl font-semibold">
            Sign In
          </button>
        </div>

        <p className="text-xs text-center text-gray-400">
          By signing in, you agree to our{" "}
          <span className="underline cursor-pointer">Terms</span> &{" "}
          <span className="underline cursor-pointer">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
