import './AwardCard.scss'
import Icon from '@/components/Icon'

const AwardCard = (props) => {
  const {
    title,
    description,
    date,
    answer
  } = props

  return (
    <div className="award-card">
      <div className="award-card__inner">
        <header className="award-card__header">
          <div className="award-card__image-wrapper">
            <img
              src="/awards/award.svg"
              alt=""
              className="award-card__image"
              width={44}
              height={44}
              loading="lazy"
            />
          </div>
          <div className="award-card__date">
            <Icon
              name="calendar"
            /> {date}
          </div>
        </header>
        <div className="award-card__body">
          <h3 className="award-card__title">
            {title}
          </h3>
          <div className="award-card__description">
            <p>{description}</p>
          </div>
        </div>

        <div className="award-card__answer">
          <h4 className="award-card__answer-title">
            Why
          </h4>
          {answer}
        </div>
      </div>
    </div>
  )
}

export default AwardCard