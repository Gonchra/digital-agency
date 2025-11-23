import About from '@/sections/About'
import HeroAlt from '@/sections/HeroAlt'
import Members from '@/sections/Members'
import Achievements from '@/sections/Achievements'

export const metadata = {
  title: 'About',
}

export default () => {
  const title = (
    <>
      <span>Elevating Brands</span> in the Digital Age
    </>
  )

  const description = "Welcome to DigitX, your trusted partner in the dynamic world of digital solutions. We are a passionate team of creative minds, tech enthusiasts, and digital strategists, dedicated to empowering businesses and individuals in the digital realm. Our mission is to deliver exceptional results that drive success, create meaningful connections, and bring your digital vision to life. With a customer-centric approach and a focus on innovation, we are committed to being at the forefront of the ever-evolving digital landscape."

  return (
    <>
      <HeroAlt title={title} description={description} />
      <Members />
      <Achievements />
    </>
  )
}
