import { useState, useEffect } from 'react'

export default function ViewCounter({ slug, className, blogPage = false }) {
  const [views, setViews] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/views/${slug}`)
        const json = await response.json()
        setViews(Number(json?.total))
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [slug])

  useEffect(() => {
    const registerView = () =>
      fetch(`/api/views/${slug}`, {
        method: 'POST',
      })

    if (blogPage) {
      registerView()
    }
  }, [blogPage, slug])

  return <span className={className}>{`${views > 0 ? views.toLocaleString() : '–––'} Views`}</span>
}
