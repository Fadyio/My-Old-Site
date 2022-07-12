import { currentDayName } from '@/lib/utils/dateUtils'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import Link from './Link'

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
         <div className="mb-2 hidden text-sm text-gray-900 dark:text-gray-100 md:flex">
          <div className="mx-1">
            <Link href="https://fadyio.com/about" className="link-underline">
              Fady Nagh{` © ${new Date().getFullYear()}`}
            </Link>
          </div>
          {`•`}
          <div className="mx-1">
            <Link href="https://qod.shakiltech.com/" className="link-underline">
              Have a good {currentDayName()}!
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
