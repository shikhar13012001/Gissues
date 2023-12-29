import React from 'react'
import { GithubContributions } from 'react-github-graph'

export default function GitHubGraph ({ username }) {
  return <GithubContributions username={username} />
}
