import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import Button from '@/components/Button'
import WorkCard from '@/components/WorkCard'

const Works = () => {
  const worksItems = [
    {
      title: "Innovative E-commerce Platform",
      category: "Web Development",
      date: "January 2022",
      description: "Witness our groundbreaking e-commerce platform that seamlessly connects buyers and sellers worldwide. With an intuitive user interface and secure payment gateways, this project revolutionizes online shopping.",
      imgSrc: "/works/1.svg",
    },
    {
      title: "Mobile App for Enhanced Fitness",
      category: "Mobile App Development",
      date: "March 2022",
      description: "Our fitness app helps users stay fit and motivated with personalized workout plans and progress tracking. Its user-friendly design and comprehensive features make staying healthy an enjoyable experience.",
      imgSrc: "/works/2.svg",
    },
    {
      title: "Modern Corporate Website",
      category: "Web Design",
      date: "April 2022",
      description: "Check out our sleek and modern corporate website that showcases the client's brand and services. Its responsive design ensures a consistent experience across devices. ",
      imgSrc: "/works/3.svg",
    },
    {
      title: "Digital Marketing Success Story",
      category: "Digital Marketing",
      date: "May 2022",
      description: "Discover how our data-driven digital marketing strategies boosted a client's online presence, resulting in a significant increase in website traffic and leads.",
      imgSrc: "/works/4.svg",
    },
  ]

  const title = (
    <>
      Our <span>Works</span>
    </>
  )

  const description = "Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."

  return (
    <Section
      title={title}
      titleId="works-title"
      description={description}
    >
      <Grid columns={2}>
        {worksItems.map((worksItem, index) => (
          <WorkCard
            key={index}
            {...worksItem}
          />
        ))}
      </Grid>
      <Button
        label="View All Projects"
        href="/projects"
        iconName="arrow-white-right"
        hasFillIcon
        iconPosition="after"
      />
    </Section>
  )
}

export default Works