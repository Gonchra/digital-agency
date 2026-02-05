import './OnlineCard.scss'

const OnlineCard = (props) => {
  const { title, description, iconSrc } = props

  return (
    <div className="online-card">
      <header className="online-card__header">
        <div className="online-card__image-wrapper">
          <img
            className="online-card__image"
            src={iconSrc}
            alt=""
            width={34}
            height={34}
            loading="lazy"
          />
        </div>
        <h3 className="online-card__title h4">
          {title}
        </h3>
      </header>
      <div className="online-card__description">
        {description}
      </div>
    </div>
  )
}

export default OnlineCard
