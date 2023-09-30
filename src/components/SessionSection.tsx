"use client";
import { signIn, signOut } from "next-auth/react";
import Button from "./Button";

const SessionSection: React.FC = () => {
  return (
    <div
      className="w-full py-10 px-5 
        flex flex-row justify-end items-center gap-x-5"
    >
      <Button onClick={() => signIn()}>Sign In </Button>
      <Button onClick={() => signOut()}>Sign Out </Button>
    </div>
  );
};

export default SessionSection;
