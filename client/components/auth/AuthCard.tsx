"use client";

import { ReactNode } from "react";
import Image from "next/image";

interface AuthCardProps {
  title: string;
  children: ReactNode;
  imageSrc?: string;
  bottomText?: ReactNode;
}

export default function AuthCard({
  title,
  children,
  imageSrc = "/assets/it/login-illustration.png",
  bottomText,
}: AuthCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-[80vh] gap-10 p-6">
      {/* Left Illustration */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src={imageSrc}
          alt={title + " Illustration"}
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Form Card */}
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">{title}</h1>
        {children}
        {bottomText && (
          <div className="mt-4 text-center text-gray-500">{bottomText}</div>
        )}
      </div>
    </div>
  );
}
