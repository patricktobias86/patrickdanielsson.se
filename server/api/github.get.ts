import type { H3Event } from 'h3'

// Define the shape of repository information returned from GitHub.
type Repo = {
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  topics?: string[]
  language?: string
  fork: boolean
}

export default defineEventHandler(async (event: H3Event) => {
  const { githubUsername, githubToken } = useRuntimeConfig()
  const topic = getQuery(event).topic as string | undefined

  // Prepare headers for GitHub API. The token is optional but
  // helps avoid rate limiting when provided.
  const headers: Record<string, string> = { 'Accept': 'application/vnd.github+json' }
  if (githubToken) headers.Authorization = `Bearer ${githubToken}`

  try {
    // Fetch up to 100 repositories for the configured user. Only non-fork repos
    // will be considered when building the list.
    const res = await $fetch<Repo[]>(`https://api.github.com/users/${githubUsername}/repos?per_page=100`, { headers })
    const mine = res.filter(r => !r.fork)

    // Filter by topic if provided; otherwise sort by star count.
    const filtered = topic
      ? mine.filter(r => (r.topics || []).includes(topic))
      : mine.sort((a, b) => b.stargazers_count - a.stargazers_count)

    // Build a concise array of up to six repositories, mapping only the
    // properties we need on the client.
    const top = filtered.slice(0, 9).map(r => ({
      name: r.name,
      url: r.html_url,
      desc: r.description || '',
      stars: r.stargazers_count,
      lang: r.language || ''
    }))

    // Cache the result for one hour on clients and one day on the CDN layer.
    setHeader(event, 'Cache-Control', 'public, max-age=3600, s-maxage=86400')
    return { repos: top, count: top.length, source: `github.com/${githubUsername}` }
  } catch (err) {
    // Gracefully handle network or API errors so builds do not fail.
    console.error('GitHub fetch failed', err)
    return { repos: [], count: 0, source: `github.com/${githubUsername}` }
  }
})
