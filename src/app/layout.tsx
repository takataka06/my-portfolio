// app/layout.tsx
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="min-h-dvh grid grid-cols-[220px_1fr]">
        <Sidebar />
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

