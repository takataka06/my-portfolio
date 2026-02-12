import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";

export default function Home() {
  return (
    <section className="relative min-h-[calc(100dvh-4rem)] overflow-hidden">
      {/* Background dot pattern */}
      <div className="dot-pattern absolute inset-0" />

      {/* Subtle gradient accent */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-primary/5 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto flex max-w-5xl flex-col justify-center px-6 py-24 md:py-32 lg:py-40">
        <FadeIn delay={0}>
          <p className="mb-4 text-sm font-medium tracking-widest uppercase text-primary">
            Portfolio
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="text-primary">Kuga Takagi</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            東北学院大学の情報系2年生。
            <br />
            Rails / Next.js を中心に学習・開発しています。
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href="/works">
                View Works
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">About me</Link>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
