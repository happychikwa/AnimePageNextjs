import React from 'react'

export default async function getTrendingAnime() {
  const res = await fetch('https://kitsu.io/api/edge/trending/anime');
  if(!res.ok) throw new Error('Failed to retrieve')
  return res.json()
}
