import Image from 'next/image'
import PageHeader from '../components/PageHeader'
import Banner from '/public/handshake.webp'

const About = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-center w-full px-4 my-6'>
        <PageHeader />
      </div>
      <Image
        src={Banner}
        alt='two people shaking hands'
        width={300}
        height={300}
        className='w-full flex justify-center opacity-70 border-b shadow-lg'
      />
      <article className='px-4 py-6 text-justify'>
        <strong>Ascension Lending Group</strong> is not your typical lender.  Our mission is to lorem ipsum our way into your wallet. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Pharetra vel turpis nunc eget. Consectetur libero id faucibus nisl tincidunt eget. Enim tortor at auctor urna nunc id cursus. Id semper risus in hendrerit gravida. Amet facilisis magna etiam tempor orci eu lobortis. Aliquet risus feugiat in ante. Maecenas accumsan lacus vel facilisis volutpat est velit. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Hendrerit gravida rutrum quisque non tellus orci ac. Id diam vel quam elementum. Quisque id diam vel quam elementum. Sed sed risus pretium quam vulputate dignissim. Dolor sit amet consectetur adipiscing. Dolor sit amet consectetur adipiscing.
        <br /><br />
        Ullamcorper a lacus vestibulum sed arcu non odio. At consectetur lorem donec massa sapien. Praesent tristique magna sit amet purus gravida quis blandit. Non pulvinar neque laoreet suspendisse interdum consectetur libero id. Integer quis auctor elit sed vulputate mi sit. Vitae semper quis lectus nulla at volutpat diam ut. Sit amet porttitor eget dolor morbi non arcu risus. Nibh mauris cursus mattis molestie a iaculis at erat. Porttitor leo a diam sollicitudin tempor id eu. Gravida dictum fusce ut placerat orci nulla. Diam phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Cursus in hac habitasse platea dictumst quisque sagittis. Non arcu risus quis varius quam. Neque vitae tempus quam pellentesque nec. Volutpat est velit egestas dui id ornare arcu odio. Velit euismod in pellentesque massa placerat duis.
      </article>
    </div>
  )
}

export default About