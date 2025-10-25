"use client";

import Illustration from "@/components/auth/Illustration";
import LoginForm from "@/components/auth/Login";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen bg-gray-100 overflow-hidden">
      {/* Illustration Section */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-500 to-indigo-700 relative items-center justify-center">
        <Illustration />
      </div>

      {/* Login Form Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-6 relative bg-white lg:bg-gray-100 shadow-lg lg:shadow-none rounded-lg lg:rounded-none">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Welcome Back!
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Log in to access your academic study resources
        </p>
        <LoginForm />
      </div>
    </div>
  );
}
