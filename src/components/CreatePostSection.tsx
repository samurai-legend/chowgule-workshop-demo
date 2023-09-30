"use client";
import Link from "next/link";

const CreatePostSection: React.FC = () => {
  return (
    <div
      className="w-full py-10 px-5 
  flex flex-row justify-end items-center"
    >
      <Link className="button" href="/blog/create">
        Create Post
      </Link>
    </div>
  );
};

export default CreatePostSection;
