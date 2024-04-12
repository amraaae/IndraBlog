"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Link from "next/link";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/register", {
        userName: name,
        email,
        password,
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="w-[30%] h-[100vh] py-24 m-auto ">
      <div className="shadow-lg p-6 rounded-lg border bg-slate-100">
        <h1 className="text-xl font-bold my-4 text-center text-black">Register</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            className="w-full p-2 border border-gray-300 rounded-md"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
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
          <button className="bg-slate-800 text-white font-bold cursor-pointer px-6 py-2 hover:bg-slate-500">
            Register
          </button>

          <div class="mt-4 text-sm text-gray-600 text-center">
            <p>
              Already have an account?{" "}
              <Link className="text-blue-500 hover:underline" href="/pages/login">
                Login
              </Link>
            </p>
          </div>

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
