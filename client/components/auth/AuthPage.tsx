"use client";

import { useState } from "react";
import AuthCard from "./AuthCard";
import LoginForm from "./Login";
import RegisterForm from "./RegisterForm";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <AuthCard
      title={isLogin ? "Login" : "Sign Up"}
      imageSrc="/assets/it/login-illustration.png"
      bottomText={
        <p>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            onClick={toggleForm}
            className="text-indigo-500 font-medium cursor-pointer"
          >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      }
    >
      {isLogin ? <LoginForm /> : <RegisterForm />}
    </AuthCard>
  );
}
