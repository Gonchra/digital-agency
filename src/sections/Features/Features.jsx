import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import ReasonCard from '@/components/ReasonCard'

const Features = () => {
  const featuresItems = [
    {
      title: "Strategic Planning",
      description: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.",
      imgSrc: "/features/1.svg",
    },
    {
      title: "Customized Solutions",
      description: "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions that perfectly align with our clients' brand identities.",
      imgSrc: "/features/2.svg",
    },
    {
      title: "User-Centric Approach",
      description: "Our projects are designed with the end-user in mind, prioritizing seamless user experiences and intuitive interfaces.",
      imgSrc: "/features/3.svg",
    },
    {
      title: "Cutting-Edge Technologies",
      description: "We leverage the latest technologies and industry best practices to deliver high-performance and future-proof solutions.",
      imgSrc: "/features/4.svg",
    },
    {
      title: "Timely Delivery",
      description: "We adhere to strict timelines and project schedules to ensure timely delivery without compromising on quality.",
      imgSrc: "/features/5.svg",
    },
    {
      title: "Strategic Planning",
      description: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.",
      imgSrc: "/features/6.svg",
    },
  ]

  const title = (
    <>
      <span>Key Features</span> of Our Projects
    </>
  )
  const description = "Partnering with DigitX offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success."

  return (
    <Section
      title={title}
      titleId="features-title"
      description={description}
    >
      <Grid columns={3} mode="bordered">
        {featuresItems.map((featuresItem, index) => (
          <ReasonCard
            key={index}
            {...featuresItem}
          />
        ))}
      </Grid>
    </Section>
  )
}

export default Features