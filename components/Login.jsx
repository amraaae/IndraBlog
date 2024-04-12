"use client";
import { useState } from "react";
import { signIn, useSession } from "next-auth/react"; // Import useSession
import { useRouter } from "next/navigation";
import Link from "next/link";
import GoogleSignInButton from "./authButton";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { data: session } = useSession(); // Get session data
  const router = useRouter();

  // Function to handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Attempt to sign in
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("алдаа гарлаа");
        return;
      }
      // If successful, redirect to dashboard
      router.replace("/dashboard");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="w-[30%] h-[100vh] py-24 ">
      <div className="shadow-lg p-6 rounded-lg border bg-slate-100">
        <h1 className="text-xl font-bold my-4 text-center text-black">Login</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          {/* Input fields for email and password */}
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          {/* Login button */}
          <button className="bg-slate-800 text-white font-bold cursor-pointer px-6 py-2 hover:bg-slate-500">
            Login
          </button>

          {/* Display error message if there's an error */}
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          {/* Display user information if logged in */}
          {session && session.user && (
            <div className="bg-green-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              Logged in as {session.user.email}
            </div>
          )}
          <div class="mt-4 text-sm text-gray-600 text-center">
            <p>
              Don&apos;t have an account?{" "}
              <Link className="text-blue-500 hover:underline" href="/register">
                Register
              </Link>
            </p>
          </div>
        </form>
        {/* Render GoogleSignInButton component */}
        <GoogleSignInButton />
      </div>
    </div>
  );
}

export default Login;
