import Link from '@/components/Link'

const Experience = ({ title, company, location, range, url, text1, text2, text3 }) => {
  return (
    <div className="my-3">
      <div className="flex flex-row text-xl">
        <span className="text-gray-900 dark:text-gray-100">{title}</span>{' '}
        <span className="text-gray-900 dark:text-gray-100">&nbsp;@&nbsp;</span>{' '}
        <span className="text-primary-color-100 dark:text-primary-color-dark-900">
          <Link href={url} className="company">
            {company}
          </Link>
        </span>
      </div>
      <div>
        <div className="p-1 font-mono text-sm text-gray-900 dark:text-gray-100">{range}</div>
        <div className="p-2">
          <div className="flex flex-row ">
            <div className="mr-2 text-lg text-primary-color-900 dark:text-primary-color-dark-100">
              {' '}
              &#8227;
            </div>
            <div className="text-gray-900 dark:text-gray-100">{text1}</div>
          </div>
          <div className="flex flex-row">
            <div className="mr-2 text-lg text-primary-color-900 dark:text-primary-color-dark-100">
              {' '}
              &#8227;
            </div>
            <div className="text-gray-900 dark:text-gray-100">{text2}</div>
          </div>
          <div className="items-top flex flex-row">
            <div className="mr-2 text-lg text-primary-color-900 dark:text-primary-color-dark-100">
              {' '}
              &#8227;
            </div>
            <div className="text-gray-900 dark:text-gray-100">{text3}</div>
          </div>
        </div>
      </div>
      <div className="justify-center text-center text-2xl font-medium text-gray-900  dark:text-gray-100">
        &#126;&#126;&#126;
      </div>
    </div>
  )
}

export default Experience
