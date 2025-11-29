import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import AwardCard from '@/components/AwardCard'

const Awards = () => {
  const awardItems = [
    {
      title: "Digital Excellence Award",
      description: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptioanal web design and development solutions that push the boundaries of creativity and functionality.",
      date: "October 2017",
      answer: "Innovative web design and development solutions.",
    },
    {
      title: "Top Mobile App Development Agency",
      description: "Recognized as a top mobile app development agency by industry experts, highlighting our proficiency in delivering seamless and user-centric mobile applications.",
      date: "March 2019",
      answer: "Unparalleled app development services and designs.",
    },
    {
      title: "Best Digital Marketing Campaign",
      description: "Awarded for an exceptional digital marketing campaign with outstanding results, showcasing our data-driven strategies and targeted marketing efforts that achieved remarkable business growth for our clients.",
      date: "July 2022",
      answer: "Data-driven strategies and targeted marketing efforts.",
    },
    {
      title: "Innovative Tech Startup Award",
      description: "Recognition of our pioneering efforts as a technology startup, acknowledging our commitment to exploring and implementing cutting-edge technologies to drive innovation in the digital space.",
      date: "January 2026",
      answer: "Pioneering in the use of emerging technologies.",
    },
  ]

  const title = (
    <>
      Our <span>Awards & Recognitions</span>
    </>
  )

  const description = "Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."

  return (
    <Section
      title={title}
      titleId="awards-title"
      description={description}
    >
      <Grid columns={2}>
        {awardItems.map((awardItem, index) => (
          <AwardCard
            key={index}
            {...awardItem}
          />
        ))}
      </Grid>
    </Section>
  )
}

export default Awards