import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'
import Link from '@/components/Link'
import Experience from '@/components/Experience'
import { AiOutlineTwitter } from 'react-icons/ai'
import experienceData from '@/data/experienceData'
import { RoughNotation } from 'react-rough-notation'

export default function AuthorLayout({ children, frontMatter }) {
  const {
    name,
    avatar,
    occupation,
    company,
    email,
    twitter,
    linkedin,
    stackoverflow,
    github,
    Telegram,
    text1,
    text2,
    text3,
  } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`A little trivia me`} />
      <div className="">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5 md:pl-16">
          <h1 className="text-3xl leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
            About Me
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center space-x-2 pt-8 xl:sticky xl:top-0">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full xl:rounded-lg"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex flex-col pt-3">
              <a
                className="rounded-full border px-8 py-2 text-center text-sm font-light text-gray-900 transition-colors hover:border-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:shadow dark:text-white"
                href="https://twitter.com/messages/compose?recipient_id=1343150161195892736&text=Hey Fady!"
                data-screen-name="@fady_io"
                target="_blank"
                rel="noreferrer noopener"
              >
                <AiOutlineTwitter className="mr-2 mb-0.5 inline h-5 w-5 text-gray-900 dark:text-gray-100" />
                Say Hi!
              </a>
            </div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} size="6" />
              <SocialIcon kind="github" href={github} size="6" />
              <SocialIcon kind="linkedin" href={linkedin} size="6" />
              <SocialIcon kind="twitter" href={twitter} size="6" />
              <SocialIcon kind="stackoverflow" href={stackoverflow} size="6" />
            </div>
          </div>
          <div className="prose max-w-none pt-2 pb-4 text-center dark:prose-dark xl:col-span-2">
            <h3>{text1}</h3>
            <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
              <p>
                Welcome to My home on the internet, I have one main opinion about programming and
                computer science, which is that deeply understanding the underlying technology you
                use is essential if you want to be able to solve hard problems or forward in your
                career. Sometimes I writes blog articles. You can find them{' '}
                <Link
                  href="/blog"
                  className="special-underline  text-gray-900  no-underline dark:text-slate-50"
                >
                  Here
                </Link>
              </p>
              <p>
                It's a reflection of my career path and interests, especially on the technical side
                of things I am proficient in c, cpp, rust, python and bash. My current interests are
                in the areas of Artificial intelligence.
              </p>
              This blog is bootstrapped from the awesome Parth Desai's{' '}
              <Link
                href="https://github.com/pycoder2000/blog"
                className="special-underline  text-gray-900  no-underline dark:text-slate-50"
              >
                blog
              </Link>
              {''}. The Source code for this website is available at my{' '}
              <Link
                href="https://github.com/fadyio/my-site"
                className="special-underline  text-gray-900  no-underline dark:text-slate-50"
              >
                Github page.
              </Link>
            </div>
            <br />
          </div>
        </div>
      </div>
    </>
  )
}
