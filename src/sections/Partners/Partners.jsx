import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import PartnerCard from '@/components/PartnerCard'

const Partners = () => {
  const partnersItems = [
    {
      title: "ABC Tech Solutions",
      description: "A leading technology firm that trusted DigitX to develop their responsive website, showcasing their cutting-edge products and services.",
      imgSrc: "/partners/1.svg"
    },
    {
      title: "GreenEarth Eco Store",
      description: "DigitX collaborated with GreenEarth Eco Store to create an engaging e-commerce platform that promotes sustainable living and eco-friendly products.",
      imgSrc: "/partners/2.svg"
    },
    {
      title: "HealthTech Innovations",
      description: "DigitX developed a user-centric mobile app for HealthTech Innovations, helping them revolutionize the way people track and manage their health.",
      imgSrc: "/partners/3.svg"
    },
    {
      title: "GlobalTech Solutions",
      description: "GlobalTech Solutions partnered with DigitX for a website redesign, resulting in a modern interface that elevates their online presence.",
      imgSrc: "/partners/4.svg"
    },
    {
      title: "TechGuru Inc.",
      description: "DigitX's digital marketing strategies boosted TechGuru Inc.'s online visibility and customer engagement, driving significant business growth.",
      imgSrc: "/partners/5.svg"
    },
    {
      title: "ArtScape Gallery",
      description: "DigitX brought ArtScape Gallery's artistic vision to life with a visually stunning website, showcasing the work of talented artists.",
      imgSrc: "/partners/6.svg"
    },
  ]

  const title = (
    <>Our <span>Partners and Clients</span></>
  )

  const description = "We are grateful for the opportunity to work with esteemed partners and clients. Our strong relationships are a testament to our dedication and expertise in the digital realm."

  return (
    <Section
      title={title}
      titleId="partners-title"
      description={description}
    >
      <Grid columns={3}>
        {partnersItems.map((partnersItem, index) => (
          <PartnerCard
            key={index}
            {...partnersItem}
          />
        ))}
      </Grid>
    </Section>
  )
}

export default Partners