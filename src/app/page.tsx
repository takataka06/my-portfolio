import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/motion/FadeIn";

export default function Home() {
  return (
    <>
      <main className="relative min-h-dvh overflow-hidden">
        {/* Background: cool sky blue gradient + soft blobs */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-200 via-sky-300 to-cyan-300 dark:from-sky-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="pointer-events-none absolute -top-40 -left-40 -z-10 h-96 w-96 rounded-full bg-cyan-300/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-sky-400/30 blur-3xl" />


        {/* Content */}
        <section className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-20 md:py-28 lg:py-36">
        <FadeIn delay={0.1}>
        <p className="text-sm font-medium tracking-wider text-sky-700/80 dark:text-sky-300/80">
        Welcome to my portfolio!!
        </p>
        </FadeIn>


        <FadeIn delay={1.0}>
        <h1 className="text-balance bg-gradient-to-r from-sky-700 via-cyan-700 to-indigo-700 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-6xl dark:from-sky-300 dark:via-cyan-300 dark:to-indigo-300">
        Hi, I’m Kuga Takagi
        </h1>
        </FadeIn>

        <FadeIn delay={2.0}>
        <p className="max-w-2xl text-pretty text-base text-slate-700/90 md:text-lg dark:text-slate-300/90">
        Rails / Next.js を中心に学習・開発中の大学2年生。作品は
        <span className="font-semibold"> Works</span> にまとめています。
        </p>
        </FadeIn>

        
        
        <FadeIn delay={2.5} className="flex flex-wrap gap-3 pt-2">
        <Button asChild size="lg" className="text-white backdrop-blur bg-gradient-to-r from-sky-600 via-cyan-600 to-indigo-600 hover:from-sky-700 hover:via-cyan-700 hover:to-indigo-700">
        <Link href="/works">View Works</Link>
        </Button>
        <Button asChild size="lg" className="text-white backdrop-blur bg-gradient-to-r from-sky-600 via-cyan-600 to-indigo-600 hover:from-sky-700 hover:via-cyan-700 hover:to-indigo-700">
        <Link href="/about">About me</Link>
        </Button>
        </FadeIn>
        </section>
        </main>

    </>
  );
}
