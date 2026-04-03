import HeroAlt from '@/sections/HeroAlt'
import Listing from '@/sections/Listing'

export const metadata = {
  title: 'Careers',
}

export default () => {
  const title = (
    <>
      <span>Unlock Your Potential</span> in the Digital World
    </>
  )
  const description =
    'At DigitX, we believe in fostering a dynamic and collaborative work environment that empowers our team members to excel in their respective fields. Join us to be part of a passionate and innovative team dedicated to crafting exceptional digital solutions for clients across the globe. We are committed to nurturing talent, encouraging professional growth, and creating a workplace where creativity thrives.'
  
  return (
    <>
      <HeroAlt
        title={title}
        description={description}
      />
      <Listing />
    </>
  )
}