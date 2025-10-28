import './ReasonCard.scss'
import Button from '@/components/Button'

const ReasonCard = (props) => {
  const {
    title,
    description,
    imgSrc,
    hasButton = false
  } = props

  return (
    <div className="reason-card">
      <header className="reason-card__header">
        <div className="reason-card__image-wrapper">
          <img
            className="reason-card__image"
            src={imgSrc}
            alt=""
            width={44}
            height={44}
            loading="lazy"
          />
        </div>
        <h3 className="reason-card__title h4">{title}</h3>
        <div className="reason-card__description">
          <p>{description}</p>
        </div>
      </header>
      {hasButton && (
        <Button
          className="reason-card__button"
          href="/"
          label="Learn More"
          iconName="arrow-white-right"
          mode="icon-bg"
          hasFillIcon
          iconPosition="after"
        />
      )}
    </div>
  )
}

export default ReasonCard