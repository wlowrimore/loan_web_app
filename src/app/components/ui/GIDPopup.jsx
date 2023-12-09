import Link from "next/link"

const GIDPopup = ({ setIsOpen }) => {

  const GIDUrl = `https://www.usbirthcertificates.com/glossary/government-issued-id#:~:text=The%20only%20national%20government%2Dissued,a%20citizen's%20Social%20Security%20Number.`

  return (
    <div className='absolute mr-8 bg-neutral-800/95 text-white text-xs p-2 rounded'>
      <article>
        <p onClick={(e) => setIsOpen(false)} className='mb-2 text-emerald-50 bg-emerald-700 px-2 w-fit rounded-2xl'>close window</p>
        &quot;The only national government-issued IDs in the US are the passport book, passport card —which can be obtained voluntarily—, and social security cards —which carry a citizen&apos;s Social Security Number.&quot;
        <div className='w-full text-end mt-2'>
          <Link href={GIDUrl}
            target='_blank'
            rel='noreferrer noopener'
            className='text-indigo-200'>
            &nbsp;usbirthcertificates.com
          </Link>
        </div>
      </article>
    </div>
  )
}

export default GIDPopup