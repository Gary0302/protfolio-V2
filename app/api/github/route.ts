import { NextResponse } from "next/server"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const username = searchParams.get("username")

  if (!username) {
    return NextResponse.json({ error: "Username is required" }, { status: 400 })
  }

  try {
    // Fetch the HTML content of the contributions calendar
    const response = await fetch(`https://github.com/users/${username}/contributions`)

    if (!response.ok) {
      throw new Error("Failed to fetch GitHub contributions")
    }

    const html = await response.text()

    return NextResponse.json({ html })
  } catch (error) {
    console.error("Error fetching GitHub contributions:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 })
  }
}
