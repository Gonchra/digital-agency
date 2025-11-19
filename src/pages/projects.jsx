import HeroAlt from '@/sections/HeroAlt'
import Features from '@/sections/Features'
import Showcase from '@/sections/Showcase'

export const metadata = {
  title: 'Projects',
}

export default () => {
  const title = (
    <>
      <span>Our Comprehensive</span> Digital Solutions
    </>
  )

  const description =
    'At DigitX, we offer a comprehensive suite of digital solutions designed to propel your business to new heights in the digital realm. With a team of skilled professionals, cutting-edge technologies, and a passion for innovation, we are committed to delivering exceptional results for every project we undertake. From captivating web design that leaves a lasting impression to seamless web development that ensures optimal functionality, we cover every aspect of your online presence.'

  return (
    <>
      <HeroAlt title={title} description={description} />
      <Features />
      <Showcase />
    </>
  )
}
