import FadeIn from "@/components/motion/FadeIn";
import { unstable_noStore as noStore } from "next/cache";
import { wait } from "@/lib/wait";


export default async function WorkPage() {
  noStore();            // これでキャッシュを回避 = 常に動的
  await wait(1200);
  return (
    <>
      <section id="works" className="py-24 bg-gradient-to-br from-sky-200 via-sky-300 to-cyan-300 dark:from-sky-950 dark:via-slate-900 dark:to-slate-950">
        <div className="container mx-auto px-6">
          <FadeIn delay={0.5}>
          <h2 className="text-4xl font-extrabold mb-12 text-center text-gray-800 dark:text-gray-100">
            My Works
          </h2>
          </FadeIn>
          {/* Works grid */}
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Work item */}
            <FadeIn delay={1.0}>
            <li className="group bg-gradient-to-br from-sky-400/60 via-cyan-400/40 to-indigo-400/60 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow transform hover:-translate-y-2">
              <a href="https://tgu-site.onrender.com" target="_blank" rel="noopener noreferrer">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src="/tgu.png"
                    alt="TGU掲示板"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
              </a>
              <h3 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100 group-hover:text-sky-600">
                TGU掲示板
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                自分の大学に向けて作った掲示板サイトです。<br />
                現在ユーザー数は80人程です。詳しくは
                <a href="https://github.com/takataka06/TGU-" className="text-sky-600 hover:underline">
                  GitHub
                </a>
                のReadmeをご覧ください。
              </p>
            </li>
            </FadeIn>
          </ul>
        </div>
      </section>
    </>
  );
}
