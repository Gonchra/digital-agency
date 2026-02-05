import './JoinUs.scss'
import Section from '@/layouts/Section'
import getIdFromTitle from '@/utils/getIdFromTitle'
import Socials from '@/components/Socials'

const JoinUs = () => {
  const socialsItems = [
    {
      label: 'LinkedIn',
      iconName: 'linked-in',
    },
    {
      label: 'Facebook',
      iconName: 'facebook',
    },
    {
      label: 'Twitter',
      iconName: 'twitter',
    },
  ]

  const title = 'Join Us on Social Media'
  const description =
    'Stay updated with our latest projects, industry insights, and company news by following us on social media'

  return (
    <Section
      title={title}
      description={description}
      titleId={getIdFromTitle(title)}
      isSmallFontSize
    >
      <div className="join-us">
        <Socials className="join-us__soc1als" links={socialsItems} />
        <div className="join-us__details">
          <h3 className="join-us__title h4">Thank You!</h3>
          <div className="join-us__description">
            <p>
              For considering DigitX for your digital needs. We look forward to
              connecting with you and being part of your digital success!
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default JoinUs