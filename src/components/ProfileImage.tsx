import Image from "next/image";

const ProfileImage: 
React.FC<{ imageUrl: string; profileName: string }> = ({
  imageUrl,
  profileName,
}) => {
  return (
    <div className="flex_center_start gap-x-10">
      <div className="circle_image--wrapper">
        <Image
          src={imageUrl}
          alt="profile image"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <span className="text-secondary text-lg font-semibold">
        {profileName}
      </span>
    </div>
  );
};

export default ProfileImage;
