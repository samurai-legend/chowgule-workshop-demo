import Button from "@app/components/Button";
import CreatePostSection from "@app/components/CreatePostSection";
import PostCard from "@app/components/PostCard";
import SessionSection from "@app/components/SessionSection";
import { authOptions } from "@app/lib/auth";
import { getServerSession } from "next-auth";

export default async function RootRoute() {
  const response = await fetch("http://localhost:3000/api/post", {
    cache: "no-cache",
  });

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
              id={post.id}
              title={post.title}
              description={post.description}
              author={post.author}
              likes={post.likes}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
