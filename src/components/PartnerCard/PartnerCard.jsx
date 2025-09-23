import './PartnerCard.scss'

const PartnerCard = (props) => {
  const {
    title,
    description,
    imgSrc
  } = props

  return (
    <div className="partner-card">
      <div className="partner-card__icons">
        <div className="partner-card__image-wrapper">
          <img
            src="/partners/logo.svg"
            alt=""
            className="partner-card__image"
            width={34}
            height={34}
            loading="lazy"
          />
        </div>

        <div className="partner-card__image-wrapper">
          <img
            src={imgSrc}
            alt=""
            className="partner-card__image"
            width={34}
            height={34}
            loading="lazy"
          />
        </div>
      </div>
      <div className="partner-card__body">
        <h3 className="partner-card__title">{title}</h3>
        <div className="partner-card__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default PartnerCard