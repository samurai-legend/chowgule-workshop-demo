"use client";

import { Author } from "@app/types/common.type";
import Image from "next/image";
import ProfileImage from "./ProfileImage";
import Button from "./Button";
import { useRouter } from "next/navigation";

type PostCardProps = {
  id: number;
  title: string;
  description?: string;
  author: Author;
  likes: any;
};

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  description,
  author,
  likes,
}) => {
  const router = useRouter();
  const onLike = async () => {
    try {
      const result = await fetch(`/api/post/${id}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (result) {
        router.refresh();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="post-card--wrapper">
      <div className="post-card--image">
        <Image
          src={"/images/profile.jpg"}
          alt="post-card-image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="post-card--content">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <div className="post-card--author">
        <ProfileImage
          imageUrl={"/images/profile.jpg"}
          profileName={author.name}
        />
      </div>
      <Button onClick={onLike}>LIKE ME</Button>
      <p className="text-center">{likes.length}</p>
    </div>
  );
};

export default PostCard;
