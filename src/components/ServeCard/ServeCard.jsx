import './ServeCard.scss'
import Button from '@/components/Button'

const ServeCard = (props) => {
  const {
    title,
    description,
    imgSrc
  } = props

  return (
    <div className="serve-card">
      <div className="serve-card__image-wrapper">
        <img
          src={imgSrc}
          alt=""
          className="serve-card__image"
          width={44}
          height={44}
          loading="lazy"
        />
      </div>
      <header className="serve-card__header">
        <h3 className="serve-card__title">{title}</h3>
        <div className="serve-card__description">
          <p>{description}</p>
        </div>
      </header>
      <Button
        className="serve-card__button"
        label="Learn More"
        iconName="arrow-white-right"
        iconPosition="after"
        hasFillIcon
      />
    </div>
  )
}

export default ServeCard