import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/motion/FadeIn";
import { wait } from "@/lib/wait";
import { unstable_noStore as noStore } from "next/cache";

export const metadata = { title: "Works | Kuga Takagi" };

const projects = [
  {
    title: "TGU掲示板",
    description:
      "東北学院大学の学生向け掲示板サイト。授業情報やイベント情報を共有できるプラットフォームです。⚠︎サーバー代ケチった為、現在サービス停止中。",
    image: "/tgu.png",
    tags: ["Ruby on Rails", "PostgreSQL", "Docker"],
    liveUrl: "https://tgu-site.onrender.com",
    githubUrl: "https://github.com/takataka06/TGU-",
  },
];

export default async function WorksPage() {
  noStore();
  await wait(1200);
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20 lg:py-24">
      {/* Header */}
      <FadeIn delay={0}>
        <p className="mb-2 text-sm font-medium tracking-widest uppercase text-primary">
          Projects
        </p>
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Works
        </h1>
        <p className="mb-12 max-w-xl text-muted-foreground">
          これまでに制作したプロジェクトの一覧です。
        </p>
      </FadeIn>

      {/* Project grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.title} delay={0.1 + i * 0.1}>
            <Card className="group overflow-hidden transition-shadow hover:shadow-lg">
              {/* Image */}
              <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <CardContent className="pt-5">
                {/* Tags */}
                <div className="mb-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Title & description */}
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <Button asChild size="sm" className="gap-1.5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm" className="gap-1.5">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
