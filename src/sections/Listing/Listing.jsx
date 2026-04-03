import "./Listing.scss"
import Section from '@/layouts/Section'
import ListingCard from '@/components/ListingCard'

const Listing = () => {
  const listingItems = [
    {
      title: 'Web Designer',
      location: 'Mumbai, India',
      isExpanded: true,
      salary: '$45,000 - $60,000 per year (based on experience)',
      experience: 'Minimum 1 year of professional web design experience.',
      skills:
        'Proficiency in Adobe Creative Suite (Photoshop, Illustrator, etc.), strong understanding of UI/UX design principles, responsive design expertise.',
      description:
        'As a Web Designer at DigitX, you will be responsible for creating visually stunning and user-friendly website designs. Working closely with our development and marketing teams, you will turn creative concepts into functional web interfaces that deliver exceptional user experiences. This role offers an opportunity to showcase your design expertise and contribute to a wide range of exciting projects for diverse clients.',
      applicationDeadline: '30th September 2025',
      responsibilities: [
        'Design and create visually appealing website layouts, graphics, and icons.',
        'Collaborate with UI/UX designers and front-end developers to ensure seamless integration of design elements.',
        'Conduct user research to understand user behaviors and preferences for optimized design decisions.',
        'Stay updated with industry trends and emerging design tools and techniques.',
        'Present design concepts and prototypes to internal teams and clients for feedback and approval.',
      ],
    },
    {
      title: 'Mobile App Developer',
      location: 'Mumbai, India',
      salary: '$55,000 - $75,000 per year (based on experience)',
      experience: 'Minimum 2 years of mobile app development experience.',
      skills:
        ' Proficiency in iOS or Android development (Swift, Kotlin), knowledge of mobile app design patterns, experience with mobile testing and debugging.',
      description:
        'As a Web Designer at DigitX, you will be responsible for creating visually stunning and user-friendly website designs. Working closely with our development and marketing teams, you will turn creative concepts into functional web interfaces that deliver exceptional user experiences. This role offers an opportunity to showcase your design expertise and contribute to a wide range of exciting projects for diverse clients.',
      applicationDeadline: '30th September 2025',
      responsibilities: [
        'Design and create visually appealing website layouts, graphics, and icons.',
        'Collaborate with UI/UX designers and front-end developers to ensure seamless integration of design elements.',
        'Conduct user research to understand user behaviors and preferences for optimized design decisions.',
        'Stay updated with industry trends and emerging design tools and techniques.',
        'Present design concepts and prototypes to internal teams and clients for feedback and approval.',
      ],
    },
    {
      title: 'Digital Marketing Specialist',
      location: 'Mumbai, India',
      salary: '$50,000 - $65,000 per year (based on expertise)',
      experience: 'Minimum 3 years of digital marketing experience.',
      skills:
        'Proficiency in SEO, SEM, and social media marketing, experience with analytics tools (Google Analytics, etc.), content marketing expertise.',
      description:
        'As a Web Designer at DigitX, you will be responsible for creating visually stunning and user-friendly website designs. Working closely with our development and marketing teams, you will turn creative concepts into functional web interfaces that deliver exceptional user experiences. This role offers an opportunity to showcase your design expertise and contribute to a wide range of exciting projects for diverse clients.',
      applicationDeadline: '30th September 2025',
      responsibilities: [
        'Design and create visually appealing website layouts, graphics, and icons.',
        'Collaborate with UI/UX designers and front-end developers to ensure seamless integration of design elements.',
        'Conduct user research to understand user behaviors and preferences for optimized design decisions.',
        'Stay updated with industry trends and emerging design tools and techniques.',
        'Present design concepts and prototypes to internal teams and clients for feedback and approval.',
      ],
    },
  ]
  const title = (
    <>
      <span>Job Listings</span> at DigitX
    </>
  )

  const description =
    'Explore our current job listings to discover exciting career opportunities that match your skill set and interests. We offer positions in various digital disciplines, including web design, mobile app development, digital marketing, project management, and more. Each job listing provides comprehensive details about the role, responsibilities, qualifications, and benefits. Whether you are an experienced professional or a fresh graduate, we welcome talent from all backgrounds to join our team.'

  return (
    <Section title={title} titleId="listing-title" description={description}>
      <div className="listing">
        <div className="listing__inner">
          <ul className="listing__list">
            {listingItems.map((item, index) => (
              <li
                  key={crypto?.randomUUID() ?? index}
                  className="listing__item"
              >
                <ListingCard {...item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default Listing