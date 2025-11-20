import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import PendingCard from '@/components/PendingCard'

const Pending = () => {
  const pendingItems = [
    {
      title: "Healthcare Platform Enhancement",
      imgSrc: "/pending/icons/1.svg",
      category: "Web Development",
      expectedCompletion: "Q4 2023",
      description: "Our team is collaborating with a leading healthcare provider to enhance their existing platform. The project aims to streamline user experiences, optimize database performance, and implement advanced security measures to safeguard patient data. This ambitious undertaking will elevate the platform's capabilities and revolutionize healthcare accessibility for users."
    },
    {
      title: "AI-Driven Marketing Automation",
      imgSrc: "/pending/icons/2.svg",
      category: "Digital Marketing",
      expectedCompletion: "Q1 2024",
      description: "We are partnering with a dynamic marketing agency to develop an AI-driven marketing automation platform. This cutting-edge solution will empower businesses to optimize their marketing efforts through data-driven insights, personalized customer interactions, and automated campaign management. The project promises to revolutionize the digital marketing landscape and drive exceptional results for businesses of all sizes."
    },
    {
      title: "Educational Learning App",
      imgSrc: "/pending/icons/3.svg",
      category: "E-commerce",
      expectedCompletion: "Q4 2024",
      description: "We are collaborating with an eco-conscious startup to create an innovative e-commerce platform that promotes sustainable products and environmentally friendly practices. The platform will empower consumers to make eco-conscious choices while supporting sustainable businesses. This project aligns with our commitment to creating digital solutions that contribute to a greener future."
    },
    {
      title: "Community Engagement Portal",
      imgSrc: "/pending/icons/4.svg",
      category: "Web Development",
      expectedCompletion: "Q4 2024",
      description: "Our team is excited to be part of a community-driven initiative to develop an engagement portal that connects residents with local services, events, and resources. The portal aims to foster community interactions, promote inclusivity, and enhance the quality of life for residents. This project represents our dedication to using technology for positive social impact."
    },
  ]

  const title = (
    <>
      <span>Upcoming</span> Projects
    </>
  )

  const description = "At DigitX, we are continually working on exciting new projects to push the boundaries of digital innovation and deliver exceptional solutions to our valued clients. While we are thrilled to share our upcoming projects with you, we understand the importance of confidentiality and safeguarding sensitive information. Therefore, we will provide a brief overview of the upcoming projects while keeping specific details concealed."

  return (
    <Section
      title={title}
      titleId="pending-title"
      description={description}
    >
      <Grid columns={2}>
        {pendingItems.map((pendingItem) => (
          <PendingCard
            key={pendingItem.title}
            {...pendingItem}
          />
        ))}
      </Grid>
    </Section>
  )
}

export default Pending