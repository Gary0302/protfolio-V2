"use client"

import { useState, useEffect } from "react"
import { Skeleton } from "@/components/ui/skeleton"

interface ContributionDay {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

interface GitHubCalendarProps {
  username: string
  year?: string
  theme?: {
    background?: string
    text?: string
    grade4?: string
    grade3?: string
    grade2?: string
    grade1?: string
    grade0?: string
  }
}

export function GitHubCalendar({
  username,
  year = new Date().getFullYear().toString(),
  theme = {
    background: "transparent",
    text: "#ffffff",
    grade4: "#39d353",
    grade3: "#26a641",
    grade2: "#006d32",
    grade1: "#0e4429",
    grade0: "#2d333b",
  },
}: GitHubCalendarProps) {
  const [contributions, setContributions] = useState<ContributionDay[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchContributions() {
      try {
        setLoading(true)
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`)

        if (!response.ok) {
          throw new Error("Failed to fetch GitHub contributions")
        }

        const data = await response.json()
        setContributions(data.contributions)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching GitHub contributions:", err)
        setError("Could not load GitHub activity")
        setLoading(false)
      }
    }

    fetchContributions()
  }, [username, year])

  if (loading) {
    return <Skeleton className="w-full h-32 bg-gray-800" />
  }

  if (error) {
    return (
      <div className="h-32 bg-gray-800 rounded-lg flex items-center justify-center">
        <p className="text-gray-400">{error}</p>
      </div>
    )
  }

  // Group contributions by week
  const weeks: ContributionDay[][] = []
  let currentWeek: ContributionDay[] = []

  contributions.forEach((day, index) => {
    currentWeek.push(day)

    // Start a new week every 7 days
    if (currentWeek.length === 7) {
      weeks.push(currentWeek)
      currentWeek = []
    }

    // Handle the last week if it's not complete
    if (index === contributions.length - 1 && currentWeek.length > 0) {
      weeks.push(currentWeek)
    }
  })

  // Get level color
  const getLevelColor = (level: number) => {
    switch (level) {
      case 4:
        return theme.grade4
      case 3:
        return theme.grade3
      case 2:
        return theme.grade2
      case 1:
        return theme.grade1
      default:
        return theme.grade0
    }
  }

  // Format date for tooltip
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="w-full overflow-x-auto">
      <div className="min-w-[750px]">
        <div className="flex justify-between mb-1 text-xs text-gray-400">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
        <div className="flex gap-1">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.map((day, dayIndex) => (
                <div
                  key={`${weekIndex}-${dayIndex}`}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: getLevelColor(day.level) }}
                  title={`${formatDate(day.date)}: ${day.count} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end mt-2 text-xs text-gray-400">
          <span className="mr-1">Less</span>
          {[0, 1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className="w-3 h-3 rounded-sm mx-[2px]"
              style={{ backgroundColor: getLevelColor(level) }}
            />
          ))}
          <span className="ml-1">More</span>
        </div>
      </div>
    </div>
  )
}
