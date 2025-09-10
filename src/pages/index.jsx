import Hero from '@/sections/Hero'
import Reasons from '@/sections/Reasons'

export const metadata = {
  title: 'Home',
  isHeaderFixed: true,
}

export default () => {
  return (
    <>
      <Hero />
      <Reasons />
    </>
  )
}
