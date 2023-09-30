import CreatePostSection from "@app/components/CreatePostSection";
import PostCard from "@app/components/PostCard";
import { authOptions } from "@app/lib/auth";
import { getServerSession } from "next-auth";

export default async function RootRoute() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <div className="container">
        <CreatePostSection />
        <h2>Server Session</h2>
        <pre>{JSON.stringify(session)}</pre>
        {/* <div className="grid grid-cols-2 gap-10">
          <PostCard
            title="Test Post"
            description="Test Desc."
            publishDate={new Date()}
            imageUrl="/images/profile.jpg"
            author={{ name: "Suyog Mishal" }}
          />
          <PostCard
            title="Test Post"
            description="Test Desc."
            publishDate={new Date()}
            imageUrl="/images/profile.jpg"
            author={{ name: "Mahesh Sir" }}
          />
        </div> */}
      </div>
    </main>
  );
}
