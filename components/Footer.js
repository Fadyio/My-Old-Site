import { currentDayName } from '@/lib/utils/dateUtils'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          <SocialIcon kind="github" href={siteMetadata.github} size="6" />
          <SocialIcon kind="youtube" href={siteMetadata.youtube} size="6" />
          <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size="6" />
          <SocialIcon kind="twitter" href={siteMetadata.twitter} size="6" />
          <SocialIcon kind="reddit" href={siteMetadata.reddit} size="6" />
          <SocialIcon kind="telegram" href={siteMetadata.telegram} size="6" />
        </div>
        <br />
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` | `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` | `}</div>
          <div className="background-author-animate bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-sm text-transparent">
            Have a good {currentDayName()}!
          </div>
        </div>
      </div>
    </footer>
  )
}
