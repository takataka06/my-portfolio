// app/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "../components/app-sidebar"; // ←修正されたインポートパス
import "./globals.css";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen ">
        <SidebarProvider defaultOpen>
          <AppSidebar />
          <main className="flex-1 bg-gradient-to-br from-sky-200 via-sky-300 to-cyan-300 dark:from-sky-950 dark:via-slate-900 dark:to-slate-950">
            {/* サイドバーの開閉ボタン（任意） */}
            <SidebarTrigger className="m-4 p-2 rounded-md bg-gray-800 text-white hover:bg-gray-700 focus:ring-2 focus:ring-sky-500" />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
