// 一つ一つのスキルを表示するコンポーネント
import Link from "next/link";
import type { Skill } from "@/data/skills";

export function SkillPill({ name, Icon, href,color }: Skill) {
  const content = (
    <div className="group flex items-center gap-2 rounded-xl border border-border/60 bg-background/60 px-3 py-2 backdrop-blur transition-colors hover:bg-accent hover:text-accent-foreground">
      <span className="grid size-8 place-items-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-background group-hover:text-foreground" style={{color: color}}>
        <Icon className="h-4 w-4" />
      </span>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
  return href ? (
    <Link href={href} target="_blank" rel="noreferrer"> {/* 外部リンクの場合は新しいタブで開く*/}
      {content}
    </Link>
  ) : (
    content
  );
}