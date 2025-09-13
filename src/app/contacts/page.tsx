"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Github,Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {SiWantedly} from "react-icons/si"
import FadeIn from "@/components/motion/FadeIn";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // APIは叩かない。見た目だけの疑似送信
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };
  return (
    <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20 text-pretty  text-slate-700/90 md:text-lg dark:text-slate-300/90">
      <div className="pointer-events-none absolute " />

      <div className="mb-8 flex items-center gap-3">
          <FadeIn delay={0.1}>
          <Badge
            variant="secondary"
            className="rounded-full text-white text-lg md:text-xl lg:text-2xl px-5 py-2"
          >
            Thank you for your interest in my portfolio!!
          </Badge>
          </FadeIn>
          <Separator className="hidden flex-1 sm:block" />
        </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* 連絡先カード */}
        <Card className="">
        <FadeIn delay={0.4}>
          <CardHeader>
            <CardTitle className="pt-4">Contact me!!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-15">
            <ContactLink href="mailto:s240713058@g.tohoku-gakuin.ac.jp" icon={<Mail className="h-4 w-4" />}>s240713058@g.tohoku-gakuin.ac.jp</ContactLink>
            <ContactLink href="https://github.com/takataka06" icon={<Github className="h-4 w-4" />}>@takataka06</ContactLink>
            <ContactLink href="https://www.wantedly.com/id/takagi_kuga" icon={<SiWantedly className="h-4 w-4"/>}>Wantedly</ContactLink>
          </CardContent>
          </FadeIn>
        </Card>

        {/* フォーム */}
        <div className="">
          <FadeIn delay={0.5}>
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
                  <Button type="submit" className="gap-2 bg-rose-700 text-white hover:bg-rose-900 hover:text-white">
                    <Send className="h-4 w-4" /> Send
                  </Button>
                  {submitted && (
                    <span className="text-sm text-white">送信しました</span>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}

function ContactLink({ href, icon, children }: { href: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-3 rounded-xl border border-border/70 px-3 py-2 transition-colors hover:border-border hover:bg-accent/40 hover:text-accent-foreground"
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
