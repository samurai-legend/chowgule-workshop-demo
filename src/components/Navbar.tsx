import Image from "next/image";
import Link from "next/link";
import ProfileImage from "./ProfileImage";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container flex_row_between">
        <ProfileImage
          imageUrl="/images/profile.jpg"
          profileName="Suyog Mishal"
        />
        <ul className="flex_center_start gap-x-10">
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
