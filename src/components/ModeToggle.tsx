"use client"

import * as React from "react"
import { Moon, Sun, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"

export function ModeToggle() {
  const [showModal, setShowModal] = React.useState(false)

  const handleThemeChange = () => {
    setShowModal(true)
    // モーダルを2秒後に自動で閉じる
    setTimeout(() => {
      setShowModal(false)
    }, 2000)
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={handleThemeChange}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleThemeChange}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleThemeChange}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {/* モーダル */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <Card className="relative mx-4 w-full max-w-md border-2 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="mb-4 text-4xl">🚧</div>
              <h2 className="mb-2 text-2xl font-bold">準備中です</h2>
              <p className="text-muted-foreground">
                ダークモード機能は現在準備中です。
                <br />
                もうしばらくお待ちください。
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => setShowModal(false)}
              >
                <X className="mr-2 h-4 w-4" />
                閉じる
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
