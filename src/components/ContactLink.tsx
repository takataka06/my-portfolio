import Link from "next/link";

export function ContactLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 rounded-xl border border-border/70 px-3 py-2 hover:bg-accent/40 hover:bg-blue-500 "
      target={href.startsWith("http") ? "_blank" : undefined} // 外部リンクの場合は新しいタブで開く 
      rel={href.startsWith("http") ? "noreferrer" : undefined} // noreferrerはセキュリティ対策
    >
      <span className="grid size-8 place-items-center">
        {icon}
      </span>
      <span className="font-medium">{children}</span>
    </Link>
  );
}