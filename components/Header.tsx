"use client";

import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const logout = useAuthStore((state) => state.logout);
  const initLogin = useAuthStore((state) => state.initLogin);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  useEffect(() => {
    const isLoggedInState = localStorage.getItem("isLoggedIn") === "true";
    if (isLoggedInState) {
      initLogin(isLoggedInState);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-screen flex justify-between bg-slate-100 px-8 py-4">
      <nav className="flex gap-4">
        <Link href={"/"} className="hover:text-slate-500">
          Home
        </Link>
        <Link href={"/photos"} className="hover:text-slate-500">
          Photos
        </Link>
        <Link href={"/posts"} className="hover:text-slate-500">
          Posts
        </Link>
      </nav>
      <nav>
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="hover:text-slate-500 cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link href={"/login"} className="hover:text-slate-500">
            Login
          </Link>
        )}
      </nav>
    </header>
  );
}
