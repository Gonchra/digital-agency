import './Locations.scss'
import Section from '@/layouts/Section'
import getIdFromTitle from '@/utils/getIdFromTitle'
import LocationCard from '@/components/LocationCard'

const Locations = () => {
  const locationsItems = [
    {
      iconSrc: '/locations/icons/new-york-icon.svg',
      city: 'New York',
      address: '123 Main Street, Suite 456, New York, NY 10001',
    },
    {
      iconSrc: '/locations/icons/san-francisco-icon.svg',
      city: 'San Francisco',
      address: '789 Tech Avenue, 10th Floor, San Francisco, CA 94105',
    },
  ]

  const title = 'Office Locations'
  const description =
    'Visit our offices to have a face-to-face discussion with our team. We have locations in'

  return (
    <Section
      title={title}
      titleId={getIdFromTitle(title)}
      description={description}
      isSmallFontSize
    >
      <div className="locations">
        <ul className="locations__list">
          {locationsItems.map((locationItem, index) => (
            <li
              key={crypto?.randomUUID() ?? index}
              className="locations__item"
            >
              <LocationCard
                {...locationItem}
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}

export default Locations
