import Link from "next/link";
import { Card, CardContent} from "@/components/ui/card";
import { wait } from "@/lib/wait";
import FadeIn from "@/components/motion/FadeIn";
import {SkillGroup} from "@/components/SkillGroup";
import {LANGS,FW,INFRA,TOOLS} from "@/types/skill"
import { unstable_noStore as noStore } from "next/cache";

export const metadata = { title: "About | Kuga Takagi" };

export default async function AboutPage() {  
  noStore(); //　キャッシュを回避し常にlodingを表示させる
  await wait(1200); 
  return (
    <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <FadeIn delay={0.2}>
        <div className="mb-10">
          <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl text-white">About me</h1>
        </div>
      </FadeIn>

      {/* 自己紹介 */}
      <FadeIn delay={0.3}>
        <Card className="mb-12 border-white/20 bg-white/5 backdrop-blur-sm text-white">
          <CardContent className="pt-6">
            <p className="text-base text-slate-200 md:text-lg dark:text-slate-100 leading-8">
              東北学院大学の情報系2年<span className="font-semibold text-white">高木空河です</span>.
              Web開発に興味を持っており、Rails / Next.js を中心に個人開発と学習を進めています。
              <br />
              将来的には、<span className="font-semibold text-white">フルスタックエンジニア</span>として活躍したいと考えています。
              <br />
              趣味はバレーをしたり美味しいご飯を食べることです🍚
            </p>
          </CardContent>
        </Card>
      </FadeIn>

      {/* Skills */}
      <FadeIn delay={0.4}>
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Skills</h2>
          <Link 
            href="/works" 
            className="text-sm font-medium text-white/80 underline underline-offset-4 transition-colors hover:text-white"
          >
            See projects →
          </Link>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        <FadeIn delay={0.5}>
          <SkillGroup title="Languages" items={LANGS} />
        </FadeIn>
        <FadeIn delay={0.6}>
          <SkillGroup title="Frameworks & Libraries" items={FW} />
        </FadeIn>
        <FadeIn delay={0.7}>
          <SkillGroup title="DB & Infra" items={INFRA} />
        </FadeIn>
        <FadeIn delay={0.8}>
          <SkillGroup title="Tools & Others" items={TOOLS} />
        </FadeIn>
      </div>
    </div>
  );
}
