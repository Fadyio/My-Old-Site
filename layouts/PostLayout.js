import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { HiOutlinePencil, HiOutlineClock, HiOutlineEye } from 'react-icons/hi'
import ViewCounter from '@/components/ViewCounter'
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton,
  RedditShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share'
import { SocialIcon } from 'react-social-icons'

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`

export default function PostSimple({ frontMatter, authorDetails, next, prev, children }) {
  const { slug, fileName, date, title, summary, readingTime } = frontMatter
    const postUrl = `${siteMetadata.siteUrl}/blog/${slug}`


  return (
    <SectionContainer>
      <BlogSEO url={`${siteMetadata.siteUrl}/snippets/${frontMatter.slug}`} {...frontMatter} />
      <ScrollTopAndComment />
      <article>
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-10 text-center dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>📅 {formatDate(date)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
              <div className="flex justify-center gap-5 py-4">
                <span className="flex items-center gap-1.5">
                  <HiOutlinePencil className="h-5 w-5" />
                  {readingTime.words} words
                </span>
                <span className="flex items-center gap-1.5">
                  <HiOutlineClock className="h-5 w-5" />
                  {readingTime.text}
                </span>
                <span className="flex items-center gap-1.5">
                  <HiOutlineEye className="h-5 w-5" />
                  <ViewCounter className="ml-0" slug={slug} blogPage />
                </span>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose max-w-none pt-10 pb-8 dark:prose-dark">{children}</div>
            </div>
               <div className="flex items-center">
                  <TwitterShareButton
                    url={postUrl}
                    title={title}
                    via={siteMetadata.socialAccount.twitter}
                    className="mr-2 flex items-center overflow-hidden rounded-full !bg-[#1da1f2] !p-1.5 hover:scale-110"
                  >
                    <SocialIcon
                      network="twitter"
                      style={{ height: 25, width: 25 }}
                      fgColor="#1da1f2"
                      bgColor="#fff"
                    />
                  </TwitterShareButton>
                  <FacebookShareButton
                    url={postUrl}
                    quote={title}
                    className="mr-2 flex items-center overflow-hidden rounded-full !bg-[#1877f2] !p-1.5 hover:scale-110"
                  >
                    <SocialIcon
                      network="facebook"
                      style={{ height: 25, width: 25 }}
                      fgColor="#1877f2"
                      bgColor="#fff"
                    />
                  </FacebookShareButton>
                  <EmailShareButton
                    body={'Check out this blog'}
                    subject={title}
                    separator=" : "
                    url={postUrl}
                    className="mr-2 flex items-center overflow-hidden rounded-full !bg-[#7f7f7f] !p-1.5 hover:scale-110"
                  >
                    <SocialIcon
                      network="email"
                      style={{ height: 25, width: 25 }}
                      fgColor="#7f7f7f"
                      bgColor="#fff"
                    />
                  </EmailShareButton>
                  <LinkedinShareButton
                    summary={'Check out this blog'}
                    title={title}
                    source={siteMetadata.siteUrl}
                    url={postUrl}
                    className="mr-2 flex items-center overflow-hidden rounded-full !bg-[#027fb1] !p-1.5 hover:scale-110"
                  >
                    <SocialIcon
                      network="linkedin"
                      style={{ height: 25, width: 25 }}
                      fgColor="#027fb1"
                      bgColor="#fff"
                    />
                  </LinkedinShareButton>
                  <RedditShareButton
                    title={title}
                    url={postUrl}
                    className="mr-2 flex items-center overflow-hidden rounded-full !bg-[#ff4500] !p-1.5 hover:scale-110"
                  >
                    <SocialIcon
                      network="reddit"
                      style={{ height: 25, width: 25 }}
                      fgColor="#ff4500"
                      bgColor="#fff"
                    />
                  </RedditShareButton>
                <TelegramShareButton
                    url={postUrl}
                    quote={title}
                    className="mr-2 flex items-center overflow-hidden rounded-full !bg-[#1877f2] !p-1.5 hover:scale-110"
                  >
                    <SocialIcon
                      network="telegram"
                      style={{ height: 25, width: 25 }}
                      fgColor="#1877f2"
                      bgColor="#fff"
                    />
                  </TelegramShareButton>
                  <WhatsappShareButton
                    title={title}
                    separator={' : '}
                    url={postUrl}
                    className="mr-2 flex items-center overflow-hidden rounded-full !bg-[#25D366] !p-1.5 hover:scale-110"
                  >
                    <SocialIcon
                      network="whatsapp"
                      style={{ height: 25, width: 25 }}
                      fgColor="#25D366"
                      bgColor="#fff"
                    />
                  </WhatsappShareButton>
                </div>
            <Comments frontMatter={frontMatter} />
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/snippets/${prev.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && (
                  <div className="pt-4 xl:pt-8">
                    <Link
                      href={`/snippets/${next.slug}`}
                      className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
