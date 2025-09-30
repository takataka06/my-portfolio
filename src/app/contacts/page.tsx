"use client";
import { useState } from "react";
import { Mail, Github,Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {SiWantedly} from "react-icons/si"
import FadeIn from "@/components/motion/FadeIn";
import { ContactLink } from "@/components/ContactLink";
import { FormField } from "@/components/FormField";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // APIは叩かない。見た目だけの疑似送信
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };
  return (
    <div className="relative mx-auto max-w-6xl px-6 py-12 sm:py-16 lg:py-20 text-pretty  text-slate-700/90 dark:text-slate-300/90">

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
        <FadeIn delay={0.4}>
        <Card>
          <CardHeader>
            <CardTitle className="pt-4">Contact me!!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-15">
            <ContactLink href="mailto:s240713058@g.tohoku-gakuin.ac.jp" icon={<Mail className="h-4 w-4" />}>s240713058@g.tohoku-gakuin.ac.jp</ContactLink>
            <ContactLink href="https://github.com/takataka06" icon={<Github className="h-4 w-4" />}>@takataka06</ContactLink>
            <ContactLink href="https://www.wantedly.com/id/takagi_kuga" icon={<SiWantedly className="h-4 w-4"/>}>Wantedly</ContactLink>
          </CardContent>
        </Card>
        </FadeIn>

        {/* フォーム */}
        <div className="">
          <FadeIn delay={0.5}>
          <Card>
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
                  <Button type="submit" className="bg-rose-700 text-white hover:bg-rose-900">
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

