"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // split and filter empty values
  const pathParts = pathname.split("/").filter(Boolean);

  // build cumulative paths
  const crumbs = pathParts.map((part, idx) => {
    const href = "/" + pathParts.slice(0, idx + 1).join("/");

    // Capitalize first letter for display
    const label = decodeURIComponent(part.charAt(0).toUpperCase() + part.slice(1));

    return { href, label };
  });

  return (
    <nav className="text-sm text-gray-600 mb-4">
      <ol className="flex space-x-2">
        {crumbs.map((crumb, idx) => (
          <li key={crumb.href} className="flex items-center">
            <Link href={crumb.href} className="hover:underline text-blue-600">
              {crumb.label}
            </Link>
            {idx < crumbs.length - 1 && <span className="mx-2">{">"}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
