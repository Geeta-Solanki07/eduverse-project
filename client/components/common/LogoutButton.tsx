"use client";

export default function LogoutButton() {
  const logout = () => {
    localStorage.clear();
    window.location.href = "/auth/login";
  };

  return (
    <button 
      onClick={logout}
      className="px-4 py-2 bg-red-500 text-white rounded-lg"
    >
      Logout
    </button>
  );
}
