import './Showcase.scss'
import Section from '@/layouts/Section'
import ShowcaseCard from '@/components/ShowcaseCard'

const Showcase = () => {
  const showcaseItems = [
    {
      title: 'E-Commerce Revolution',
      showcaseImg: '/showcase/preview-image.jpg',
      isExpanded: true,
      badgeItems: [
        {
          description: 'E-commerce',
          imgSrc: '/showcase/badges/1.svg',
        },
        {
          description: 'Web Design & Development',
          imgSrc: '/showcase/badges/2.svg',
        },
        {
          description: 'Web Design & Development',
          imgSrc: '/showcase/badges/3.svg',
        },
      ],
      projectsItems: {
        description:
          'A dynamic e-commerce platform that revolutionized online shopping for fashion enthusiasts. The website showcases the latest trends, offers personalized recommendations, and seamless checkout options.',
        category: [
          {
            title: 'Category',
            metric: 'E-commerce',
          },
          {
            title: 'Time Taken',
            metric: '4 Months',
          },
          {
            title: 'Start Date',
            metric: 'January 15, 2023',
          },
          {
            title: 'Completed Date',
            metric: 'May 15, 2023',
          },
        ],
        technologies: [
          {
            title: 'Figma',
            imgSrc: '/showcase/technologies/1.svg',
          },
          {
            title: 'HTML',
            imgSrc: '/showcase/technologies/2.svg',
          },
          {
            title: 'CSS',
            imgSrc: '/showcase/technologies/3.svg',
          },
          {
            title: 'JavaScript',
            imgSrc: '/showcase/technologies/4.svg',
          },
        ],
        teamMembers: [
          {
            title: 'Web Developers',
            team: [
              {
                name: 'John Smith',
                imgSrc: '/showcase/team-members/1.png',
              },
              {
                name: 'Emily Johnson',
                imgSrc: '/showcase/team-members/2.png',
              },
            ],
          },
          {
            title: 'UI UX Designer',
            team: [
              {
                name: 'Jessica Lee',
                imgSrc: '/showcase/team-members/3.png',
              },
            ],
          },
          {
            title: 'Project Manager',
            team: [
              {
                name: 'Michael Williams',
                imgSrc: '/showcase/team-members/4.png',
              },
            ],
          },
        ],
        methods: ['Agile Development', 'User Testing', 'A/B Testing'],
      },
    },
    {
      title: 'E-Commerce Revolution',
      showcaseImg: '/showcase/preview-image-2.jpg',
      badgeItems: [
        {
          description: 'E-commerce',
          imgSrc: '/showcase/badges/1.svg',
        },
        {
          description: 'Web Design & Development',
          imgSrc: '/showcase/badges/2.svg',
        },
        {
          description: 'Web Design & Development',
          imgSrc: '/showcase/badges/3.svg',
        },
      ],
      projectsItems: {
        description:
          'A dynamic e-commerce platform that revolutionized online shopping for fashion enthusiasts. The website showcases the latest trends, offers personalized recommendations, and seamless checkout options.',
        category: [
          {
            title: 'Category',
            metric: 'E-commerce',
          },
          {
            title: 'Time Taken',
            metric: '4 Months',
          },
          {
            title: 'Start Date',
            metric: 'January 15, 2023',
          },
          {
            title: 'Completed Date',
            metric: 'May 15, 2023',
          },
        ],
        technologies: [
          {
            title: 'Figma',
            imgSrc: '/showcase/technologies/1.svg',
          },
          {
            title: 'HTML',
            imgSrc: '/showcase/technologies/2.svg',
          },
          {
            title: 'CSS',
            imgSrc: '/showcase/technologies/3.svg',
          },
          {
            title: 'JavaScript',
            imgSrc: '/showcase/technologies/4.svg',
          },
        ],
        teamMembers: [
          {
            title: 'Web Developers',
            team: [
              {
                name: 'John Smith',
                imgSrc: '/showcase/team-members/1.png',
              },
              {
                name: 'Emily Johnson',
                imgSrc: '/showcase/team-members/2.png',
              },
            ],
          },
          {
            title: 'UI UX Designer',
            team: [
              {
                name: 'Jessica Lee',
                imgSrc: '/showcase/team-members/3.png',
              },
            ],
          },
          {
            title: 'Project Manager',
            team: [
              {
                name: 'Michael Williams',
                imgSrc: '/showcase/team-members/4.png',
              },
            ],
          },
        ],
        methods: ['Agile Development', 'User Testing', 'A/B Testing'],
      },
    },
  ]

  const title = (
    <>
      <span>Projects</span> Showcase
    </>
  )
  const description =
    "Witness the brilliance of our previous projects. Our portfolio showcases the successful collaborations we've had with diverse clients across various industries. Let our work speak for itself."

  return (
    <Section title={title} titleId="showcase-title" description={description}>
      <div className="showcase">
        {showcaseItems.map((showcaseItem, index) => (
          <ShowcaseCard key={index} {...showcaseItem} />
        ))}
      </div>
    </Section>
  )
}

export default Showcase
