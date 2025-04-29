"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, Linkedin, Github, Award, Code, GraduationCap, Languages } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GitHubCalendar } from "@/components/github-calendar"
import { GitHubProjects } from "@/components/github-projects"
import { LanguageToggle } from "@/components/language-toggle"
import { useLanguage } from "@/contexts/language-context"

export default function Portfolio() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Language Toggle Button - Fixed at top right */}
      <div className="fixed top-6 right-6 z-10">
        <LanguageToggle />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-8">
        {/* Left Sidebar */}
        <div className="space-y-8">
          {/* Profile Header */}
          <div className="flex items-center gap-4">
            <Image
              src="/gary.png?height=100&width=100"
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-mono">{t("profile.name1")}</h1>
              <h1 className="text-2xl font-mono">{t("profile.name2")}</h1>
              <p className="text-gray-400">{t("profile.title")}</p>
            </div>
          </div>

          {/* Bio */}
          {/* <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">{t("profile.bio")}</p>
            <Button variant="outline" className="rounded-full">
              {t("profile.more")}
            </Button>
          </div> */}

          {/* Education */}
          <div className="space-y-4">
            <h2 className="text-xl font-mono flex items-center gap-2">
              <GraduationCap className="w-5 h-5" /> {t("section.education")}
            </h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">{t("education.ucsc")}</h3>
                <p className="text-gray-400 text-sm">{t("education.ucsc.details")}</p>
              </div>
              <div>
                <h3 className="font-medium">{t("education.highschool")}</h3>
                <p className="text-gray-400 text-sm">{t("education.highschool.details")}</p>
              </div>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h2 className="text-xl font-mono flex items-center gap-2">
              <Languages className="w-5 h-5" /> {t("section.languages")}
            </h2>
            <div className="space-y-2">
              <p>{t("language.mandarin")}</p>
              <p>{t("language.taiwanese")}</p>
              <p>{t("language.english")}</p>
              <p>{t("language.japanese")}</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:yanggary2388@gmail.com">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/Gary0302">
                  <Github className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/gary-yang-fu-chun-yang">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="text-gray-400 text-sm">
              <p>{t("footer.copyright")}</p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="space-y-8">
          {/* Menu Button - Only show on mobile */}
          <div className="flex justify-end lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </div>

          {/* Technical Skills Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono flex items-center gap-2">
                <Code className="w-5 h-5" /> {t("section.skills")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-900 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-3">{t("skills.programming")}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{t("skills.python")}</li>
                  <li>{t("skills.javascript")}</li>
                  <li>{t("skills.sql")}</li>
                  <li>{t("skills.mongodb")}</li>
                </ul>
              </div>
              <div className="bg-gray-900 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-3">{t("skills.certifications")}</h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li>{t("skills.comptia")}</li>
                  <li>{t("skills.apcs")}</li>
                  <li>{t("skills.ceh")}</li>
                  <li>{t("skills.tqc")}</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Competitions Section */}
          <section className="bg-blue-600 rounded-xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono flex items-center gap-2">
                <Award className="w-5 h-5" /> {t("section.competitions")}
              </h2>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">
                    {t("competition.cruzhacks.badge1")}
                  </span>
                  <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">
                    {t("competition.cruzhacks.badge2")}
                  </span>
                </div>
                <h3 className="font-medium">{t("competition.cruzhacks.title")}</h3>
                <p className="text-sm text-blue-200">{t("competition.cruzhacks.details")}</p>
                <p className="text-sm mt-2">{t("competition.cruzhacks.description")}</p>
              </div>

              <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">{t("competition.science.badge1")}</span>
                  <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">{t("competition.science.badge2")}</span>
                  <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">{t("competition.science.badge3")}</span>
                </div>
                <h3 className="font-medium">{t("competition.science.title")}</h3>
                <p className="text-sm text-blue-200">{t("competition.science.details")}</p>
                <p className="text-sm mt-2">{t("competition.science.description")}</p>
              </div>

              <div className="bg-blue-700 bg-opacity-50 p-4 rounded-lg">
                <div className="flex flex-wrap gap-2 mb-2">
                  <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">{t("competition.icdl.badge1")}</span>
                  <span className="bg-blue-500 text-xs px-2 py-1 rounded-full">{t("competition.icdl.badge2")}</span>
                </div>
                <h3 className="font-medium">{t("competition.icdl.title")}</h3>
                <p className="text-sm text-blue-200">{t("competition.icdl.details")}</p>
                <p className="text-sm mt-2">{t("competition.icdl.description")}</p>
              </div>
            </div>
          </section>

          {/* Achievements and Inventions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Achievements Section */}
            <section className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-xl font-mono mb-4">{t("section.achievements")}</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>{t("achievement.music")}</li>
                <li>{t("achievement.leadership")}</li>
                <li>{t("achievement.folk")}</li>
                <li>{t("achievement.ai")}</li>
              </ul>
            </section>

            {/* Inventions Section */}
            <section className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-xl font-mono mb-4">{t("section.inventions")}</h2>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>{t("invention.fan")}</li>
                <li>{t("invention.mop")}</li>
                <li>{t("invention.insulin")}</li>
                <li>{t("invention.wifi")}</li>
              </ul>
            </section>
          </div>

          {/* GitHub Projects */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-mono flex items-center gap-2">
                <Github className="w-5 h-5" /> {t("section.projects")}
              </h2>
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/Gary0302?tab=repositories">
                  <span className="sr-only">View all projects</span>→
                </Link>
              </Button>
            </div>
            <GitHubProjects username="Gary0302" />
          </section>

          {/* GitHub Activity */}
          <section className="bg-gray-900 rounded-xl p-6">
            <h2 className="text-xl font-mono mb-4 flex items-center gap-2">
              <Github className="w-5 h-5" /> {t("section.activity")}
            </h2>
            <GitHubCalendar username="Gary0302" />
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm" asChild >
                <Link href="https://github.com/Gary0302">{t("github.view")}</Link>
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
