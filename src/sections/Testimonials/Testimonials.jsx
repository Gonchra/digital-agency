import Section from '@/layouts/Section'
import Carousel from '@/components/Carousel'

const Testimonials = () => {
  const testimonialsItems = [
    {
      description: "Working with DigitX was a pleasure. Their web design team created a stunning website that perfectly captured our brand's essence. The feedback from our customers has been overwhelmingly positive.",
      name: "Mark Roberts",
      jobTitle: "Founder of GreenEarth Eco Store",
      imgSrc: "/testimonials/1.png",
    },
    {
      description: "The mobile app DigitX developed for us exceeded our expectations. Its user-friendly interface and seamless functionality have earned us rave reviews from our users.",
      name: "Lisa Williams",
      jobTitle: "Head of Product at HealthTech Innovations",
      imgSrc: "/testimonials/2.png",
    },
    {
      description: "DigitX transformed our outdated website into a modern, responsive platform. Their attention to detail and ability to understand our vision made the entire process smooth and hassle-free.",
      name: "Michael Johnson",
      jobTitle: "Marketing Manager at GlobalTech Solutions.",
      imgSrc: "/testimonials/3.png",
    },
    {
      description: "DigitX turned our business around! Their digital marketing strategies helped us reach new customers and increase our revenue by 30% within just a few months. Highly recommended!",
      name: "Sarah Thompson",
      jobTitle: "CEO of BlueBloom Fashion",
      imgSrc: "/testimonials/4.png"
    }
  ]

  const title = (
    <>
      Our <span>Testimonials</span>
    </>
  )

  const description = "Don't just take our word for it; hear what our satisfied clients have to say about their experience with DigitX. We take pride in building lasting relationships and delivering exceptional results."

  return (
    <Section
      title={title}
      titleId="testimonials-title"
      description={description}
    >
      <Carousel items={testimonialsItems} />
    </Section>
  )
}

export default Testimonials