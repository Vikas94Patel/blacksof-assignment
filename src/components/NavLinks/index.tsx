"use client";
import { NavLinksItems } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  return NavLinksItems.map((item) => (
    <Link
      key={item.id}
      href={item.url}
      className={`text-white mx-4 hover:underline ${
        pathname === item.url ? "underline" : ""
      }`}
    >
      {item.name}
    </Link>
  ));
};

export default NavLinks;
