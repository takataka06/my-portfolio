import Link from "next/link";
import type { Skill } from "@/data/skills";

export function SkillPill({ name, Icon, color, href }: Skill) {
  const style = color ? ({ color } as React.CSSProperties) : undefined;
  const content = (
    <div className="group flex items-center gap-2 rounded-xl border border-border/60 bg-background/60 px-3 py-2 backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground">
      <span className="grid size-8 place-items-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-background group-hover:text-foreground" style={style}>
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
  return href ? (
    <Link href={href} target="_blank" rel="noreferrer">
      {content}
    </Link>
  ) : (
    content
  );
}