import Hero from '@/sections/Hero'
import Reasons from '@/sections/Reasons'
import Serve from '@/sections/Serve'
import Works from '@/sections/Works'
import Testimonials from '@/sections/Testimonials'
import Questions from '@/sections/Questions'
import Partners from '@/sections/Partners'

export const metadata = {
  title: 'Home',
  isHeaderFixed: true,
}

export default () => {
  return (
    <>
      <Hero />
      <Reasons />
      <Serve />
      <Works />
      <Testimonials />
      <Questions />
      <Partners />
    </>
  )
}
