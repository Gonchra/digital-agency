import Section from '@/layouts/Section'
import Grid from '@/components/Grid'
import StoryCard from '@/components/StoryCard'
import Button from '@/components/Button'

const Stories = () => {
  const storiesItems = [
    {
      title: "ABC Tech Solutions",
      imgSrc: "./stories/1.svg",
      badgeItems: [
        {
          imgSrc: "./stories/badge/1.svg",
          description: "E-commerce"
        },
        {
          imgSrc: "./stories/badge/2.svg",
          description: "Web Design & Development",
        }
      ],
      challenge: "ABC Enterprises approached us with a desire to revamp their outdated website and create a more user-friendly and visually appealing platform. They sought to improve user engagement and increase online sales.",
      solution: "Our team conducted a thorough analysis of their target audience and business objectives. We designed a modern and intuitive website with seamless navigation and a mobile-responsive layout. Additionally, we integrated an efficient checkout process and optimized the site for search engines."
    },
    {
      title: "Fitness Tracker App",
      imgSrc: "./stories/2.svg",
      badgeItems: [
        {
          imgSrc: "./stories/badge/1.svg",
          description: "Health & Fitness"
        },
        {
          imgSrc: "./stories/badge/2.svg",
          description: "Mobile App Development",
        }
      ],
      challenge: "Our client aimed to create an all-in-one fitness tracking app to cater to health enthusiasts and fitness professionals. They wanted a seamless user interface, real-time data tracking, and social sharing features.",
      solution: "Leveraging our expertise in app development, we built an interactive mobile app with user-friendly features. The app allowed users to set personalized fitness goals fitness goals, track their progress, and share achievements on social media platforms."
    },
  ]

  const title = (
    <>
      <span>Success</span> Stories
    </>
  )

  const description = "At DigitX, our success is defined by the achievements of our valued clients. We take immense pride in the transformative impact our digital solutions have had on their businesses. Here are some inspiring success stories that highlight the outcomes of our collaborative efforts"

  return (
    <Section
      title={title}
      titleId="stories-title"
      description={description}
    >
      <Grid columns={2}>
        {storiesItems.map((storiesItem, index) => (
          <StoryCard
            key={index}
            {...storiesItem}
          />
        ))}
      </Grid>
      <Button
        label="View All Stories"
        href="/"
        mode="icon-bg"
        iconName="arrow-white-right"
        hasFillIcon
        iconPosition="after"
      />
    </Section>
  )
}

export default Stories