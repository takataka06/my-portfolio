import Link from "next/link";

export function ContactLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-accent"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <span className="grid size-8 place-items-center rounded-md bg-muted text-muted-foreground">
        {icon}
      </span>
      <span className="font-medium text-foreground">{children}</span>
    </Link>
  );
}
