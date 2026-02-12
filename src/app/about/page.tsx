import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { wait } from "@/lib/wait";
import FadeIn from "@/components/motion/FadeIn";
import { SkillGroup } from "@/components/SkillGroup";
import { LANGS, FW, INFRA, TOOLS } from "@/types/skill";
import { unstable_noStore as noStore } from "next/cache";

export const metadata = { title: "About | Kuga Takagi" };

export default async function AboutPage() {
  noStore();
  await wait(1200);
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
      {/* Header */}
      <FadeIn delay={0}>
        <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
          About
        </p>
        <h1 className="mb-12 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          About me
        </h1>
      </FadeIn>

      {/* Bio card */}
      <FadeIn delay={0.1}>
        <Card className="mb-16">
          <CardContent className="pt-6">
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              東北学院大学の情報系2年
              <span className="font-semibold text-foreground">高木空河</span>
              です。
              Web開発に興味を持っており、Rails / Next.js を中心にチーム開発、長期インターンを行っています。
              <br />
              将来的には、
              <span className="font-semibold text-foreground">
                フルスタックエンジニア
              </span>
              として活躍したいと考えています。
            </p>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Skills */}
      <FadeIn delay={0.2}>
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Skills
          </h2>
          <Link
            href="/works"
            className="text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            See projects &rarr;
          </Link>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn delay={0.25}>
          <SkillGroup title="Languages" items={LANGS} />
        </FadeIn>
        <FadeIn delay={0.3}>
          <SkillGroup title="Frameworks & Libraries" items={FW} />
        </FadeIn>
        <FadeIn delay={0.35}>
          <SkillGroup title="DB & Infra" items={INFRA} />
        </FadeIn>
        <FadeIn delay={0.4}>
          <SkillGroup title="Tools & Others" items={TOOLS} />
        </FadeIn>
      </div>
    </div>
  );
}
