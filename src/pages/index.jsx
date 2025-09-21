import Hero from '@/sections/Hero'
import Reasons from '@/sections/Reasons'
import Serve from '@/sections/Serve'
import Works from '@/sections/Works'
import Testimonials from '@/sections/Testimonials'

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
    </>
  )
}
