import './ServeCard.scss'
import Button from '@/components/Button'

const ServeCard = (props) => {
  const { title, description, imgSrc, price, isExtra = false } = props

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
      <div className="serve-card__actions">
        {price ? (
          <>
            <div className="serve-card__price">
              Starts at Price: <span>${price}</span>
            </div>
            <Button
              className="serve-card__button"
              label="Book a Call"
              mode="icon-bg"
              iconName="arrow-white-right"
              iconPosition="after"
              hasFillIcon
            />
          </>
        ) : (
          <Button
            className="serve-card__button"
            label={!isExtra ? "Learn More" : "View Page"}
            iconName="arrow-white-right"
            iconPosition="after"
            hasFillIcon
          />
        )}
      </div>
    </div>
  )
}

export default ServeCard
