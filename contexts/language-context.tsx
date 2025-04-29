"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "zh"

type Translations = {
  [key in Language]: {
    [key: string]: string
  }
}

// Define all translations here
const translations: Translations = {
  en: {
    // Profile
    "profile.name1": "Gary Yang",
    "profile.name2": "(Fu-Chun Yang)",
    "profile.title": "APPLIED MATHEMATICS & DATA SCIENCE",
    "profile.bio":
      "Applied Mathematics student with a passion for data science and cybersecurity. Experienced in mathematical modeling, programming, and creative problem-solving through various competitions and projects.",
    "profile.more": "More about Me",

    // Section titles
    "section.education": "EDUCATION",
    "section.languages": "LANGUAGES",
    "section.skills": "Technical Skills",
    "section.competitions": "Competitions",
    "section.achievements": "Achievements",
    "section.inventions": "Inventions",
    "section.projects": "Projects",
    "section.activity": "GitHub Activity",

    // Education
    "education.ucsc": "University of California, Santa Cruz",
    "education.ucsc.details": "Applied Mathematics (2024-2028 planned)",
    "education.highschool": "Affiliated Senior High School of NKNU",
    "education.highschool.details": "Kaohsiung, TW (2021-2024)",

    // Languages
    "language.mandarin": "Mandarin Chinese - Native",
    "language.taiwanese": "Taiwanese - Native",
    "language.english": "English - Advanced (IELTS 6.5)",
    "language.japanese": "Japanese - Intermediate",
    "language.korean": "Korean - Beginner",

    // Skills
    "skills.programming": "Programming",
    "skills.certifications": "Certifications",
    "skills.python": "Python (NumPy/Pandas)",
    "skills.javascript": "JavaScript/Node.js",
    "skills.sql": "SQL/NoSQL",
    "skills.mongodb": "MongoDB",
    "skills.comptia": "CompTIA Security+",
    "skills.apcs": "APCS Level IV",
    "skills.ceh": "CEH v12",
    "skills.tqc": "Python 3 Professional Designer (TQC)",

    // Competitions
    "competition.science.title": "Kaohsiung Science Fair - Mathematical Modeling",
    "competition.science.details": "2023 | Pandemic Isolation Policy Analysis",
    "competition.science.description": "Built SEIR model with Python/Numpy for 9-grid isolation policy",
    "competition.science.badge1": "City 3rd Place",
    "competition.science.badge2": "Data Analyst",
    "competition.science.badge3": "Teamwork Award",
    "competition.icdl.title": "ICDL IT Security Competition",
    "competition.icdl.details": "2022 | Computer Skills Foundation",
    "competition.icdl.description":
      "Mastered network security protocols and ranked among top 5% of 1,500+ participants",
    "competition.icdl.badge1": "National Top 5%",
    "competition.icdl.badge2": "Solo Participant",
    "competition.cruzhacks.title": "CruzHacks",
    "competition.cruzhacks.details": "2025 | UC Santa Cruz Hackathon",
    "competition.cruzhacks.description": "Developed a Python backend server using Gemini API, FastAPI, and MongoDB. Awarded Best MongoDB Use.",
    "competition.cruzhacks.badge1": "Winner",
    "competition.cruzhacks.badge2": "Best MongoDB Use",

    // Achievements
    "achievement.music": "2023 National Music Competition Choir Category - Excellence Award",
    "achievement.leadership": "2023 Rotary Youth Leadership Awards Seminar",
    "achievement.folk": "2022 National Folk Song Competition Choir Category - Excellence Award",
    "achievement.ai": "2022 FUN AI Winter Camp (NCKU, Tsing Hua University)",

    // Inventions
    "invention.fan": "USB desktop fan (4th Grade)",
    "invention.mop": "Robot mop with automatic water spray (5th-6th Grade)",
    "invention.insulin": "Insulin injection box (8th Grade)",
    "invention.wifi": "Cloud Wi-Fi sensor portable device (6th & 11th Grade)",

    // GitHub
    "github.view": "View on GitHub →",
    "github.nodata": "No public repositories found",
    "github.error": "Could not load GitHub activity",

    // Footer
    "footer.copyright": "© 2025 Gary Yang",

    // Language toggle
    "language.toggle": "繁體中文",
  },
  zh: {
    // Profile
    "profile.name1": "楊富鈞",
    "profile.name2": "Gary Yang",
    "profile.title": "應用數學與數據科學",
    "profile.bio":
      "我目前主修應用數學，熱衷於數據科學和網絡安全，通過各種競賽和項目，在數學建模、程式設計、專案澗溝以及管理和創意解決問題方面積累了豐富經驗",
    "profile.more": "了解更多",

    // Section titles
    "section.education": "教育背景",
    "section.languages": "語言能力",
    "section.skills": "程式技能",
    "section.competitions": "競賽經驗",
    "section.achievements": "成就",
    "section.inventions": "發明",
    "section.projects": "專案",
    "section.activity": "GitHub 活動",

    // Education
    "education.ucsc": "加州大學聖克魯茲分校",
    "education.ucsc.details": "應用數學 (2025-2028 預計)",
    "education.highschool": "國立高雄師範大學附屬高級中學",
    "education.highschool.details": "高雄, 台灣 (2021-2024)",

    // Languages
    "language.mandarin": "中文 - 母語",
    "language.taiwanese": "台語 - 母語",
    "language.english": "英文 - 高級 (IELTS 6.5)",
    "language.japanese": "日文 - 中級",

    // Skills
    "skills.programming": "程式設計",
    "skills.certifications": "證照",
    "skills.python": "Python (NumPy/Pandas)",
    "skills.javascript": "JavaScript/Node.js",
    "skills.sql": "SQL/NoSQL",
    "skills.mongodb": "MongoDB",
    "skills.comptia": "CompTIA Security+",
    "skills.apcs": "APCS 觀念IV級 實作IV級",
    "skills.ceh": "CEH v12",
    "skills.tqc": "Python 3 專業程式設計檢定 (TQC)",

    // Competitions
    "competition.science.title": "高雄市科學展覽會 - 數學建模",
    "competition.science.details": "2023 | 「九」是要「格」離-九宮格匡列政策下，班上未隔離人數只剩一人時所需最少確診人數情況討論",
    "competition.science.description": "使用 Python 建立模型進行九宮格隔離之特定情況分析",
    "competition.science.badge1": "市級第三名",
    "competition.science.badge2": "數據分析",
    "competition.science.badge3": "團隊合作獎",
    "competition.icdl.title": "ICDL IT 安全競賽",
    "competition.icdl.details": "2022 | 電腦技能基礎",
    "competition.icdl.description": "掌握網絡安全協議，在1,500多名參賽者中排名前5%",
    "competition.icdl.badge1": "全國前5%",
    "competition.icdl.badge2": "個人參賽",
    "competition.cruzhacks.title": "CruzHacks 黑客松",
    "competition.cruzhacks.details": "2025 | 加州大學聖克魯茲分校黑客松",
    "competition.cruzhacks.description": "設計Python後端伺服器，使用Gemini API, FastAPI, mongoDB 獲得最佳 MongoDB 應用獎",
    "competition.cruzhacks.badge1": "獲獎者",
    "competition.cruzhacks.badge2": "最佳 MongoDB 應用",

    // Achievements
    "achievement.music": "2023 全國學生音樂比賽  - 優等獎 (合唱類)",
    "achievement.leadership": "2023 扶輪青少年領袖獎研討會",
    "achievement.folk": "2022 全國學生鄉土歌謠比賽 (台語) - 優等獎 (合唱類)",
    "achievement.ai": "2022 FUN AI 冬令營 (成功大學, 清華大學, Google exploreCSR)",

    // Inventions
    "invention.fan": "USB 桌面風扇 (四年級)",
    "invention.mop": "自動噴水機器人拖把 (五至六年級)",
    "invention.insulin": "胰島素注射盒 (八年級)",
    "invention.wifi": "雲端 Wi-Fi 感測便攜裝置 (六年級及十一年級)",

    // GitHub
    "github.view": "在 GitHub 上查看 →",
    "github.nodata": "未找到公開存儲庫",
    "github.error": "無法加載 GitHub 活動",

    // Footer
    "footer.copyright": "© 2025 楊富鈞",

    // Language toggle
    "language.toggle": "English",
  },
}

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
