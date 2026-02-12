"use client";

import { useState } from "react";
import { Mail, Github, Send } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { SiWantedly } from "react-icons/si";
import FadeIn from "@/components/motion/FadeIn";
import { ContactLink } from "@/components/ContactLink";
import { FormField } from "@/components/FormField";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
      {/* Header */}
      <FadeIn delay={0}>
        <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
          Contact
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Get in touch
        </h1>
        <p className="mb-12 max-w-xl text-muted-foreground">
          お気軽にご連絡ください。
        </p>
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-5">
        {/* Contact links */}
        <div className="lg:col-span-2">
          <FadeIn delay={0.1}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <ContactLink
                  href="mailto:s240713058@g.tohoku-gakuin.ac.jp"
                  icon={<Mail className="h-4 w-4" />}
                >
                  s240713058@g.tohoku-gakuin.ac.jp
                </ContactLink>
                <ContactLink
                  href="https://github.com/takataka06"
                  icon={<Github className="h-4 w-4" />}
                >
                  @takataka06
                </ContactLink>
                <ContactLink
                  href="https://www.wantedly.com/id/takagi_kuga"
                  icon={<SiWantedly className="h-4 w-4" />}
                >
                  Wantedly
                </ContactLink>
              </CardContent>
            </Card>
          </FadeIn>
        </div>

        {/* Contact form */}
        <div className="lg:col-span-3">
          <FadeIn delay={0.2}>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Message</CardTitle>
                <CardDescription>
                  ※ デモフォームのため送信は行われません
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField label="お名前">
                      <Input required />
                    </FormField>
                    <FormField label="メールアドレス">
                      <Input
                        type="email"
                        inputMode="email"
                        placeholder="you@example.com"
                        required
                      />
                    </FormField>
                  </div>
                  <FormField label="件名">
                    <Input placeholder="お問い合わせの件名" required />
                  </FormField>
                  <FormField label="メッセージ">
                    <Textarea
                      rows={5}
                      placeholder="ご用件の詳細をご記入ください"
                      required
                    />
                  </FormField>

                  <div className="flex items-center gap-3 pt-2">
                    <Button type="submit" className="gap-2">
                      <Send className="h-4 w-4" />
                      Send
                    </Button>
                    {submitted && (
                      <span className="text-sm text-primary">
                        送信しました
                      </span>
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
