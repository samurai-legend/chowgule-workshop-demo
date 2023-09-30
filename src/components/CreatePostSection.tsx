"use client";
import { signIn, signOut } from "next-auth/react";
import Button from "./Button";

const CreatePostSection: React.FC = () => {
  return (
    <div
      className="w-full py-10 px-5 
  flex flex-row justify-end items-center"
    >
      <Button>Create Post</Button>
    </div>
  );
};

export default CreatePostSection;
