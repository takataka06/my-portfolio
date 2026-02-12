import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata = {
  title: "Kuga Takagi | Portfolio",
  description: "Rails / Next.js developer portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-[calc(100dvh-4rem)]">
            {children}
          </main>
          <footer className="border-t border-border/50 py-8 text-center text-sm text-muted-foreground">
            <div className="mx-auto max-w-5xl px-6">
              &copy; {new Date().getFullYear()} Kuga Takagi. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
