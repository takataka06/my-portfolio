"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";



export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // APIは叩かない。見た目だけの疑似送信
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20 ">
      {/* 背景の軽い装飾（ドットグリッド） */}
      <div className="pointer-events-none absolute inset-0 -z-10 [background:radial-gradient(circle_at_1px_1px,theme(colors.slate.300/0.25)_1px,transparent_1px)] [background-size:20px_20px] dark:[background:radial-gradient(circle_at_1px_1px,theme(colors.slate.700/0.35)_1px,transparent_1px)]" />

      <div className="mb-8 flex items-center gap-3">
        <Badge variant="secondary" className="rounded-full text-white">Thank you for interesting in my portfolio!</Badge>
        <Separator className="hidden flex-1 sm:block" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* 左：連絡先カード */}
        <Card className="backdrop-blur supports-[backdrop-filter]:bg-gradient-to-br from-sky-400/60 via-cyan-400/40 to-indigo-400/60 p-[1px]">
          <CardHeader>
            <CardTitle className="pt-4">Contact me!!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-15">
            <ContactLink href="mailto:s240713058@g.tohoku-gakuin.ac.jp" icon={<Mail className="h-4 w-4" />}>you@example.com</ContactLink>
            <ContactLink href="https://github.com/takataka06" icon={<Github className="h-4 w-4" />}>@yourname</ContactLink>
            <ContactLink href="https://www.linkedin.com/in/yourname" icon={<Linkedin className="h-4 w-4" />}>LinkedIn</ContactLink>
          </CardContent>
        </Card>

        {/* 右フォーム */}
        <div className="rounded-2xl bg-gradient-to-br from-sky-400/60 via-cyan-400/40 to-indigo-400/60 p-[1px]">
          <Card className="rounded-[calc(theme(borderRadius.2xl)-1px)]">
            <CardHeader>
              <CardTitle>Contact</CardTitle>
              <CardDescription>※送信は行いません</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField label="お名前">
                    <Input required />
                  </FormField>
                  <FormField label="メールアドレス">
                    <Input type="email" inputMode="email" placeholder="you@example.com" required />
                  </FormField>
                </div>
                <FormField label="件名">
                  <Input placeholder="お問い合わせの件名" required />
                </FormField>
                <FormField label="メッセージ">
                  <Textarea rows={6} placeholder="ご用件の詳細をご記入ください" required />
                </FormField>

                <div className="flex items-center gap-3 pt-2">
                  <Button type="submit" className="gap-2 bg-rose-1000 text-white hover:bg-rose-900 hover:text-white">
                    <Send className="h-4 w-4" /> Send
                  </Button>
                  {submitted && (
                    <span className="text-sm text-green-600 dark:text-green-400">（デモ）送信しました</span>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* 補助：他ページ誘導 */}
      <div className="mt-8 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <span>まずは</span>
        <Link href="/works" className="underline underline-offset-4">Works</Link>
        <span>や</span>
        <Link href="/about" className="underline underline-offset-4">About</Link>
        <span>もご覧ください。</span>
      </div>
    </div>
  );
}

function ContactLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2 transition-colors hover:border-border hover:bg-accent/40 hover:text-accent-foreground"
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <span className="grid size-8 place-items-center rounded-lg bg-muted text-muted-foreground transition-colors group-hover:bg-background group-hover:text-foreground">
        {icon}
      </span>
      <span className="font-medium">{children}</span>
    </Link>
  );
}

function FormField({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="text-foreground/80">{label}</span>
      {children}
    </label>
  );
}
