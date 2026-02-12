import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillPill } from "./SkillPill";
import type { Skill } from "@/data/skills";

export function SkillGroup({ title, items }: { title: string; items: Skill[] }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="text-sm font-medium tracking-wide uppercase text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {items.map((s) => (
            <li key={s.name}>
              <SkillPill {...s} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
