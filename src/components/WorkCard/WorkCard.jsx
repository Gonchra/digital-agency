import './WorkCard.scss'
import Button from '@/components/Button'

const WorkCard = (props) => {
  const {
    title,
    category,
    date,
    description,
    imgSrc,
  } = props

  return (
    <div className="work-card">
      <div className="work-card__image-wrapper">

        <img
          src={imgSrc}
          alt=""
          className="work-card__image"
        />

        <Button
          className="work-card__button"
          iconName="arrow-white-right"
          iconPosition="after"
          hasFillIcon
          label="View Projects Details"
          href="/projects"
        />
      </div>

      <div className="work-card__body">
        <h3 className="work-card__title h4">{title}</h3>
        <div className="work-card__info">
          <div className="work-card__category">
            Category: {category}.
          </div>

          <div className="work-card__date">
            {date}
          </div>
        </div>
        <div className="work-card__description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default WorkCard