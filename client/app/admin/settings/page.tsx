"use client";

import { useEffect, useState } from "react";
import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Navbar";

type ProfileForm = {
  name: string;
  email: string;
  currentPassword?: string;
  newPassword?: string;
};

type SiteConfig = {
  siteName: string;
  theme: string;
};

export default function SettingsPage() {
  const [profile, setProfile] = useState<ProfileForm>({
    name: "",
    email: "",
    currentPassword: "",
    newPassword: "",
  });
  const [site, setSite] = useState<SiteConfig>({ siteName: "", theme: "light" });

  const [loadingProfile, setLoadingProfile] = useState(true);
  const [loadingSite, setLoadingSite] = useState(true);

  // BASE API
  const BASE = "https://eduverse-project.onrender.com/api";

  // fetch profile
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BASE}/user/me`, { credentials: "include" });
        if (res.ok) {
          const json = await res.json();
          if (json.user) {
            setProfile((p) => ({ ...p, name: json.user.name, email: json.user.email }));
          }
        } else {
          console.error("fetch profile failed", await res.text());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingProfile(false);
      }
    })();
  }, []);

  // fetch site config (admin)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BASE}/admin/settings`, { credentials: "include" });
        if (res.ok) {
          const json = await res.json();
          if (json.settings) setSite({ siteName: json.settings.siteName, theme: json.settings.theme });
        } else {
          console.error("fetch settings failed", await res.text());
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoadingSite(false);
      }
    })();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name === "siteName" || name === "theme") setSite({ ...site, [name]: value });
    else setProfile({ ...profile, [name]: value });
  };

  // update profile
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE}/user/update`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name: profile.name, email: profile.email }),
      });
      const json = await res.json();
      if (res.ok) alert("Profile updated");
      else alert(json.message || "Error updating profile");
    } catch (err) {
      console.error(err);
      alert("Network error");
    }
  };

  // change password
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE}/user/change-password`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ currentPassword: profile.currentPassword, newPassword: profile.newPassword }),
      });
      const json = await res.json();
      if (res.ok) {
        alert(json.message || "Password changed");
        setProfile({ ...profile, currentPassword: "", newPassword: "" });
      } else {
        alert(json.message || "Error changing password");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // update site config (admin)
  const handleSiteConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE}/admin/settings`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(site),
      });
      const json = await res.json();
      if (res.ok) alert(json.message || "Settings saved");
      else alert(json.message || "Error saving settings");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <main className="flex-1 ml-0 md:ml-64">
        <Topbar />
        <section className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-gray-800">Settings Panel</h1>

          {/* Profile Settings */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>

            {loadingProfile ? (
              <p>Loading profile...</p>
            ) : (
              <form onSubmit={handleProfileUpdate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Full Name</label>
                  <input name="name" value={profile.name} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                  <input name="email" value={profile.email} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                </div>

                <button className="bg-indigo-600 text-white px-4 py-2 rounded">Update Profile</button>
              </form>
            )}
          </div>

          {/* Change Password */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Change Password</h2>
            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Current Password</label>
                <input name="currentPassword" type="password" value={profile.currentPassword} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">New Password</label>
                <input name="newPassword" type="password" value={profile.newPassword} onChange={handleChange} className="w-full border rounded px-3 py-2" />
              </div>

              <button className="bg-green-600 text-white px-4 py-2 rounded">Change Password</button>
            </form>
          </div>

          {/* Site Configuration */}
          <div className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-lg font-semibold mb-4">Site Configuration</h2>

            {loadingSite ? (
              <p>Loading site settings...</p>
            ) : (
              <form onSubmit={handleSiteConfig} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Site Name</label>
                  <input name="siteName" value={site.siteName} onChange={handleChange} className="w-full border rounded px-3 py-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Theme</label>
                  <select name="theme" value={site.theme} onChange={handleChange} className="w-full border rounded px-3 py-2">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>

                <button className="bg-blue-600 text-white px-4 py-2 rounded">Save Settings</button>
              </form>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
