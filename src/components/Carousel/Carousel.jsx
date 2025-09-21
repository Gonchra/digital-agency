import './Carousel.scss'
import CarouselItem from '@/components/CarouselItem'

const Carousel = (props) => {
  const {items} = props

  return (
    <div className="carousel">
      <div className="carousel__inner">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            {...item}
          />
        ))}
      </div>
      <div aria-hidden={true} className="carousel__inner">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel