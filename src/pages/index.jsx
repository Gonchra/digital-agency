import Hero from '@/sections/Hero'
import Reasons from '@/sections/Reasons'
import Serve from '@/sections/Serve'

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
    </>
  )
}
