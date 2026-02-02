import './LocationCard.scss'
import Button from '@/components/Button'

const LocationCard = (props) => {
  const { iconSrc, city, address } = props

  return (
    <div className="location-card">
      <div className="location-card__image-wrapper">
        <img
          className="location-card__image"
          src={iconSrc}
          alt=""
          width={44}
          height={44}
          loading="lazy"
        />
      </div>
      <div className="location-card__details">
        <h3 className="location-card__title h4">{city}</h3>
        <address className="location-card__address">{address}</address>
      </div>
      <Button
        className="location-card__button"
        label="Get Direction"
        href="/"
        mode="icon-bg"
        iconName="arrow-white-right"
        iconPosition="after"
      />
    </div>
  )
}

export default LocationCard
