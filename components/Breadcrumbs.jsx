"use client";

import ToTitleCase from "@/utils/ToTitleCase";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdOutlineNavigateNext } from "react-icons/md";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  return (
    <nav className="bg-third px-4 py-1 text-sm text-black">
      <ol className="flex space-x-2 items-center">
        <li>
          <Link href="/" className="hover:text-secondary">
            Home
          </Link>
        </li>
        {segments.map((seg, idx) => {
          const fullPath = "/" + segments.slice(0, idx + 1).join("/");
          const isLast = idx === segments.length - 1;
          return (
            <li key={fullPath} className="flex items-center space-x-2">
              <span>
                <MdOutlineNavigateNext />
              </span>
              <Link
                href={fullPath}
                className={isLast ? "font-bold" : "hover:text-secondary"}
              >
                {ToTitleCase(decodeURIComponent(seg))}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
