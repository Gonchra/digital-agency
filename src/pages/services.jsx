import HeroAlt from '@/sections/HeroAlt'

export const metadata = {
  title: 'Services',
}

export default () => {
  const title = (
    <>
      <span>Our Comprehensive</span> Digital Solutions
    </>
  )

  const description = "At DigitX, we offer a comprehensive suite of digital solutions\n" +
    "            designed to propel your business to new heights in the digital\n" +
    "            realm. With a team of skilled professionals, cutting-edge\n" +
    "            technologies, and a passion for innovation, we are committed to\n" +
    "            delivering exceptional results for every project we undertake. From\n" +
    "            captivating web design that leaves a lasting impression to seamless\n" +
    "            web development that ensures optimal functionality, we cover every\n" +
    "            aspect of your online presence."

  return (
    <>
      <HeroAlt title={title} description={description}/>
    </>
  )
}