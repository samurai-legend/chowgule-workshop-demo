import { CreatePost } from "@app/components/blog/CreatePost";

export default async function RootRoute() {
  return (
    <div className="container">
      <CreatePost />
    </div>
  );
}
