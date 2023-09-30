import Link from "next/link";
import ProfileImage from "./ProfileImage";
import { getServerSession } from "next-auth";
import { authOptions } from "@app/lib/auth";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <nav className="navbar">
      <div className="container flex_row_between">
        {session ? (
          <ProfileImage
            imageUrl="/images/profile.jpg"
            profileName={session.user.name}
          />
        ) : (
          <div></div>
        )}

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
