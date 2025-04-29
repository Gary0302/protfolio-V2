"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en")
  }

  return (
    <Button onClick={toggleLanguage} variant="outline" size="sm" className="rounded-full text-sm font-medium">
      {t("language.toggle")}
    </Button>
  )
}
