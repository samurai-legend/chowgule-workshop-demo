import Button from "@app/components/Button";
import CreatePostSection from "@app/components/CreatePostSection";
import PostCard from "@app/components/PostCard";
import SessionSection from "@app/components/SessionSection";
import { authOptions } from "@app/lib/auth";
import { getServerSession } from "next-auth";
import { signIn, signOut } from "next-auth/react";

export default async function RootRoute() {
  const response = await fetch("http://localhost:3000/api/post");

  const data = await response.json();

  const session = await getServerSession(authOptions);

  return (
    <main>
      <div className="container">
        <SessionSection />
        {JSON.stringify(session)}
        <CreatePostSection />
        <div className="grid grid-cols-2 gap-10">
          {data?.map((post: any, index: number) => (
            <PostCard
              key={index}
              title={post.title}
              description={post.description}
              publishDate={post.publishDate}
              imageUrl={post.imageUrl}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
