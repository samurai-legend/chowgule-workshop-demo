import CreatePostSection from "@app/components/CreatePostSection";
import PostCard from "@app/components/PostCard";

export default function RootRoute() {
  return (
    <main>
      <div className="container">
        <CreatePostSection />
        <div className="grid grid-cols-2 gap-10">
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
        </div>
      </div>
    </main>
  );
}
