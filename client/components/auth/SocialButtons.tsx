"use client";

import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";

export default function SocialButtons() {
  const providers = [
    { name: "Google", icon: <FcGoogle /> },
    { name: "Facebook", icon: <FaFacebookF className="text-blue-600" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-800" /> },
  ];

  return (
    <div className="flex justify-center gap-4">
      {providers.map((p) => (
        <button
          key={p.name}
          onClick={() => alert(`Login with ${p.name}`)}
          className="w-10 h-10 flex items-center justify-center border rounded-full hover:shadow-md transition"
        >
          {p.icon}
        </button>
      ))}
    </div>
  );
}
