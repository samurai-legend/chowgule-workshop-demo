"use client";
import Button from "./Button";

const CreatePostSection: React.FC = () => {
  return (
    <div
      className="w-full py-10 px-5 
  flex flex-row justify-end items-center"
    >
      <Button
        onClick={() => {
          alert("test");
        }}
      >
        Create Post
      </Button>
    </div>
  );
};

export default CreatePostSection;
