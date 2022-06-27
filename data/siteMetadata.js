const siteMetadata = {
  title: 'Blog | Fady I/O',
  author: 'Fady I/O',
  headerTitle: 'Fady I/O',
  description: 'my personal blog where I share my thought',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://fadyio.com',
  siteRepo: 'https://github.com/Fadyio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/me.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'me@fadyio.com',
  github: 'https://github.com/fadyio',
  twitter: 'https://twitter.com/fady_io',
  linkedin: 'https://www.linkedin.com/in/fadyio/',
  reddit: 'https://www.reddit.com/u/fady_io',
  telegram: 'https://t.me/fady_io',
  youtube: 'https://bit.ly/3OuechY',
  website: 'https://fadyio.com',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'emailOctopus',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'dark_dimmed',
      inputPosition: 'bottom',
      lang: 'en',
      darkTheme: 'dark_dimmed',
      themeURL: '',
    },
  },
}

module.exports = siteMetadata
