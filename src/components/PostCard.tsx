"use client";

import { Author } from "@app/types/common.type";
import Image from "next/image";
import ProfileImage from "./ProfileImage";

type PostCardProps = {
  imageUrl: string;
  title: string;
  description?: string;
  author: Author;
  publishDate: Date;
};

const PostCard: React.FC<PostCardProps> = ({
  imageUrl,
  title,
  description,
  author,
  publishDate,
}) => {
  return (
    <div className="post-card--wrapper">
      <div className="post-card--image">
        <Image
          src={imageUrl}
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
        <ProfileImage imageUrl={imageUrl} profileName={author.name} />
      </div>
    </div>
  );
};

export default PostCard;
