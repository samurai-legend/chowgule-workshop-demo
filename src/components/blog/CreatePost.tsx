"use client";
import "./blog.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const CreatePost: React.FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, description };
      const result = await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(result);

      if (result) {
        await router.push("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="blog-post-create--wrapper">
      <form onSubmit={submitData}>
        <h1>New Post</h1>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <textarea
          cols={50}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          rows={8}
          value={description}
        />
        <div className="flex flex-row gap-x-5">
          <input
            className="button"
            disabled={!description || !title}
            type="submit"
            value="Create"
          />
          <a className="button" href="#" onClick={() => router.push("/")}>
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};
