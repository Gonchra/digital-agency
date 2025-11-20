import './PendingCard.scss'

const PendingCard = (props) => {
  const {
    title,
    imgSrc,
    category,
    expectedCompletion,
    description
  } = props

  return (
    <div className="pending-card">
      <header className="pending-card__header">
        <div className="pending-card__image-wrapper">
          <img
            src={imgSrc}
            alt=""
            width={34}
            height={34}
            className="pending-card__image"
            loading="lazy"
          />
        </div>
        <h3 className="pending-card__title">
          {title}
        </h3>
      </header>
      <ul className="pending-card__info">
        <li className="pending-card__info-item">
          <h4 className="pending-card__info-title">
            Category
          </h4>
          <div className="pending-card__info-description">
            {category}
          </div>
        </li>
        <li className="pending-card__info-item">
          <h4 className="pending-card__info-title">
            Expected Completion
          </h4>
          <div className="pending-card__info-description">
            {expectedCompletion}
          </div>
        </li>
      </ul>
      <div className="pending-card__body">
        <h5 className="pending-card__body-title">
          Project Description
        </h5>
        <div className="pending-card__body-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default PendingCard