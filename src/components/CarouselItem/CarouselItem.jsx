import './CarouselItem.scss'
import Icon from '@/components/Icon'

const CarouselItem = (props) => {
  const {
    description,
    name,
    jobTitle,
    imgSrc
  } = props

  return (
    <div className="carousel-item">
      <div className="carousel-item__comment">
        <div className="carousel-item__icon-wrapper">
          <Icon
            className="carousel-item__icon"
            name='twitter-l'
            hasFill
          />
        </div>
        <div className="carousel-item__description">
          <p>{description}</p>
        </div>
      </div>
      <div className="carousel-item__person">
        <img
          src={imgSrc}
          alt=""
          width={70}
          height={70}
          className="carousel-item__image"
        />
        <div className="carousel-item__info">
          <div className="carousel-item__name">
            {name}
          </div>
          <div className="carousel-item__job-title">
            {jobTitle}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarouselItem