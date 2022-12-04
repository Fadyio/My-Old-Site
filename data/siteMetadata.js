const siteMetadata = {
  title: 'Fady Nagh',
  author: 'Fady Nagh',
  headerTitle: 'Fady I/O',
  description: 'My personal blog',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://fadyio.com',
  siteRepo: 'https://github.com/Fadyio',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/me.jpeg',
  socialBanner: '/static/images/twitter-card.png',
  email: 'me@fadyio.com',
  github: 'https://github.com/fadyio',
  stackoverflow: 'https://stackoverflow.com/users/14895864',
  twitter: 'https://twitter.com/fady_io',
  linkedin: 'https://www.linkedin.com/in/fadyio/',
  reddit: 'https://www.reddit.com/u/fady_io',
  website: 'https://fadyio.com',
  locale: 'en-US',
  analytics: {
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    provider: 'mailchimp',
  },
  comment: {
    provider: 'giscus',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'map',
      reactions: '1',
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'dark_dimmed',
      inputPosition: 'top',
      lang: 'en',
      darkTheme: 'dark_dimmed',
      themeURL: '',
    },
  },
  socialAccount: {
    twitter: 'fady_io',
  },
}
module.exports = siteMetadata
