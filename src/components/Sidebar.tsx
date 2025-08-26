// components/Sidebar.tsx
import Link from "next/link";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About me" },
  { href: "/skills", label: "Skills" },
  { href: "/works", label: "Works" },
  { href: "/contacts", label: "Contacts" },
];
export default function Sidebar() {
  return (
    <aside className="border-r p-6 space-y-2">
      {items.map(i => (
        <Link key={i.href} href={i.href} className="block hover:underline">
          {i.label}
        </Link>
      ))}
    </aside>
  );
}
