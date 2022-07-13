import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import { RoughNotation } from 'react-rough-notation'
import { useRouter } from 'next/router'
import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 3

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  const router = useRouter()

  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-12">
        <div className="flex flex-col items-center gap-x-12 xl:flex-row">
          <div className="space-y-6 text-slate-600 dark:text-slate-300">
            <div className="h-content sm:h-content-sm flex flex-col justify-around">
              <h1 className="sm:text-8.5xl tracking-tightest my-28 select-none text-center text-6xl font-extrabold leading-none sm:my-10">
                <span
                  data-content="Blog."
                  className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-1 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
                >
                  <span className="animate-gradient-foreground-1 bg-gradient-to-br from-gradient-1-start to-gradient-1-end bg-clip-text px-2 text-transparent">
                    Blog.
                  </span>
                </span>
                <span
                  data-content="Coding."
                  className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-2 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
                >
                  <span className="animate-gradient-foreground-2 bg-gradient-to-br from-gradient-2-start to-gradient-2-end bg-clip-text px-2 text-transparent">
                    Coding.
                  </span>
                </span>
                <span
                  data-content="Portfolio."
                  className="relative block before:absolute before:top-0 before:bottom-0 before:left-0 before:block before:w-full before:animate-gradient-background-3 before:px-2 before:text-center before:text-black before:content-[attr(data-content)] dark:before:text-white dark:before:content-[attr(data-content)]"
                >
                  <span className="animate-gradient-foreground-3 bg-gradient-to-br from-gradient-3-start to-gradient-3-end bg-clip-text px-2 text-transparent">
                    Portfolio.
                  </span>
                </span>
              </h1>
            </div>

            <h2 className="prose space-x-2 text-lg text-gray-800 dark:text-gray-100">
              <span>
                Welcome to {siteMetadata.description}. I am a Software Engineer passionate about
                computer science, building open source apps and automation. In my free time, I like
                developing
              </span>
              <Link
                href="/projects"
                className="special-underline text-gray-900 no-underline dark:text-teal-50"
              >
                side projects
              </Link>
              <span>and</span>
              <Link
                href="/blog"
                className="special-underline  text-gray-900  no-underline dark:text-slate-50"
              >
                blogging
              </Link>
              <span>about them.</span>
            </h2>
          </div>
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 grid-rows-2 gap-10 py-12">
              <div className="my-5 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="https://github.com/fadyio">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="feather feather-github"
                        >
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="feather feather-external-link"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span className="pr-7 text-gray-900 dark:text-gray-100">Github</span>
                      </span>
                      <span className="pl-9 text-gray-900 transition duration-200 group-hover:text-gray-900 dark:text-slate-100 dark:group-hover:text-gray-100">
                        Github&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="my-2 grid items-start gap-8">
                <div className="group relative">
                  <div className="animate-tilt absolute -inset-0.5 rounded-lg bg-gradient-to-r  from-fuchsia-600 to-emerald-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200"></div>
                  <Link href="https://fadyio.com/resume.pdf" target="_blank">
                    <span className="relative flex items-center divide-x divide-gray-600 rounded-lg bg-white px-7 py-4 leading-none dark:bg-black">
                      <span className="flex items-center space-x-5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ionicon"
                          viewBox="0 0 512 512"
                          width="24"
                          height="24"
                        >
                          <path
                            d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeWidth="32"
                          />
                          <path
                            d="M256 56v120a32 32 0 0032 32h120"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="32"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          className="feather feather-external-link"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>

                        <span className="pr-6 text-gray-900 dark:text-gray-100">Resume</span>
                      </span>
                      <span className="pl-6 text-gray-900 transition duration-200 group-hover:text-gray-900 dark:text-slate-50 dark:group-hover:text-gray-100">
                        Resume&nbsp;&rarr;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2
            className="
                  text-dark
                  mb-4
                  text-3xl
                  font-bold
                  sm:text-4xl
                  md:text-[40px]
                  "
          >
            My Recent Posts
          </h2>
          <hr className="border-gray-200 dark:border-gray-700" />
          <ul className="pt-6">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
              const { slug, date, title, summary, tags } = frontMatter
              return (
                <li
                  onClick={() => router.push(`/blog/${slug}`)}
                  key={slug}
                  className="group flex cursor-pointer bg-transparent bg-opacity-20 px-2 transition duration-100 hover:scale-105 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <article className="py-8 px-4 ">
                    <div className="space-y-2 bg-transparent bg-opacity-20 p-2 transition duration-200 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-900 dark:text-gray-100">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-1">
                          <div className="flex flex-col justify-between md:flex-row">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 transition duration-500 ease-in-out hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-500"
                            >
                              <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                {title}
                              </h2>
                            </Link>
                          </div>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                          <div className="prose max-w-none pt-5 text-gray-900 dark:text-gray-100">
                            {summary}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end pt-6 text-lg font-normal leading-6">
          <Link
            href="/blog"
            className=" special-underline text-primary-800 hover:text-gray-900 hover:no-underline dark:text-primary-500 hover:dark:text-gray-600"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-7 ">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
