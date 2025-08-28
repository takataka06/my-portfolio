// app/about/page.tsx
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SiRuby,
  SiRubyonrails,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { unstable_noStore as noStore } from "next/cache";
import { wait } from "@/lib/wait";
import FadeIn from "@/components/motion/FadeIn";


export const metadata = { title: "About | Kuga Takagi" };

export default async function AboutPage() {
  noStore();            // これでキャッシュを回避 = 常に動的
  await wait(1200); 
  return (
    <FadeIn delay={0.3}>
    <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(circle_at_1px_1px,theme(colors.slate.300/0.25)_1px,transparent_1px)] [background-size:20px_20px] dark:[background:radial-gradient(circle_at_1px_1px,theme(colors.slate.700/0.35)_1px,transparent_1px)]" />

      {/* Header */}
      <div className="mb-8 flex items-center gap-3">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl text-white">About me</h1>
        <Separator className="hidden flex-1 sm:block" />
        <Badge variant="secondary" className="rounded-full">Open to opportunities</Badge>
      </div>

      <Card className="p-5 mb-10 bg-gradient-to-br from-sky-400/60 via-cyan-400/40 to-indigo-400/60">
        <CardContent className="prose prose-slate max-w-none dark:prose-invert">
          <p className=" text-pretty text-base text-slate-700/90 md:text-lg dark:text-slate-300/90 leading-7 text-muted-foreground">
          東北学院大学の情報系2年<span className="font-semibold text-foreground">高木空河です</span>.
          Web開発に興味を持っており、Rails / Next.js を中心に個人開発と学習を進めています。<br/>
          将来的には、<span className="font-semibold text-foreground">フルスタックエンジニア</span>として活躍したいと考えています。
          <br/>
          趣味はバレーをしたり美味しいご飯を食べることです🍚
          </p>
          
        </CardContent>
      </Card>

      {/* Skills */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Skills</h2>
        <Link href="/works" className="text-sm underline underline-offset-4 text-white">See projects →</Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <SkillGroup title="Languages" items={LANGS} />
        <SkillGroup title="Frameworks & Libraries" items={FW} />
        <SkillGroup title="DB & Infra" items={INFRA} />
        <SkillGroup title="Tools & Others" items={TOOLS} />
      </div>
    </div>
    </FadeIn>
  );
}


function SkillGroup({ title, items }: { title: string; items: Skill[] }) {
  return (
    <Card className="p-10 bg-gradient-to-br from-sky-400/60 via-cyan-400/40 to-indigo-400/60">
      <CardHeader>
        <CardTitle className="text-base text-white">{title}</CardTitle>
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

function SkillPill({ name, Icon, color, href }: Skill) {
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

export type Skill = {
  name: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  color?: string; 
  href?: string;  
};

const LANGS: Skill[] = [
  { name: "Ruby", Icon: SiRuby, color: "#CC342D", href: "https://www.ruby-lang.org/" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E", href: "https://developer.mozilla.org/docs/Web/JavaScript" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6", href: "https://www.typescriptlang.org/" },
  { name: "python", Icon: SiPython, color: "#3776AB", href: "https://www.python.org/" },
];

const FW: Skill[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB", href: "https://react.dev/" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#000000", href: "https://nextjs.org/" },
  { name: "Ruby on Rails", Icon: SiRubyonrails, color: "#CC0000", href: "https://rubyonrails.org/" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4", href: "https://tailwindcss.com/" },
];

const INFRA: Skill[] = [
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1", href: "https://www.postgresql.org/" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED", href: "https://www.docker.com/" },
];

const TOOLS: Skill[] = [
  { name: "Git", Icon: SiGit, color: "#F05032", href: "https://git-scm.com/"},
  { name: "GitHub", Icon: SiGithub, color: "#181717", href: "https://github.com/" },
];