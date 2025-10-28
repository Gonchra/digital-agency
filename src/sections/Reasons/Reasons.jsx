import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import ReasonCard from '@/components/ReasonCard'

const Reasons = () => {
  const reasonsItems = [
    {
      title: "Expertise That Drives Results",
      description: "Our team of seasoned professionals brings years of experience and expertise to the table.",
      imgSrc: "/reasons/1.svg"
    },
    {
      title: "Tailored Business Solutions",
      description: "We understand that every business is unique. That's why our solutions are customized.",
      imgSrc: "/reasons/2.svg"
    },
    {
      title: "Cutting-Edge Web Design",
      description: "Leave a lasting impression on your audience with our top-notch web design services.",
      imgSrc: "/reasons/3.svg"
    },
    {
      title: "Mobile-First Approach",
      description: "In today's mobile-centric world, we prioritize mobile-first design to ensure your website.",
      imgSrc: "/reasons/4.svg"
    },
    {
      title: "Marketing Strategies",
      description: "Our data-driven marketing strategies allow us to target the right audience with precision",
      imgSrc: "/reasons/5.svg"
    },
    {
      title: "Search Engine Optimization",
      description: "(SEO) Mastery Boost your online visibility with our expert SEO techniques.",
      imgSrc: "/reasons/6.svg"
    },
  ]

  const description = 'Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.'
  const title = (
    <>
      <span>Reasons to Choose DigitX for</span> <br />
      Your Digital Journey
    </>)

  return (
    <Section
      titleId="reasons-title"
      title={title}
      description={description}
    >
      <Grid
        columns={3}
        mode="bordered"
      >
        {reasonsItems.map((reasonsItem, index) => (
          <ReasonCard
            key={index}
            {...reasonsItem}
            hasButton
          />
        ))}
      </Grid>
    </Section>
  )
}

export default Reasons