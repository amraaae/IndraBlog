"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import ThemeToggle from "./ThemeToggle";

function Nav() {
  const { data: session, status } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="hidden sm: md:flex justify-between w-[80%] mx-auto items-center py-5">
        <div className="flex flex-1 gap-2">
          <img src="/fb.svg" width={24} alt="" />
          <img src="/instagram.svg" width={24} alt="" />
          <img src="/gmail.svg" width={24} alt="" />
        </div>
        <div className="flex-1 flex text-center font-extrabold italic">myBLOG.</div>
        <div className=" flex">
          <ul className=" flex gap-5 font-semibold items-center ">
            <ThemeToggle />
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/pages/posts">Posts</Link>
            </li>
            {session ? (
              <>
                <li>
                  <button
                    id="dropdownDividerButton"
                    data-dropdown-toggle="dropdownDivider"
                    className="border border-slate-700 font-bold rounded-lg text-sm px-2 py-2 text-center inline-flex items-center"
                    type="button"
                    onClick={toggleDropdown}
                  >
                    {session.user.name}
                    <svg
                      className="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                  {dropdownOpen && (
                    <div
                      id="dropdownDivider"
                      className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDividerButton"
                      >
                        <li>
                          <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left" href="/pages/profile">Profile</Link>
                        </li>
                        <li>
                          <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left" href="/pages/dashboard">Dashboard</Link>
                        </li>
                        <li>
                          <Link className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left" href="/pages/publish">Publish</Link>
                        </li>
                        <li>
                          <button
                            onClick={handleLogout}
                            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white w-full text-left"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </>
            ) : (
              <li >
                <Link className="text-white bg-slate-800 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center" href="/pages/login">LOGIN</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
