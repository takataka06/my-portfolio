import Link from "next/link";
import { Card, CardContent} from "@/components/ui/card";
import { wait } from "@/lib/wait";
import FadeIn from "@/components/motion/FadeIn";
import {SkillGroup} from "@/components/SkillGroup";
import {LANGS,FW,INFRA,TOOLS} from "@/types/skill"

export const metadata = { title: "About | Kuga Takagi" };

export default async function AboutPage() {    
  await wait(1200); 
  return (
    <FadeIn delay={0.3}>
    <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20 ">
      {/* Header */}
      <div className="mb-8 ">
        <h1 className="text-3xl font-bold md:text-4xl text-white">About me</h1>
      </div>
      {/* 自己紹介 */}
      <Card className="p-5 mb-10 border-white text-white text-pretty">
        <CardContent className="prose prose-slate max-w-none dark:prose-invert">
          <p className=" text-pretty text-base text-slate-700/90 md:text-lg dark:text-slate-300/90 leading-7 text-muted-foreground">
          東北学院大学の情報系2年<span className="font-semibold ">高木空河です</span>.
          Web開発に興味を持っており、Rails / Next.js を中心に個人開発と学習を進めています。<br/>
          将来的には、<span className="font-semibold ">フルスタックエンジニア</span>として活躍したいと考えています。
          <br/>
          趣味はバレーをしたり美味しいご飯を食べることです🍚
          </p>
          
        </CardContent>
      </Card>
      {/* Skills */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-white">Skills</h2>
        <div className="text-right">
        <Link href="/works" className="text-sm underline underline-offset-4 text-white">See projects →</Link>
        </div>
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
