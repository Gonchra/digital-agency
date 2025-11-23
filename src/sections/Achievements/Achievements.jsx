import Section from '@/layouts/Section'
import OrderedList from '@/components/OrderedList'

const Achievements = () => {
  const achievementsItems = [
    {
      title: "Foundation of DigitX",
      description: "Recognition for outstanding contributions to the digital industry, celebrating our ability to deliver exceptional web design and development solutions that push the boundaries of creativity and functionality.",
      date: "October 2017",
    },
    {
      title: "100 Successful Projects",
      description: "We celebrated a significant milestone of completing 100 successful projects, marking our commitment to delivering excellence in every endeavor. Our diverse portfolio showcased our ability to cater to various industries and client requirements.",
      date: "June 2018",
    },
    {
      title: "Expansion to International Markets",
      description: "We expanded our services to international clients, opening new avenues for growth and global collaboration. Our expansion into international markets solidified our position as a leading digital agency with a global footprint.",
      date: "August 2019",
    },
    {
      title: "DigitX Innovation Lab Inauguration",
      description: "To foster creativity and innovation, we inaugurated the DigitX Innovation Lab. This state-of-the-art facility served as a hub for our team to ideate, experiment, and explore emerging technologies.",
      date: "March 2021",
    },
    {
      title: "500 Satisfied Clients",
      description: "We celebrated reaching a milestone of serving 500 satisfied clients, further strengthening our reputation for customer-centric services and successful project outcomes.",
      date: "September 2023",
    },

  ]

  const title = (
    <>
      Our <span>Achievements</span>
    </>
  )

  const description = "Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."

  return (
    <Section
      title={title}
      titleId="achievements-title"
      description={description}
    >
      <OrderedList
        items={achievementsItems}
      />
    </Section>
  )
}

export default Achievements